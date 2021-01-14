exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify Pokémon  API example',
            description: 'REST API to MongoDB through Fastify',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Swagger detailed information'
        },
        host: 'localhost:3000',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'Guild', description: 'Guild related endpoints'},
            { name: 'Gym', description: 'Gym related endpoints'},
            { name: 'Pokémon', description: 'Pokémon related endpoints'},
            { name: 'Relationship', description: 'Relationship in the object model'},
        ],
        definitions: {

        }
    }
}