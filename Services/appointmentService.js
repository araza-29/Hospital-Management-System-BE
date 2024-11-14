const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists appointment(
        id int AUTO_INCREMENT primary key,
        user_id varchar(20) not null,
        doctor_id varchar(20) not null,
        time int not null constraint check_age check(age>=0),
        foreign key (user_id) refrences user(id),
        foreign key (doctor_id) refrences doctor(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Insert into appointment(user_id,doctor_id,time) values(?,?,?)`,[req.user_id,req.doctor_id,req.time],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updateAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Update appointment set user_id = ?, doctor_id = ?, time = ? where id=?`,[req.user_id,req.doctor_id,req.time,req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Delete from appointment where id = ?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Select * from appointment where id=?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewAppointmentByUserID = (req,res) => {
    checkTable();
    pool.query(`Select * from appointment where user_id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewAppointmentByDoctorID = (req,res) => {
    checkTable();
    pool.query(`Select * from appointment where doctor_id=?`,[req.doctor_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}


module.exports = {
  createAppointment,
  updateAppointment,
  reviewAppointment,
  deleteAppointment,
  reviewAppointmentByUserID,
  reviewAppointmentByDoctorID
}