const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists doctor(
        user_id int primary key,
        qualification varchar(20) not null,
        experince int not null,
        specialty_id int not null,
        foriegn key (specialty_id) refrences user(id),
        foreign key (user_id) refrences user(id));`);
}
const createDoctor = async(req,res) => {
    await checkTable();
    pool.query(`Insert into doctor(user_id,qualification,experince,specialty_id) values(?,?,?,?)`,[req.user_id,req.qualification,req.experince,req.specialty_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateDoctor = (req,res) => {
    pool.query(`Update user set qualification = ?, experince = ?, specialty_id = ? where user_id=?`,[req.qualification,req.experince,req.specialty_id,req.user_id],
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
    pool.query(`Select from doctor where user_id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
  createDoctor,
  updateDoctor,
  reviewDoctor,
  deleteDoctor
}