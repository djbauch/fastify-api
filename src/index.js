// Require external modules
require ('dotenv').config()

const fastify = require('fastify')({
    ignoreTrailingSlash: true,
    logger: true
})
fastify.log.logLevel = 'debug'

const swagger = require('./config/swagger')
fastify.register(require('fastify-swagger'), swagger.options)

const mongoose = require('mongoose')

const routes = require('./routes')

routes.forEach((route, index) => {
    fastify.route(route)
})

//const dbUri = 'mongodb+srv://pokemon:<PW>@jemsiafdevcluster.us6p3.mongodb.net/Pokemon?retryWrites=true&w=majority';
const environment = process.env;
//console.log(environment)

const dbUri = process.env.MONGODB_URI;

// Connect to database
mongoose.connect(dbUri, {useNewUrlParser : true,  useUnifiedTopology : true })
const db = mongoose.connection
db.useNewUrlParser = true
 
db.then(() => console.group('MongoDB connected!'))
db.catch(err => console.log(err))

// Declare a route
fastify.get('/', async(request, reply) => {
    return {hello: 'world'}
})

// Run the server
const start = async() => {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info('server listening on $fastify.server.address().port}')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()