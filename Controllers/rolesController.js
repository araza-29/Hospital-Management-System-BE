const service = require("../Services/roleServices ")
const createRoles = (req,res) => {
    const roleInfo = {
        role: req.body.role
    }
    service.createCategory(categoryInfo,res)
}
const updateRoles = (req,res) => {
    const categoryInfo = {
        role: req.body.role
    }
    service.updateCategory(categoryInfo,res)
}
const deleteRoles = (req,res) => {
    const categoryInfo = {
        role: req.body.role
    }
    service.deleteCategory(categoryInfo,res)
}
const reviewRoles = (req,res) => {
    const categoryInfo = {
        role: req.body.role
    }
    service.reviewCategory(categoryInfo,res)
}

module.exports = {
    createRoles,
    updateRoles,
    deleteRoles,
    reviewRoles
}