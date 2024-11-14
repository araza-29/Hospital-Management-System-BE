const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists doctor(
        user_id int primary key,
        qualification varchar(20) not null,
        experince int not null,
        foreign key (user_id) references user(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createDoctor = async(req,res) => {
    await checkTable();
    pool.query(`Insert into doctor(user_id,qualification,experince) values(?,?,?)`,[req.user_id,req.qualification,req.experince],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateDoctor = (req,res) => {
    pool.query(`Update user set qualification = ?, experince = ? where user_id=?`,[req.qualification,req.experince,req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteDoctor = (req,res) => {
    checkTable();
    pool.query(`Delete from doctor where user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewDoctor = (req,res) => {
    checkTable();
    pool.query(`Select * from doctor where user_id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
/*const reviewDoctorBySpecialty = (req,res) => {
    checkTable();
    pool.query(`Select * from doctor d join specialty s on d.specialty_id=s.id where s.name = ?`,[req.specialty_name],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}*/

module.exports = {
  createDoctor,
  updateDoctor,
  reviewDoctor,
  deleteDoctor
}