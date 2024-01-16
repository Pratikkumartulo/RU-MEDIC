const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    contact: String,
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;