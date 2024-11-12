const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists x_ray(
        id INT primary key,
        name Varchar(50),
        price int not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createXRay = async(req,res) => {
    await checkTable();
    pool.query(`Insert into x_ray(name,price) values(?,?)`,[req.name, req.price],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateXRay = (req,res) => {
    pool.query(`Update x_ray set name = ?, price = ? where id=?`,[req.name,req.price],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteXRay = (req,res) => {
    checkTable();
    pool.query(`Delete from x_ray where id = ?`,[req.test_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewXRay = (req,res) => {
    checkTable();
    pool.query(`Select * from x_ray where id=?`,[req.test_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createXRay,
    updateXRay,
    reviewXRay,
    deleteXRay
}