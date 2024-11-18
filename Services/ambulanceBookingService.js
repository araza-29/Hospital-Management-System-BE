const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists AmbulanceBooking(
        id int AUTO_INCREMENT primary key,
        ambulance_id int not null,
        name varchar(30) not null,
        phone_no varchar(30) not null,
        patient_condition varchar(100) not null,
        hospital varchar(100) not null,
        city varchar(50) not null,
        area varchar(50) not null,
        address varchar(50) not null,
        foreign key (ambulance_id) references ambulance(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createAmbulanceBooking = async(req,res) => {
    await checkTable();
    pool.query(`Insert into AmbulanceBooking(ambulance_id,name,phone_no,city,area,address,patient_condition,hospital) values(?,?,?,?,?,?,?,?)`,[req.ambulance_id,req.name,req.phone_no,req.city,req.area,req.address,req.condition,req.hospital],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateAmbulanceBooking = async(req,res) => {
    await checkTable();
    pool.query(`Update AmbulanceBooking set ambulance_id = ?,name = ?, phone_no = ?, city = ? area = ? adress = ? hospital = ? condition = ? where id=?`,[req.ambulance_id,req.user_name,req.phone_no,req.city, req.area, req.address,req.condition,req.hospital, req.AmbulanceBooking_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteAmbulanceBooking = async(req,res) => {
    await checkTable();
    pool.query(`Delete from AmbulanceBooking where id = ?`,[req.AmbulanceBooking_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewAmbulanceBooking = async(req,res) => {
    await checkTable();
    pool.query(`Select from AmbulanceBooking where id=?`,[req.AmbulanceBooking_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewAmbulanceBookingByPhoneNo = async(req,res) => {
    await checkTable();
    pool.query(`Select * from AmbulanceBooking where phone_no = ?`,[req.phone_no],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
  createAmbulanceBooking,
  updateAmbulanceBooking,
  reviewAmbulanceBooking,
  deleteAmbulanceBooking,
  reviewAmbulanceBookingByPhoneNo
}