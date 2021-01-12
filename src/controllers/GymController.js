const boom = require('boom')
const Gym = require('../models/Gym')

const Gymn = require('../models/Gym')

// Get all gyms
exports.getGyms = async(req, reply) => {
    try {
        const gyms = await Gym.find()
        return gyms
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get a single gym by ID
exports.getsingleGym = async(req, reply) => {
    try {
        const id = req.params.id
        const gym = await Gym.findById(id)
        return gym
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getGymByName = async(req, reply) => {
    try {
        const name = req.params.name
        const searchArg = {Name: name}
        const gym = await Gym.findOne({ Name: name})
        return gym
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new gym
exports.addGym = async(req, reply) => {
    try {
        const gym = new Gym(req.body)
        return gym.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing gym
exports.updateGym = async(req, reply) => {
    try {
        const id = req.params.id
        const gym = req.body
        const {...updateData} = gym
        const update = await Gym.findByIdAndUpdate(id, updateData, { nrew: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a gym
exports.deleteGym = async(req, reply) => {
    try {
        const id = req.params.id
        const gym = await Gym.findByIdAndRemove(id)
        return gym
    } catch (err) {
        throw boom.boomify(err)
    }
}