    const service = require("../Services/stocksService")
    const createStock = (req,res) => {
        const StockInfo = {
            inventory_id: req.body.inventory_id,
            medicine_id: req.body.medicine_id, 
        }
        service.createInventory(StockInfo,res)
    }
    const updateStock = (req,res) => {
        const StockInfo = {
            inventory_id: req.body.inventory_id,
            medicine_id: req.body.medicine_id,
            stock: req.body.stock,
            stock_id: req.body.stock_id
        }
        service.updateStock(StockInfo,res)
    }
    const deleteStock = (req,res) => {
        const StockInfo = {
            stock_id: req.body.stock_id
        }
        service.Stock(StockInfo,res)
    }
    const reviewStock = (req,res) => {
        const StockInfo = {
            stock_id: req.body.stock_id
        }
        service.reviewStock(StockInfo,res)
    }
    
module.exports = {
    createStock,
    reviewStock,
    updateStock,
    deleteStock
}