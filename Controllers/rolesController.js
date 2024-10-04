const service = require("../Services/roleServices ")
const createRoles = (req,res) => {
    const roleInfo = {
        role: req.body.role
    }
    service.createRoles(SpecialtyInfo,res)
}
const updateRoles = (req,res) => {
    const SpecialtyInfo = {
        role: req.body.role
    }
    service.updateRoles(SpecialtyInfo,res)
}
const deleteRoles = (req,res) => {
    const SpecialtyInfo = {
        role: req.body.role
    }
    service.deleteRoles(SpecialtyInfo,res)
}
const reviewRoles = (req,res) => {
    const SpecialtyInfo = {
        role: req.body.role
    }
    service.reviewRoles(SpecialtyInfo,res)
}

module.exports = {
    createRoles,
    updateRoles,
    deleteRoles,
    reviewRoles
}