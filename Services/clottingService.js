const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists Clotting(
        testId int not null primary key,
        bleedingTime varchar(50) not null,
        clottingTime varchar(50) not null,
        prothrombin varchar(50) not null,
        foreign key (testId) references labTest(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createClotting = async(req,res) => {
    await checkTable();
    pool.query(`Insert into Clotting(bleedingTime,clottingTime,prothrombin) values(?,?,?,?)`,[req.bleedingTime,req.clottingTime,req.Prothrombin],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateClotting = async(req,res) => {
    await checkTable();
    pool.query(`Update Clotting set bleedingTime = ?, clottingTime = ?, prothrombin = ? where testId=?`,[req.bleedingTime,req.clottingTime,req.Prothrombin,req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteClotting = async(req,res) => {
    await checkTable();
    pool.query(`Delete from Clotting where testId = ?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewClotting = async(req,res) => {
    await checkTable();
    pool.query(`Select * from Clotting where testId=?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createClotting,
    updateClotting,
    reviewClotting,
    deleteClotting
}