const gymController = require('../controllers/GymController')

const routes = [
    {
        method: 'GET',
        url: '/api/gyms',
        schema: {
            response: {
                200: {
                    type: 'array',
                    properties: {
                        _id: { type: 'string'},
                        Name: { type: 'string' },
                        Encyclopedia_Number: { type: 'string' },
                        Suffix: { type: 'string' },
                        Category: { type: 'string' },
                        Coordinate: { type: 'string' }                       
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
            querystring: {
                id: { type: 'string'}
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string'},
                        Name: { type: 'string' },
                        Encyclopedia_Number: { type: 'string' },
                        Suffix: { type: 'string' },
                        Category: { type: 'string' },
                        Coordinate: { type: 'string' }                       
                    }
                }
            }
        },
        handler: gymController.getsingleGym
    },
    {
        method: 'GET',
        url: '/api/gymByName/:name',
        schema: {
            querystring: {
                name: { type: 'string' }
            }
        },
        handler: gymController.getGymByName
    }
]

module.exports = routes