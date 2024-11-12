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
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateInventory = (req,res) => {
    pool.query(`Update inventory set name = ?, location = ? where id=?`,[req.inventory_name, req.inventory_location, req.inventory_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteInventory = (req,res) => {
    checkTable();
    pool.query(`Delete from inventory where id = ?`,[req.inventory_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewInventory = (req,res) => {
    checkTable();
    pool.query(`Select * from inventory where id=?`,[req.inventory_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createInventory,
    updateInventory,
    reviewInventory,
    deleteInventory
}