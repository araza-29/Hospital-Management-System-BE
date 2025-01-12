const service = require("../Services/ambulanceBookingService")
const createAmbulanceBooking = (req,res) => {
    const AmbulanceBookingInfo = {
        ambulance_id: req.body.ambulance_id,
        name: req.body.name,
        phone_no: req.body.phone_no,
        city: req.body.city,
        area: req.body.area,
        address: req.body.Address,
        condition: req.body.condition,
        hospital: req.body.hospital,
    }
    service.createAmbulanceBooking(AmbulanceBookingInfo,res)
}
const updateAmbulanceBooking = (req,res) => {
    const AmbulanceBookingInfo = {
        status: req.body.status,
        ambulanceBooking_id: req.body.ambulanceBooking_id,
    }
    service.updateAmbulanceBooking(AmbulanceBookingInfo,res)
}
const deleteAmbulanceBooking = (req,res) => {
    const AmbulanceBookingInfo = {
        AmbulanceBooking_id: req.body.AmbulanceBooking_id
    }
    service.deleteAmbulanceBooking(AmbulanceBookingInfo,res)
}
const reviewAmbulanceBooking = (req,res) => {
    const AmbulanceBookingInfo = {
        driverId: req.body.driverId
    }
    service.reviewAmbulanceBooking(AmbulanceBookingInfo,res)
}
const reviewAmbulanceBookingByPhoneNo = (req,res) => {
    const AmbulanceBookingInfo = {
        phone_no: req.body.phone_no
    }
    service.reviewAmbulanceBookingByPhoneNo(AmbulanceBookingInfo,res)
}

module.exports = {
    createAmbulanceBooking,
    updateAmbulanceBooking,
    deleteAmbulanceBooking,
    reviewAmbulanceBooking,
    reviewAmbulanceBookingByPhoneNo
}