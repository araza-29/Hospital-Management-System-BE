const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists ambulance(
        id int AUTO_INCREMENT primary key,
        driver_id int not null,
        city varchar(50) not null,
        area varchar(50) not null,
        address varchar(50) not null,
        booked bool default false,
        foreign key (driver_id) references user(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createAmbulance = async(req,res) => {
    await checkTable();
    pool.query(`Insert into ambulance(driver_id,city,area,address) values(?,?,?,?)`,[req.driver_id,req.city,req.area,req.address],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data: error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateAmbulance = async(req,res) => {
    await checkTable();
    pool.query(`Update ambulance set booked = ? where id=?`,[req.booked, req.ambulance_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        else {
        return res.json({code: 200, data:"Ambulanced booking updated"})
        }
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
    pool.query(`Select * from ambulance where booked = false`,[],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewAmbulanceInArea = async(req,res) => {
    await checkTable();
    pool.query(`SELECT * FROM ambulance WHERE city = ? and booked = false ORDER BY (area = ?) DESC LIMIT 1`,[req.city,req.area],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
module.exports = {
  createAmbulance,
  updateAmbulance,
  reviewAmbulance,
  deleteAmbulance,
  reviewAmbulanceInArea
}