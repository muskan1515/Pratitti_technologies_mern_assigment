const mongoose = require('mongoose')
const envVarConfig = require('./envConfig')

const connectToDB = async () => {
    try {
        await mongoose.connect(envVarConfig['MONGODB']['URI'])
    }
    catch (err) {
        console.log("Got error while connecting to MongoDB", err)
        process.exit(1)
    }
}

module.exports = { connectToDB }