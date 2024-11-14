const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists AmbulanceBooking(
        id int AUTO_INCREMENT primary key,
        ambulance_id varchar(20) not null,
        name varchar(30) not null,
        phone_no varchar(30) not null,
        emergency_type varchar(100) not null,
        hospital varchar(100) not null,
        location varchar(100) not null,
        foreign key (ambulance_id) refrences ambulance(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createAmbulanceBooking = async(req,res) => {
    await checkTable();
    pool.query(`Insert into AmbulanceBooking(ambulance_id,name,phone_no,location,emergency_type,hospital) values(?,?,?,?,?)`,[req.ambulance_id,req.user_name,req.phone_no,req.location,req.emergency_type,req.hospital],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateAmbulanceBooking = (req,res) => {
    checkTable();
    pool.query(`Update AmbulanceBooking set ambulance_id = ?,name = ?, phone_no = ?, location = ? hospital = ? emergency_type = ? where id=?`,[req.ambulance_id,req.user_name,req.phone_no,req.location,req.emergency_type,req.hospital, req.AmbulanceBooking_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteAmbulanceBooking = (req,res) => {
    checkTable();
    pool.query(`Delete from AmbulanceBooking where id = ?`,[req.AmbulanceBooking_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewAmbulanceBooking = (req,res) => {
    checkTable();
    pool.query(`Select from AmbulanceBooking where id=?`,[req.AmbulanceBooking_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

const reviewAmbulanceBookingByPhoneNo = (req,res) => {
    checkTable();
    pool.query(`Select * from AmbulanceBooking where phone_no = ?`,[req.phone_no],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
  createAmbulanceBooking,
  updateAmbulanceBooking,
  reviewAmbulanceBooking,
  deleteAmbulanceBooking,
  reviewAmbulanceBookingByPhoneNo
}