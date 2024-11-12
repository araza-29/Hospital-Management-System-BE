const service = require("../Services/roleServices ")
const createRoles = (req,res) => {
    const roleInfo = {
        name: req.body.name
    }
    service.createRoles(roleInfo,res)
}
const updateRoles = (req,res) => {
    const roleInfo = {
        name: req.body.name,
        roles_id: req.body.roles_id
    }
    service.updateRoles(roleInfo,res)
}
const deleteRoles = (req,res) => {
    const roleInfo = {
        roles_id: req.body.roles_id
    }
    service.deleteRoles(roleInfo,res)
}
const reviewRoles = (req,res) => {
    const roleInfo = {
        roles_id: req.body.roles_id
    }
    service.reviewRoles(roleInfo,res)
}

module.exports = {
    createRoles,
    updateRoles,
    deleteRoles,
    reviewRoles
}