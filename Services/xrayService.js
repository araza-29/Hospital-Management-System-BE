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
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updateXRay = async(req,res) => {
    await checkTable();
    pool.query(`Update x_ray set name = ?, price = ? where id=?`,[req.name,req.price],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteXRay = async(req,res) => {
    await checkTable();
    pool.query(`Delete from x_ray where id = ?`,[req.test_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewXRay = async(req,res) => {
    await checkTable();
    pool.query(`Select * from x_ray where id=?`,[req.test_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createXRay,
    updateXRay,
    reviewXRay,
    deleteXRay
}