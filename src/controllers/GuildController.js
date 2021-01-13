const boom = require('boom')
const Gym = require('../models/Guild')

// Get all guilds
exports.getGuilds = async(req, reply) => {
    try {
        const guilds = await Guild.find()
        return gyms
    } catch (err) {
        throw boom.boomify(err)
    }
}