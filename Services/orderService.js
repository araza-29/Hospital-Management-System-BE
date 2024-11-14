const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists order(
        id INT AUTO_INCREMENT primary key,
        prescription_id INT not null,
        delivery_time DateTime not null,
        price INT not null,
        foreign key prescription_id refrences prescription(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createOrder = async(req,res) => {
    await checkTable();
    pool.query(`Insert into order(prescription_id,delivery_time,price) values(?,?,?)`,[req.prescription_id,req.delivery_time,req.price],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const updateOrder = async(req,res) => {
    await checkTable();
    pool.query(`Update order set prescription_id = ?, delivery_time = ?, price = ? where id=?`,[req.prescription_id, req.delivery_time, req.time, req.order_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const deleteOrder = async(req,res) => {
    await checkTable();
    pool.query(`Delete from order where id = ?`,[req.order_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}
const reviewOrderByUserID = async(req,res) => {
    await checkTable();
    pool.query(`Select * from order o join prescription p on o.prescription_id = p.id join where p.user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            return res.json({code: 500, data:[]})
        }
        return res.json({code: 200, data:results})
    })
}

module.exports = {
    createOrder,
    updateOrder,
    reviewOrderByUserID,
    deleteOrder
}