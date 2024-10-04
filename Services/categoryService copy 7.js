const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists category(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50) not null);`);
}
const createCategory = async(req,res) => {
    await checkTable();
    pool.query(`Insert into category(name) values(?)`,[req.category_name],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateCategory = (req,res) => {
    pool.query(`Update category set name = ? where id=?`,[req.category_name,req.category_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteCategory = (req,res) => {
    checkTable();
    pool.query(`Delete from category where id = ?`,[req.category_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewCategory = (req,res) => {
    checkTable();
    pool.query(`Select from category where id=?`,[req.category_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createCategory,
    updateCategory,
    reviewCategory,
    deleteCategory
}