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
        foreign key (doctor_id) refrences doctor(id));`);
}
const createAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Insert into appointment(user_id,doctor_id,time) values(?,?,?)`,[req.user_id,req.doctor_id,req.time],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateAppointment = (req,res) => {
    checkTable();
    pool.query(`Update appointment set user_id = ?, doctor_id = ?, time = ? where id=?`,[req.user_id,req.doctor_id,req.time,req.appointment_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteAppointment = (req,res) => {
    checkTable();
    pool.query(`Delete from appointment where id = ?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewAppointment = (req,res) => {
    checkTable();
    pool.query(`Select * from appointment where id=?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

const reviewAppointmentByUserID = (req,res) => {
    checkTable();
    pool.query(`Select * from appointment where user_id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

const reviewAppointmentByDoctorID = (req,res) => {
    checkTable();
    pool.query(`Select * from appointment where doctor_id=?`,[req.doctor_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
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