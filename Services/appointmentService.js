const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    CREATE TABLE IF NOT EXISTS appointment(
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        doctor_id INT NOT NULL,
        startTime TIME NOT NULL,
        endTime TIME NOT NULL,
        aDate DATE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES USER(id),
        FOREIGN KEY (doctor_id) REFERENCES doctor(user_id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Insert into appointment(user_id,doctor_id,startTime,endTime,aDate) values(?,?,?,?,?)`,[req.user_id,req.doctor_id,req.startTime,req.endTime,req.date],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Update appointment set user_id = ?, doctor_id = ?, startTime = ?, endTime = ?, aDate = ? where id=?`,[req.user_id,req.doctor_id,req.startTime,req.endTime,req.date,req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Delete from appointment where id = ?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewAppointment = async(req,res) => {
    await checkTable();
    pool.query(`Select * from appointment where id=?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewAppointmentByUserID = async(req,res) => {
    await checkTable();
    console.log(req.user_id);
    pool.query(`SELECT a.*, CONCAT(u.first_name, ' ', u.last_name) AS doctor_name FROM appointment a JOIN doctor d ON a.doctor_id = d.user_id JOIN USER u ON d.user_id = u.id WHERE a.user_id = ?;`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        console.log(results);
        return res.json({code: 200, data:results})
    })
}

const reviewAppointmentByDoctorID = async(req,res) => {
    await checkTable();
    pool.query(`SELECT a.*, CONCAT(u.first_name, ' ', u.last_name) AS user_name FROM appointment a JOIN user u ON a.user_id = u.id WHERE a.doctor_id = ?;`,[req.doctor_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
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