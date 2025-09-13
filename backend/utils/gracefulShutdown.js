const { default: mongoose } = require("mongoose");

let server;

const setServer = (srv) => {
    server = srv
}

const gracefulShutdown = async (signal) => {
    try {
        if (server) {
            await server.on('close', () => {
                console.log("Successfully closed the Server")
            })
        }

        await mongoose.disconnect(() => {
            console.log("Successfully closed the MONGODB")
        })
        process.exit(0)
    }
    catch (err) {
        console.log("Got error while gracefully shutting down the server", err)
        process.exit(1)
    }
}

const processHandler = () => {
    //when manually closed the server
    process.on('SIGINT', () => gracefulShutdown('SIGINT'))

    //when due to external dependecies led to server crashing
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))

    process.on('uncaughtException', () => gracefulShutdown('uncaughtException'))

    process.on('unhandledRejection', () => gracefulShutdown('unhandledRejection'))
}

module.exports = { setServer, processHandler }