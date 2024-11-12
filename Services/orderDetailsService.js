const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists orderDetail(
        id INT AUTO_INCREMENT primary key,
        order_id INT not null,
        medicine_id INT,
        test_id INT,
        foreign key order_id refrences order(id),
        foreign key medicine_id refrences medicine(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createOrderDetail = async(req,res) => {
    await checkTable();
    pool.query(`Insert into orderDetail(order_id,medicine_id,test_id) values(?,?,?)`,[req.order_id, req.medicine_id,req.test_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateOrderDetail = (req,res) => {
    pool.query(`Update orderDetail set prsecription_id = ?, medicine_id = ?, test_id = ? where id=?`,[req.order_id, req.medicine_id, req.test_id, req.orderDetail_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteOrderDetail = (req,res) => {
    checkTable();
    pool.query(`Delete from orderDetail where id = ?`,[req.orderDetail_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewOrderDetailByAppointmentID = (req,res) => {
    checkTable();
    pool.query(`Select * from orderDetail d join order o on d.order_id = o.id join prescription p on o.precription_id = p.id join appointment a on p.appointment_id = ?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createOrderDetail,
    updateOrderDetail,
    reviewOrderDetailByAppointmentID,
    deleteOrderDetail
}