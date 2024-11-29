const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists doctor(
        user_id int primary key,
        qualification varchar(20) not null,
        experince int not null,
        start_time time not null,
        end_time time not null,
        speciality_id int not null,
        foreign key(speciality_id) references speciality(id), 
        foreign key (user_id) references user(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createDoctor = async(req,res) => {
    await checkTable();
    console.log(req);
    pool.query(`Insert into doctor(user_id,qualification,experince,speciality_id,start_time,end_time) values(?,?,?,?,?,?)`,[req.user_id,req.qualification,req.experince,req.speciality_id,req.start_time,req.end_time],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateDoctor = async(req,res) => {
    await checkTable();
    pool.query(`Update user set qualification = ?, experince = ?, start_time = ?, end_time = ?, speciality_id = ? where user_id=?`,[req.qualification,req.experince,req.start_time, req.end_time, req.speciality,req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteDoctor = async(req,res) => {
    await checkTable();
    pool.query(`Delete from doctor where user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewDoctor = async(req,res) => {
    await checkTable();
    pool.query(`Select * from doctor d join user u on d.user_id = u.id where u.role_id = 1`,[],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewDoctorBySpecialty = async(req,res) => {
    await checkTable();
    pool.query(`SELECT d.*, s.name AS "speciality_name", CONCAT(u.first_name, ' ', u.last_name) AS "user_name" FROM doctor d JOIN speciality s ON d.speciality_id = s.id JOIN user u ON d.user_id = u.id WHERE s.name = ?;`,[req.speciality_name],
    (error,results)=> {
        if(error){
            return res.json({code:500, data:error})
        }
        return res.json({code:200, data:results})
    })
}

module.exports = {
  createDoctor,
  updateDoctor,
  reviewDoctor,
  deleteDoctor,
  reviewDoctorBySpecialty
}