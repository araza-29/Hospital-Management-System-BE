const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    connect.query(`
    Create Table if not exists driver(
        user_id int primary key,
        experince int not null,
        foreign key (user_id) references user(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createDriver = async(req,res) => {
    await checkTable();
    pool.query(`Insert into driver(user_id,experince) values(?,?)`,[req.user_id,req.experince],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateDriver = async(req,res) => {
    await checkTable();
    pool.query(`Update driver set experince = ? where user_id=?`,[req.experince, req.user_id,],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteDriver = async(req,res) => {
    await checkTable();
    pool.query(`Delete from driver where user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewDriver = async(req,res) => {
    await checkTable();
    pool.query(`Select * from driver where user_id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
  createDriver,
  updateDriver,
  reviewDriver,
  deleteDriver
}