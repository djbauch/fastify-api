const mongoose = require('mongoose')

const guildSchema = new mongoose.Schema({
    name: String,
    encyclopedia_number: String,
    suffix: String,
    category: Number,
    coordinate: String
})

module.exports = mongoose.model('Guild', guildSchema)