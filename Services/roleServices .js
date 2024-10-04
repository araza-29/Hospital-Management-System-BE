const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists roles(
        id int AUTO_INCREMENT primary key,
        role varchar(50) not null`);
}
const createRoles = async(req,res) => {
    await checkTable();
    pool.query(`Insert into roles(role) values(?)`,[req.role],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateRoles = (req,res) => {
    pool.query(`Update roles set role = ? where id=?`,[req.role,req.roles_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteRoles = (req,res) => {
    checkTable();
    pool.query(`Delete from roles where id = ?`,[req.roles_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewRoles = (req,res) => {
    checkTable();
    pool.query(`Select from roles where id=?`,[req.roles_id],
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