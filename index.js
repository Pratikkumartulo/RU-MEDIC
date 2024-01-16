const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const Hospital = require("./models/HospitalData");
const mongoose = require("mongoose");
const axios = require("axios");
const flash = require("connect-flash");
const admin = require("firebase-admin");
const session = require("express-session");

const serviceAccount = require("./ru-medic-firebase-adminsdk-tv1rg-e1aa4bcefb.json");
const databaseURL = "https://ru-medic-default-rtdb.firebaseio.com/";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL,
});
const auth = admin.auth();
const db = admin.database();

const messagesRef = db.ref("Hospitals");
const doctorRef = db.ref("Doctors");

mongoose
  .connect("mongodb://127.0.0.1:27017/Hospital")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });
  app.use(session({
    secret:"hellohellorumedyhello",
    resave:false,
    saveUninitialized:true,
  }))
app.use(flash());

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(express.static("views/images"));
app.use(express.static("views/Videos"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  next();
})

app.listen("3000", (req, res) => {
  console.log("App is listening !!");
});

app.get("/", (req, res) => {
  res.render("pages/home.ejs");
});

app.get("/Hosnear", async (req, res) => {
  let { prob } = req.query;
  var data={name:"pratik"};
  try {
    const snapshot = await messagesRef.once("value");
    data = snapshot.val() || {}; // Update data with the fetched value
  } catch (error) {
    console.error("Error reading data: ", error);
  }

  res.render("pages/NearHos.ejs", { prob, data });
});
app.get("/search", async (req, res) => {
  let name = req.query.hospiName;
  let regep = new RegExp(name, "i");
  let result = await Hospital.find({ name: regep });
  res.render("pages/Search", { result });
});

app.post("/review", async (req,res)=>{
    let {rating, comment} = req.body;
    console.log(rating);
    console.log(comment);
})
app.get("/docs/:hospitaliName", (req, res) => {
  let hospitalName = req.params.hospitaliName;
  let data = {};

  try {
      doctorRef.once("value", (snapshot) => {
          data = snapshot.val() || {};
          res.render("pages/Available", { hospitalName, data });
      });
  } catch (error) {
      console.error("Error reading data: ", error);
  }
});


app.post("/appoint",(req,res)=>{
  let {date,docName,DocProf} = req.body;
  res.render("pages/register",{date,docName,DocProf});
})


app.get("/DoctorStatus", async (req,res)=>{
  res.render("pages/Docform");
})
app.post("/DoctorStatus", async (req, res) => {
  const data = req.body;

  try {
    // Create an array to store promises for all updates
    const updatePromises = [];

    Object.keys(data).forEach(async (name) => {
      // console.log(`${name} is ${data[name]}`);

      // Update the doctor's status in Firebase and store the promise
      const updatePromise = doctorRef.child(`/ChildDoctors/${name}`).set(data[name]);
      updatePromises.push(updatePromise);
    });

    // Wait for all updates to complete before redirecting
    await Promise.all(updatePromises);
    req.flash("success","Database updated Successfully !")

    // Redirect to the Available page after all updates are done
    res.redirect(`/DoctorStatus`);
  } catch (error) {
    console.error("Error updating doctor status: ", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/login",(req,res)=>{
  res.render("pages/login");
})

app.get("/bloodgrp",(req,res)=>{
  res.render("pages/blood")
})
app.get("/bloodgrp/:blood",(req,res)=>{
  let {blood} = req.params;
  res.render(`pages/${blood}`)
})

app.get("/User",(req,res)=>{
  res.render("pages/User");
})


app.post("/registrate",(req,res)=>{
  req.flash("success","Regitered successfull !!");
  res.send("Regitered Successfull !!!!")
})
