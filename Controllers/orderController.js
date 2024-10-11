    const service = require("../Services/orderService")
    const createOrder = (req,res) => {
        const orderInfo = {
            prescription_id: req.body.prescription_id, 
            delivery_time: req.body.delivery_time,
            price: req.body.price
        }
        service.createOrder(orderInfo,res)
    }
    const updateOrder = (req,res) => {
        const orderInfo = {
            doctor_id: req.body.doctor_id,
            user_id: req.body.user_id,
            order_id: req.body.order_id
        }
        service.updateOrder(orderInfo,res)
    }
    const deleteOrder = (req,res) => {
        const orderInfo = {
            prescription_id: req.body.prescription_id, 
            delivery_time: req.body.delivery_time,
            price: req.body.price,
            order_id: req.body.order_id
        }
        service.deleteOrder(orderInfo,res)
    }
    const reviewOrderByUserID = (req,res) => {
        const orderInfo = {
            user_id: req.body.user_id
        }
        service.reviewOrderByUserID(orderInfo,res)
    }
    
module.exports = {
    createOrder,
    reviewOrderByUserID,
    updateOrder,
    deleteOrder
}