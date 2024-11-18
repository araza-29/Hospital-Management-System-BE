const service = require("../Services/ambulanceService")
const createAmbulance = (req,res) => {
    const AmbulanceInfo = {
        driver_id: req.body.driver_id,
        city: req.body.city,
        area: req.body.area
    }
    service.createAmbulance(AmbulanceInfo,res)
}
const updateAmbulance = (req,res) => {
    const AmbulanceInfo = {
        ambulance_id: req.body.ambulance_id,
        booked: req.body.booked
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