const oracledb = require('express');
const config = require('../Config/dbconfig')
const db = {}
db.user = require()

const connection = await oracledb.getConnection({
    user: config.USER,
    password: config.PASSWORD,
    connectString: 'localhost/xe'
});

const user = require('./userController')(connection);
const doctor = require('./doctorController')(connection);
const appointments = require('./appointmentsController')(connection);
const category = require('./categoryController')(connection);
const inventory = require('./inventoryController')(connection);
const medicines = require('./medicinesController')(connection);
const orders = require('./ordersController')(connection);