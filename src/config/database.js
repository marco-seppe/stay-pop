require('dotenv').config({path:__dirname+'/../../.env'})

const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'stay_pop',
        host: 'localhost',
        dialect: 'mysql'
    }
} 

module.exports = config

