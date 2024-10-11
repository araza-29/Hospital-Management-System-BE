    const service = require("../Services/orderDetailsService")
    const createOrderDetail = (req,res) => {
        const orderDetailInfo = {
            order_id: req.body.order_id, 
            medicine_id: req.body.medicine_id,
            test_id: req.body.test_id
        }
        service.createOrderDetail(orderDetailInfo,res)
    }
    const updateOrderDetail = (req,res) => {
        const orderDetailInfo = {
            order_id: req.body.order_id,
            medicine_id: req.body.medicine_id,
            test_id: req.body.test_id,
            orderDetail_id: req.body.orderDetail_id
        }
        service.updateOrderDetail(orderDetailInfo,res)
    }
    const deleteOrderDetail = (req,res) => {
        const orderDetailInfo = {
            orderDetail_id: req.body.orderDetail_id
        }
        service.deleteOrderDetail(orderDetailInfo,res)
    }
    const reviewOrderDetailByorderID = (req,res) => {
        const orderDetailInfo = {
            order_id: req.body.order_id
        }
        service.reviewOrderDetailByUserID(orderDetailInfo,res)
    }
    
module.exports = {
    createOrderDetail,
    reviewOrderDetailByorderID,
    updateOrderDetail,
    deleteOrderDetail
}