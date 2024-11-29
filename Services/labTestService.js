const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists labTest(
        id INT primary key,
        name Varchar(50),
        price int not null,
        Sample Varchar(50),
        userId int not null,
        attendantId int not null,
        testDate date not null,
        testTime Time not null,
        address varchar(100) not null,
        city varchar(100) not null,
        area varchar(100) not null,
        status int not null,
        foreign key (userId) references user(id),
        foreign key (attendantId) references lab_attendant(user_id)
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createlabTest = async(req,res) => {
    await checkTable();
    pool.query(`Insert into lab_test(name,price,sample,userId,attendantId,testDate,testTime,address,city,area,status) values(?,?,?,?,?,?,?,?,?,?,?)`,[req.name, req.price, req.sample,req.userId,req.attendantId,req.date,req.time,req.address,req.city,req.area,req.status],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const updatelabTest = async(req,res) => {
    pool.query(`Update lab_test set name = ?, price = ? sample = ? userId = ? attendantId = ?, testDate = ?, testTime = ?,address = ?, city = ?, area = ?, status = ? where id=?`,[req.name, req.price, req.sample,req.userId,req.attendantId,req.date,req.time,req.address,req.city, req.area, req.status, req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const deletelabTest = async(req,res) => {
    await checkTable();
    pool.query(`Delete from lab_test where id = ?`,[req.testId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabTest = async(req,res) => {
    await checkTable();
    pool.query(`Select * from lab_test where testDate>sysdate`,[],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabTestByUserId = async(req,res) => {
    await checkTable();
    pool.query(`Select l.*,concat(u.first_name,' ',u.last_name) from lab_test l join user u on l.attendant_id = u.id where l.user_id=?`,[req.userId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewlabTestByAttendantId = async(req,res) => {
    await checkTable();
    pool.query(`Select l.*,concat(u.first_name,' ',u.last_name) from lab_test l join user u on l.user_id = u.id where l.attendant_id=?`,[req.attendantId],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:error})
        }
        return res.json({code: 200, data:results})
    })
}

const reviewlabTestsUniquely = async(req,res) => {
    await checkTable();
    pool.query(`Select unique name from lab_test`,[],
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
    reviewlabTestsUniquely
}