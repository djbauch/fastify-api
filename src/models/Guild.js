const mongoose = require('mongoose')

const guildSchema = new mongoose.Schema({
    name: String,
    identifier: String,
    operational_status: String,
    condition: String,
    location_reason: String,
    location_name: String,
    latitude: Number,
    longitude: Number,
})

module.exports = mongoose.model('Guild', guildSchema)