const admin = require('firebase-admin');

// Replace these values with your Firebase project credentials
const serviceAccount = require('./ru-medic-firebase-adminsdk-tv1rg-e1aa4bcefb.json');
const databaseURL = 'https://ru-medic-default-rtdb.firebaseio.com/';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL,
});

const db = admin.database();

const messagesRef = db.ref('Hospitals');
// messagesRef.push({
//   text: 'Hello, Firebase from Node.js!',
// });

// Listen for changes in the database
// messagesRef.on('child_added', (snapshot) => {
//   console.log(snapshot.val().bed);
//   // console.log('Data from Firebase:', data.text);
// });
messagesRef.once('value')
  .then((snapshot) => {
    // Handle the snapshot (contains your data)
    const data = snapshot.val();
    Object.keys(data).forEach((hospitalName) => {
      const bedNumber = data[hospitalName].bed;
      console.log(`${hospitalName}: ${bedNumber} beds`);
    });
  })
  .catch((error) => {
    console.error('Error reading data: ', error);
  });