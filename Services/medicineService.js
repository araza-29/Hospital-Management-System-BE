const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists medicine(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50) not null,
        price INT not null,
        dose FLOAT not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createMedicine = async(req,res) => {
    await checkTable();
    pool.query(`Insert into medicine(name,price,dose) values(?,?,?)`,[req.medicine_name, req.medicine_price, req.medicine_dose],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updateMedicine = async(req,res) => {
    await checkTable();
    pool.query(`Update medicine set name = ?, price = ?, dose = ? where id=?`,[req.medicine_name, req.medicine_price, req.medicine_dose, req.medicine_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteMedicine = async(req,res) => {
    await checkTable();
    pool.query(`Delete from medicine where id = ?`,[req.medicine_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewMedicine = async(req,res) => {
    await checkTable();
    pool.query(`Select * from medicine where name=? and dose =?`,[req.medicine_name,req.medicine_dose],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createMedicine,
    updateMedicine,
    reviewMedicine,
    deleteMedicine
}