// Require Sequelize Library
const Sequelize = require('sequelize')

// setup dotenv for environment variables
require('dotenv').config()

// create connection to my database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})