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
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateRoles = async(req,res) => {
    await checkTable();
    pool.query(`Update roles set name = ? where id=?`,[req.name,req.roles_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteRoles = async(req,res) => {
    await checkTable();
    pool.query(`Delete from roles where id = ?`,[req.roles_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewRoles = async(req,res) => {
    await checkTable();
    pool.query(`Select * from roles where id=?`,[req.roles_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
  createRoles,
  updateRoles,
  reviewRoles,
  deleteRoles
}