const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists prescription(
        id INT AUTO_INCREMENT primary key,
        doctor_id INT not null,
        user_id INT not null,
        foreign key doctor_id refrences doctor(id),
        foreign key user_id refrences user(id));`);
}
const createPrescription = async(req,res) => {
    await checkTable();
    pool.query(`Insert into Prescription(doctor_id,user_id) values(?,?)`,[req.doctor_id, req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updatePrescription = (req,res) => {
    pool.query(`Update prescription set doctor_id = ?, user_id = ? where id=?`,[req.doctor_id, req.user_id, req.Prescription_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deletePrescription = (req,res) => {
    checkTable();
    pool.query(`Delete from prescription where id = ?`,[req.Prescription_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewPrescriptionByUserID = (req,res) => {
    checkTable();
    pool.query(`Select * from prescription where user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewPrescriptionByDoctorID = (req,res) => {
    checkTable();
    pool.query(`Select * from prescription where doctor_id = ?`,[req.doctor_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createPrescription,
    updatePrescription,
    reviewPrescriptionByUserID,
    reviewPrescriptionByDoctorID,
    deletePrescription
}