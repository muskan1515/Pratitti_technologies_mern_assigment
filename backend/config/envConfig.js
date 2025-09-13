const envVarConfig = {
    "PORT": process.env.PORT || 8000,
    "NODE_ENV": process.env.NODE_ENV || 'development',
    "MONGODB": {
        "URI": process.env.MONGO_DB_URI || ''
    },
    "CORS": {
        "ORIGINS": ['http://localhost:3000'],
    }
}

module.exports = envVarConfig