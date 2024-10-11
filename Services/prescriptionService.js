const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists prescription(
        id INT AUTO_INCREMENT primary key,
        appointment_id INT not null,
        foreign key appointment_id refrences appointment(id));`);
}
const createPrescription = async(req,res) => {
    await checkTable();
    pool.query(`Insert into Prescription(appointment_id) values(?)`,[req.doctor_id, req.user_id, req.appointment_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updatePrescription = (req,res) => {
    pool.query(`Update prescription set appointment_id where id=?`,[req.appointment_id, req.Prescription_id],
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
    pool.query(`Select * from prescription p join appointment a on p.appointment_id = a.id where a.user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewPrescriptionByDoctorID = (req,res) => {
    checkTable();
    pool.query(`Select * from prescription p join appointment a on p.appointment_id = a.id where a.doctor_id = ?`,[req.doctor_id],
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