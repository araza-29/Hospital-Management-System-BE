const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists roles(
        id int AUTO_INCREMENT primary key,
        name varchar(50) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createRoles = async(req,res) => {
    await checkTable();
    pool.query(`Insert into roles(name) values(?)`,[req.name],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateRoles = async(req,res) => {
    await checkTable();
    pool.query(`Update roles set name = ? where id=?`,[req.name,req.roles_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteRoles = async(req,res) => {
    await checkTable();
    pool.query(`Delete from roles where id = ?`,[req.roles_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewRoles = async(req,res) => {
    await checkTable();
    pool.query(`Select * from roles where id=?`,[req.roles_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
  createRoles,
  updateRoles,
  reviewRoles,
  deleteRoles
}