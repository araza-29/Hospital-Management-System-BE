const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists order(
        id INT AUTO_INCREMENT primary key,
        prescription_id INT not null,
        delivery_time DateTime not null,
        price INT not null,
        foreign key prescription_id refrences prescription(id));`);
}
const createOrder = async(req,res) => {
    await checkTable();
    pool.query(`Insert into order(prescription_id,delivery_time,price) values(?,?,?)`,[req.prescription_id,req.delivery_time,req.price],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateOrder = (req,res) => {
    pool.query(`Update order set prescription_id = ?, delivery_time = ?, price = ? where id=?`,[req.prescription_id, req.delivery_time, req.time, req.order_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteOrder = (req,res) => {
    checkTable();
    pool.query(`Delete from order where id = ?`,[req.order_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewOrderByUserID = (req,res) => {
    checkTable();
    pool.query(`Select * from order o join prescription p on o.prescription_id = p.id join where p.user_id = ?`,[req.user_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createOrder,
    updateOrder,
    reviewOrderByUserID,
    deleteOrder
}