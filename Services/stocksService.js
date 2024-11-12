const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists stocks(
        id INT AUTO_INCREMENT primary key,
        inventory_id Int not null,
        medicine_id Int not null
        stock Int not null,
        foreign key (inventory_id) refrences inventory(id),
        foreign key (medicine_id) refrences medicine(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createStock = async(req,res) => {
    await checkTable();
    pool.query(`Insert into stocks(inventory_id,medicine_id,stock) values(?,?,?)`,[req.inventory_id, req.medicine_id, req.medicine_stock],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updateStock = (req,res) => {
    pool.query(`Update stock set inventory_id = ?, medicine_id = ?, stock = ? where id=?`,[req.inventory_id, req.medicine_id, req.stock,req.stock_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deleteStock = (req,res) => {
    checkTable();
    pool.query(`Delete from stock where id = ?`,[req.stock_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewStock = (req,res) => {
    checkTable();
    pool.query(`Select m.name, m.dose from stock s join medicine m on s.medicine_id = m.id where stock = 0`,
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createStock,
    updateStock,
    reviewStock,
    deleteStock
}