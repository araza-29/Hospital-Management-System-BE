const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    Create Table if not exists create table user(
        id int AUTO_INCREMENT primary key,
        first_name varchar(20) not null,
        last_name varchar(20) not null,
        age int not null constraint check_age check(age>=0),
        email varchar(30),
        gender char(1) not null constraint check_gender check (gender in ('M','F')),
        address varchar(50),
        phone varchar(20) not null,
        role_id int not null),
        foreign key (role_id) refrences roles(id);`);
}
const createUser = async(req,res) => {
    await checkTable();
    pool.query(`Insert into user(first_name,last_name,age,email,gender,address,phone,role_id) values(?,?,?,?,?,?,?)`,[req.first_name,req.last_name,req.age,req.email,req.gender,req.address,req.phone,req.role_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateUser = (req,res) => {
    pool.query(`Update user set first_name = ?, last_name = ?, age = ?, email= ? , gender = ?, address = ?, phone = ?, role_id = ? where id=?`,[req.first_name,req.last_name,req.age,req.email,req.gender,req.address,req.phone,req.role_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteUser = (req,res) => {
    checkTable();
    pool.query(`Delete from user where id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewUser = (req,res) => {
    checkTable();
    pool.query(`Select from user where id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
  createUser,
  updateUser,
  reviewUser,
  deleteUser
}