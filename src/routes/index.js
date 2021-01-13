const gymController = require('../controllers/GymController')
const guildController = require('../controllers/GuildController')

const routes = [
    {
        // Gym-related routes
        method: 'GET',
        url: '/api/gyms',
        schema: {
            description: 'List all gyms',
            tags: ['Gym'],
            response: {
                200: {
                    description: 'Successful response',
                    type: 'array',
                    properties: {
                        _id: { type: 'string' },
                        Name: { type: 'string' },
                        Encyclopedia_Number: { type: 'string' },
                        Suffix: { type: 'string' },
                        Category: { type: 'string' },
                        Coordinate: { type: 'string' }
                    },
                    example: {
                        _id: '',
                    }
                }
            }
        },
        handler: gymController.getGyms
    },
    {

        method: 'GET',
        url: '/api/gyms/:id',
        schema: {
            tags: ['Gym'],
            params: {
                id: {
                    type: 'string',
                    description: 'MongoDB UUID for the gym of interest'
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        Name: { type: 'string' },
                        Encyclopedia_Number: { type: 'string' },
                        Suffix: { type: 'string' },
                        Category: { type: 'string' },
                        Coordinate: { type: 'string' }
                    },
                    example: {
                        _id: '5ffcb82307ef4e45f29b9ae4',
                        'Name': 'CAMP BULLIS THEATER',
                        'Encyclopedia_Number': '0065-0001',
                        'Suffix': 'DD001',
                        'Category': 88291,
                        'Coordinate': '14RNT4087278459'
                    }
                }
            }
        },
        handler: gymController.getSingleGym
    },
    {
        method: 'GET',
        url: '/api/gymByName/:name',
        schema: {
            tags: ['Gym'],
            params: {
                name: {
                    type: 'string',
                    description: 'Name of the gym record to return'
                }
            }
        },
        handler: gymController.getGymByName
    },
    // Guild-related routes
    {
        method: 'GET',
        url: '/api/guilds',
        schema: {
            tags: ['Guild'],
        },
        handler: guildController.getGuilds
    }
    // Pokémon-related routes
]

module.exports = routes