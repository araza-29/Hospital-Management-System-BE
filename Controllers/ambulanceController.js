const service = require("../Services/ambulanceService")
const createAmbulance = (req,res) => {
    const AmbulanceInfo = {
        driver_id: req.body.driver_id,
        location: req.body.location
    }
    service.createAmbulance(AmbulanceInfo,res)
}
const updateAmbulance = (req,res) => {
    const AmbulanceInfo = {
        driver_id: req.body.driver_id,
        location: req.body.location
    }
    service.updateAmbulance(AmbulanceInfo,res)
}
const deleteAmbulance = (req,res) => {
    const AmbulanceInfo = {
        ambulance_id: req.body.Ambulance_id
    }
    service.deleteAmbulance(AmbulanceInfo,res)
}
const reviewAmbulance = (req,res) => {
    const AmbulanceInfo = {
        ambulance_id: req.body.Ambulance_id
    }
    service.reviewAmbulance(AmbulanceInfo,res)
}

module.exports = {
    createAmbulance,
    updateAmbulance,
    deleteAmbulance,
    reviewAmbulance
}