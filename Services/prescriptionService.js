const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists prescription(
        id INT AUTO_INCREMENT primary key,
        appointment_id INT not null,
        foreign key appointment_id refrences appointment(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createPrescription = async(req,res) => {
    await checkTable();
    pool.query(`Insert into Prescription(appointment_id) values(?)`,[req.doctor_id, req.user_id, req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updatePrescription = async(req,res) => {
    await checkTable();
    pool.query(`Update prescription set appointment_id where id=?`,[req.appointment_id, req.Prescription_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deletePrescription = async(req,res) => {
    await checkTable();
    pool.query(`Delete from prescription where id = ?`,[req.Prescription_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewPrescriptionByUserID = async(req,res) => {
    await checkTable();
    pool.query(`Select * from prescription p join appointment a on p.appointment_id = a.id where a.user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewPrescriptionByDoctorID = async(req,res) => {
    await checkTable();
    pool.query(`Select * from prescription p join appointment a on p.appointment_id = a.id where a.doctor_id = ?`,[req.doctor_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createPrescription,
    updatePrescription,
    reviewPrescriptionByUserID,
    reviewPrescriptionByDoctorID,
    deletePrescription
}