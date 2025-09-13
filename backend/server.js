const app = require('./app')
const envVarConfig = require('./config/envConfig')
const { setServer, processHandler } = require('./utils/gracefulShutdown')

let server = app.listen(envVarConfig['PORT'], () => {
    console.log("Server is up and running over the port:", envVarConfig['PORT'])
})

setServer(server)

processHandler;

