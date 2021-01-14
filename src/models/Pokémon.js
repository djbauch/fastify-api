const mongoose = require('mongoose')

const pokémonSchema = new mongoose.Schema({
    nomenclature: String,
    code: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Pokémon', pokémonSchema)
