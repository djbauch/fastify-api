const boom = require('boom')
const Pokémon = require('../models/Pokémon')

// Get all pokémons
exports.getPokémons = async(req, reply) => {
    try {
        const pokémons = await Pokémon.find()
        return pokémons
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get a single pokémon by Encyclopedia Number
exports.getSinglePokémon = async(req, reply) => {
    try {
        const id = req.params.id
        const pokémon = await Pokémon.findOne({ Encyclopedia_Number: id})
        return pokémon
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getPokémonByName = async(req, reply) => {
    try {
        const name = req.params.name
        const searchArg = {Name: name}
        const pokémon = await Pokémon.findOne({ Name: name})
        return pokémon
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new pokémon
exports.addPokémon = async(req, reply) => {
    try {
        const pokémon = new Pokémon(req.body)
        return pokémon.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing pokémon
exports.updatePokémon = async(req, reply) => {
    try {
        const id = req.params.id
        const pokémon = req.body
        const {...updateData} = pokémon
        const update = await Pokémon.findByIdAndUpdate(id, updateData, { nrew: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a pokémon
exports.deletePokémon = async(req, reply) => {
    try {
        const id = req.params.id
        const pokémon = await Pokémon.findByIdAndRemove(id)
        return pokémon
    } catch (err) {
        throw boom.boomify(err)
    }
}