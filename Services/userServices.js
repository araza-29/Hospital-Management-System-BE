const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`
    CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT NOT NULL CHECK (age >= 0),
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    gender CHAR(1) NOT NULL CHECK (gender IN ('M', 'F')),
    address VARCHAR(50),
    phone VARCHAR(20) NOT NULL,
    role_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id)
    );`);
}
const createUser = async(req,res) => {
    await checkTable();
    pool.query(`Insert into user(first_name,last_name,age,email,password,gender,address,phone,role_id) values(?,?,?,?,?,?,?,?,?)`,[req.first_name,req.last_name,req.age,req.email,req.password,req.gender,req.address,req.phone,req.role_id],
    (error,results)=> {
        if(error){
            res.json({code: 500, data:error})
        }
        else if (req.role_id === 2) {
            // Fetch the last inserted ID
            pool.query(`SELECT id from user where email = ? and role_id = ?`,[req.email,req.role_id], (error, result) => {
                if (error) {
                    return res.json({ code: 500, data: error });
                }
                // Return the user_id in the response
                return res.json({ code: 200, data: result });
            });
        }
        else {
            return res.json({code: 200, data: []})
        }
})
}
const updateUser = async(req,res) => {
    await checkTable();
    pool.query(`Update user set first_name = ?, last_name = ?, age = ?, email= ? , password = ?, gender = ?, address = ?, phone = ?, role_id = ? where id=?`,[req.first_name,req.last_name,req.age,req.email,req.gender,req.address,req.phone,req.role_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteUser = async(req,res) => {
    await checkTable();
    pool.query(`Delete from user where id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewUser = async(req,res) => {
    await checkTable();
    pool.query(`Select * from user where id=?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.json({code:200, data:results})
    })
}
const Login = async(req,res) => {
    await checkTable();
    pool.query(`Select id from user where email = ? and password = ? and role_id = ?`,[req.email, req.password,req.role_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.json({code: 200, data: results})
    })
}

module.exports = {
  createUser,
  updateUser,
  reviewUser,
  deleteUser,
  Login
}