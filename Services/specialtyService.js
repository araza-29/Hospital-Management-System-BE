const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists Specialty(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50) not null);`);
}
const createSpecialty = async(req,res) => {
    await checkTable();
    pool.query(`Insert into Specialty(name) values(?)`,[req.Specialty_name],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateSpecialty = (req,res) => {
    pool.query(`Update Specialty set name = ? where id=?`,[req.Specialty_name,req.Specialty_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteSpecialty = (req,res) => {
    checkTable();
    pool.query(`Delete from Specialty where id = ?`,[req.Specialty_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewSpecialty = (req,res) => {
    checkTable();
    pool.query(`Select * from Specialty where id=?`,[req.Specialty_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createSpecialty,
    updateSpecialty,
    reviewSpecialty,
    deleteSpecialty
}