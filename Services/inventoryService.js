const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists inventory(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50) not null,
        location INT not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createInventory = async(req,res) => {
    await checkTable();
    pool.query(`Insert into inventory(name,location) values(?,?)`,[req.inventory_name, req.inventory_location],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updateInventory = async(req,res) => {
    await checkTable();
    pool.query(`Update inventory set name = ?, location = ? where id=?`,[req.inventory_name, req.inventory_location, req.inventory_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteInventory = async(req,res) => {
    await checkTable();
    pool.query(`Delete from inventory where id = ?`,[req.inventory_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewInventory = async(req,res) => {
    await checkTable();
    pool.query(`Select * from inventory where id=?`,[req.inventory_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createInventory,
    updateInventory,
    reviewInventory,
    deleteInventory
}