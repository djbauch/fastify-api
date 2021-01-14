const mongoose = require('mongoose')

const gymSchema = new mongoose.Schema({
    name: String,
    encyclopedia_number: String,
    suffix: String,
    category: Number,
    coordinate: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Gym', gymSchema)