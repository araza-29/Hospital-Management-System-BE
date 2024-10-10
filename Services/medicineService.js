const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists medicine(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50) not null,
        price INT not null,
        dose FLOAT not null);`);
}
const createMedicine = async(req,res) => {
    await checkTable();
    pool.query(`Insert into medicine(name,price,dose) values(?,?,?)`,[req.medicine_name, req.medicine_price, req.medicine_dose],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateMedicine = (req,res) => {
    pool.query(`Update medicine set name = ?, price = ?, dose = ? where id=?`,[req.medicine_name, req.medicine_price, req.medicine_dose, req.medicine_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteMedicine = (req,res) => {
    checkTable();
    pool.query(`Delete from medicine where id = ?`,[req.medicine_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewMedicine = (req,res) => {
    checkTable();
    pool.query(`Select * from medicine where name=? and dose =?`,[req.medicine_name,req.medicine_dose],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createMedicine,
    updateMedicine,
    reviewMedicine,
    deleteMedicine
}