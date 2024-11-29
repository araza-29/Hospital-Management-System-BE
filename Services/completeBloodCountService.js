const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists BloodCount(
        testId int not null primary key,
        whiteCells varchar(50) not null,
        hemoglobin varchar(50) not null,
        redCells varchar(50) not null,
        foreign key (testId) references labTest(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createBloodCount = async(req,res) => {
    await checkTable();
    pool.query(`Insert into BloodCount(whiteCells,hemoglobin,redCells) values(?,?,?,?)`,[req.bleedingTime,req.hemoglobin,req.redCells],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateBloodCount = async(req,res) => {
    await checkTable();
    pool.query(`Update BloodCount set bleedingTime = ?, hemoglobin = ?, redCells = ? where testId=?`,[req.bleedingTime,req.hemoglobin,req.redCells,req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteBloodCount = async(req,res) => {
    await checkTable();
    pool.query(`Delete from BloodCount where testId = ?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewBloodCount = async(req,res) => {
    await checkTable();
    pool.query(`Select * from BloodCount where testId=?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createBloodCount,
    updateBloodCount,
    reviewBloodCount,
    deleteBloodCount
}