const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const envVarConfig = require('./config/envConfig')
const globalErrorHandler = require('./middleware/globalErrorHandler')
const notFound = require('./middleware/notFound')
const blogRouter = require('./routes/blog_route')

const app = express()

app.use(helmet())

app.use(cors({
    origin: envVarConfig.CORS.ORIGINS,
    methods: ["PUT", "POST", "PATCH", "GET", "DELETE"],
    allowedHeaders: ["*"],
}))

if (envVarConfig['NODE_ENV'] == 'development') {
    app.use(morgan('dev'))
}

//global error handling middleware
app.use(globalErrorHandler)

//not found middleware
app.use(notFound)

app.use("/blog", blogRouter)

module.exports = app;