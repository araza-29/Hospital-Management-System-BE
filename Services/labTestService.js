const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists labTest(
        id INT AUTO_INCREMENT primary key,
        name Varchar(50),
        price int not null,
        Sample Varchar(50),
        userId int not null,
        attendantId int not null,
        testDate date not null,
        testTime Time,
        status int,
        foreign key (userId) references user(id),
        foreign key (attendantId) references user(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createlabTest = async(req,res) => {
    await checkTable();
    pool.query(`Insert into labTest(name,price,Sample,userId,attendantId,testDate,testTime,status) values(?,?,?,?,?,?,?,?)`,[req.name, req.price, req.sample,req.userId,req.attendantId,req.date,req.time,req.status],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updatelabTest = async(req,res) => {
    await checkTable();
    pool.query(`Update labTest set name = ?, price = ? sample = ? userId = ? attendantId = ?, testDate = ?, testTime = ?, status = ? where id=?`,[req.name, req.price, req.sample,req.userId,req.attendantId,req.date,req.time, req.status, req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deletelabTest = async(req,res) => {
    await checkTable();
    pool.query(`Delete from labTest where id = ?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabTest = async(req,res) => {
    await checkTable();
    pool.query(`Select * from labTest where testDate>sysdate()`,[],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabTestByUserId = async(req,res) => {
    await checkTable();
    pool.query(`Select l.*,concat(u.first_name,' ',u.last_name) from labTest l join user u on l.attendantId = u.id where l.userId=?`,[req.userId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabTestByAttendantId = async(req,res) => {
    await checkTable();
    pool.query(`Select l.*,concat(u.first_name,' ',u.last_name) AS patientName from labTest l join user u on l.userId = u.id where l.attendantId=?`,[req.attendantId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewFreeAttendant = async(req,res) => {
    await checkTable();
    pool.query(`SELECT u.id FROM user u WHERE u.role_id = 3 AND NOT EXISTS (SELECT 1 FROM labTest l WHERE l.attendantId = u.id AND l.testDate = ? AND l.testTime = ?);`,[req.date, req.time],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewlabTestsUniquely = async(req,res) => {
    await checkTable();
    pool.query(`Select unique name from labTest`,[],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
module.exports = {
    createlabTest,
    updatelabTest,
    reviewlabTest,
    deletelabTest,
    reviewlabTestByUserId,
    reviewlabTestByAttendantId,
    reviewlabTestsUniquely,
    reviewFreeAttendant
}