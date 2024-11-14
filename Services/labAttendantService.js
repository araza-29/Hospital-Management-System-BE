const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists lab_attendant(
        user_id INT primary key,
        experince Varchar(30),
        foriegn key (user_id) refrences user(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createlabAttendant = async(req,res) => {
    await checkTable();
    pool.query(`Insert into lab_attendant(user_id,experince) values(?,?)`,[req.user_id, req.experince],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updatelabAttendant = async(req,res) => {
    await checkTable();
    pool.query(`Update lab_attendant set exerpince = ? where id=?`,[req.experince,req.Specialty_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deletelabAttendant = async(req,res) => {
    await checkTable();
    pool.query(`Delete from lab_attendant where id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabAttendant = async(req,res) => {
    await checkTable();
    pool.query(`Select * from lab_attendant where id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createlabAttendant,
    updatelabAttendant,
    reviewlabAttendant,
    deletelabAttendant
}