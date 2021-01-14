const boom = require('boom')
const Guild = require('../models/Guild')

// Get all guilds
exports.getGuilds = async(req, reply) => {
    try {
        const guilds = await Guild.find()
        return guilds
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get a single guild by Identifier
exports.getSingleGuild = async(req, reply) => {
    try {
        const id = req.params.id
        const guild = await Guild.findOne({ IDentifier: id})
        return guild
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getGuildByName = async(req, reply) => {
    try {
        const name = req.params.name
        const searchArg = {Name: name}
        const guild = await Guild.findOne({ Name: name})
        return guild
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new guild
exports.addGuild = async(req, reply) => {
    try {
        const guild = new Guild(req.body)
        return guild.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing guild
exports.updateGuild= async(req, reply) => {
    try {
        const id = req.params.id
        const guild = req.body
        const {...updateData} = guild
        const update = await Guild.findByIdAndUpdate(id, updateData, { nrew: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a guild
exports.deleteGuild = async(req, reply) => {
    try {
        const id = req.params.id
        const guild = await Guild.findByIdAndRemove(id)
        return guild
    } catch (err) {
        throw boom.boomify(err)
    }
}