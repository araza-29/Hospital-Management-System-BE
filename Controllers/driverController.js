const service = require("../Services/driverServices")
const createDriver = (req,res) => {
    const driverInfo = {
        user_id: req.body.user_id,
        experince: req.body.experince
    }
    service.createDriver(driverInfo,res)
}
const updateDriver = (req,res) => {
    const driverInfo = {
        user_id: req.body.user_id,
        experince: req.body.experince
    }
    service.updateDriver(driverInfo,res)
}
const deleteDriver = (req,res) => {
    const driverInfo = {
        user_id: req.body.user_id
    }
    service.deleteDriver(driverInfo,res)
}
const reviewDriver = (req,res) => {
    const SpecialtyInfo = {
        user_id: req.body.user_id
    }
    service.reviewDriver(driverInfo,res)
}

module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    reviewDoctor
}