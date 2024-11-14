const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists ambulance(
        id int AUTO_INCREMENT primary key,
        driver_id varchar(20) not null,
        location varchar(50) not null,
        foreign key (driver_id) refrences driver(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createAmbulance = async(req,res) => {
    await checkTable();
    pool.query(`Insert into ambulance(driver_id,location) values(?,?,)`,[req.driver_id,req.location,],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updateAmbulance = async(req,res) => {
    await checkTable();
    pool.query(`Update ambulance set driver_id = ?, location = ? where id=?`,[req.driver_id,req.location,req.ambulance_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteAmbulance = async(req,res) => {
    await checkTable();
    pool.query(`Delete from ambulance where id = ?`,[req.ambulance_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewAmbulance = async(req,res) => {
    await checkTable();
    pool.query(`Select * from ambulance where id=?`,[req.ambulance_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
  createAmbulance,
  updateAmbulance,
  reviewAmbulance,
  deleteAmbulance
}