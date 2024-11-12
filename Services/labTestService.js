const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists lab_test(
        id INT primary key,
        name Varchar(50),
        price int not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createlabTest = async(req,res) => {
    await checkTable();
    pool.query(`Insert into lab_test(name,price) values(?,?)`,[req.name, req.price],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updatelabTest = (req,res) => {
    pool.query(`Update lab_test set name = ?, price = ? where id=?`,[req.name,req.price],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deletelabTest = (req,res) => {
    checkTable();
    pool.query(`Delete from lab_test where id = ?`,[req.test_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewlabTest = (req,res) => {
    checkTable();
    pool.query(`Select * from lab_test where id=?`,[req.test_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createlabTest,
    updatelabTest,
    reviewlabTest,
    deletelabTest
}