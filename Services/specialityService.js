const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists Speciality(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createSpeciality = async(req,res) => {
    await checkTable();
    pool.query(`Insert into Speciality(name) values(?)`,[req.Speciality_name],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateSpeciality = async(req,res) => {
    await checkTable();
    pool.query(`Update Speciality set name = ? where id=?`,[req.Speciality_name,req.Speciality_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteSpeciality = async(req,res) => {
    await checkTable();
    pool.query(`Delete from Speciality where id = ?`,[req.Speciality_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewSpeciality = async(req,res) => {
    await checkTable();
    pool.query(`Select * from Speciality`,[],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createSpeciality,
    updateSpeciality,
    reviewSpeciality,
    deleteSpeciality
}