const {createPool} = require("mysql")
require('dotenv').config();
const pool = createPool({
    host: process.env.HOST,
    password: process.env.PASSWORD,
    user: process.env.USER,
    port: process.env.PORT,
    database: process.env.DATABASE
})

module.exports = pool