const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists lab_attendant(
        user_id INT primary key,
        experince Varchar(30),
        foriegn key (user_id) refrences user(id));`);
}
const createlabAttendant = async(req,res) => {
    await checkTable();
    pool.query(`Insert into lab_attendant(user_id,experince) values(?,?)`,[req.user_id, req.experince],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updatelabAttendant = (req,res) => {
    pool.query(`Update lab_attendant set exerpince = ? where id=?`,[req.experince,req.Specialty_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deletelabAttendant = (req,res) => {
    checkTable();
    pool.query(`Delete from lab_attendant where id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewlabAttendant = (req,res) => {
    checkTable();
    pool.query(`Select from lab_attendant where id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createlabAttendant,
    updatelabAttendant,
    reviewlabAttendant,
    deletelabAttendant
}