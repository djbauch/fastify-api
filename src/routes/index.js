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
                        Category: { type: 'integer' },
                        Coordinate: { type: 'string' }
                    },
                    example: [
                       { _id: ''},
                    ]
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
                    description: 'Encyclopedia_Number for the gym of interest'
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
                        Category: { type: 'integer' },
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
    },
    {
        method: 'GET',
        url: '/api/guilds/:identifier',
        schema: {
            tags: ['Guild'],
            params: {
                identifier: {
                    type: 'string',
                    description: 'Identifier for the guild of interest'
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        Name: { type: 'string' },
                        Identifier: { type: 'string' },
                        Operational_Status: { type: 'string' },
                        Condition: { type: 'string' },
                        Location_Reason: { type: 'string' },
                        Location_Name: { type: 'string'},
                        Latitude: {type: 'number'},
                        Longitude: {type: 'number'}
                    },
                    example: {
                        _id: '5ffcb82307ef4e45f29b9ae4',
                        'Name': 'AMBER BATTALION',
                        'Identifier': '4X45P040X0',
                        'Operational_Status': 'ACT',
                        'Condition': 'X',
                        'Location_Reason': 'GR',
                        'Location_Name': 'LACKLAND NORTH',
                        'Latitude': 29.3934607360084,
                        'Longitude': -98.6311983994515
                    }
                }
            }
        },
        handler: guildController.getSingleGuild
    },
    {
        method: 'GET',
        url: '/api/guildByName/:name',
        schema: {
            tags: ['Guild'],
            params: {
                name: {
                    type: 'string',
                    description: 'Name of the guild record to return'
                }
            }
        },
        handler: guildController.getGuildByName
    },
    // Pokémon-related routes
]

module.exports = routes