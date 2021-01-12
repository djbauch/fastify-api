const mongoose = require('mongoose')
const { stringify } = require('querystring')

const gymSchema = new mongoose.Schema({
    name: String,
    encyclopedia_number: String,
    suffix: String,
    category: Number,
    coordinate: String
})

module.exports = mongoose.model('Gym', gymSchema)