const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists urinalysis(
        testId int not null primary key,
        colour varchar(50) not null,
        clearity varchar(50) not null,
        PH_value varchar(50) not null,
        foreign key (testId) references labTest(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createUrinalysis = async(req,res) => {
    await checkTable();
    pool.query(`Insert into urinalysis(colour,clearity,PH_value) values(?,?,?,?)`,[req.colour,req.clearity,req.PH_value],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updateUrinalysis = async(req,res) => {
    await checkTable();
    pool.query(`Update urinalysis set colour = ?, clearity = ?, PH_value = ? where testId=?`,[req.colour,req.clearity,req.PH_value,req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteUrinalysis = async(req,res) => {
    await checkTable();
    pool.query(`Delete from urinalysis where testId = ?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewUrinalysis = async(req,res) => {
    await checkTable();
    pool.query(`Select * from urinalysis where testId=?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createUrinalysis,
    updateUrinalysis,
    reviewUrinalysis,
    deleteUrinalysis
}