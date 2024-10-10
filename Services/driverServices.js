const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists driver(
        user_id int primary key,
        experince int not null,
        foreign key (user_id) refrences user(id));`);
}
const createDriver = async(req,res) => {
    await checkTable();
    pool.query(`Insert into driver(user_id,experince) values(?,?)`,[req.user_id,req.experince],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateDriver = (req,res) => {
    pool.query(`Update driver set experince = ? where user_id=?`,[req.experince, req.user_id,],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteDriver = (req,res) => {
    checkTable();
    pool.query(`Delete from driver where user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewDriver = (req,res) => {
    checkTable();
    pool.query(`Select * from driver where user_id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
  createDriver,
  updateDriver,
  reviewDriver,
  deleteDriver
}