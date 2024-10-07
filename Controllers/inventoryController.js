    const service = require("../Services/inventoryService")
    const createInventory = (req,res) => {
        const InventoryInfo = {
            inventory_name: req.body.inventory_name,
            inventory_location: req.body.inventory_location, 
        }
        service.createInventory(InventoryInfo,res)
    }
    const updateInventory = (req,res) => {
        const InventoryInfo = {
            inventory_name: req.body.inventory_name,
            inventory_location: req.body.inventory_location,
            inventory_id: req.body.inventory_id
        }
        service.updateInventory(InventoryInfo,res)
    }
    const deleteInventory = (req,res) => {
        const InventoryInfo = {
            medicine_id: req.body.medicine_id
        }
        service.deleteInventory(InventoryInfo,res)
    }
    const reviewInventory = (req,res) => {
        const InventoryInfo = {
            inventory_id: req.body.inventory_id
        }
        service.reviewInventory(InventoryInfo,res)
    }
    
module.exports = {
    createInventory,
    reviewInventory,
    updateInventory,
    deleteInventory
}