const service = require("../Services/labAttendantService")
const createlabAttendant = (req,res) => {
    const labAttendantInfo = {
        user_id: req.body.user_id,
        experince: req.body.experince
    }
    service.createlabAttendant(labAttendantInfo,res)
}
const updatelabAttendant = (req,res) => {
    const labAttendantInfo = {
        user_id: req.body.user_id,
        experince: req.body.experince
    }
    service.updatelabAttendant(labAttendantInfo,res)
}
const deletelabAttendant = (req,res) => {
    const labAttendantInfo = {
        user_id: req.body.user_id
    }
    service.deletelabAttendant(driverInfo,res)
}
const reviewlabAttendant = (req,res) => {
    const driverInfo = {
        user_id: req.body.user_id
    }
    service.reviewlabAttendant(driverInfo,res)
}

module.exports = {
    createlabAttendant,
    updatelabAttendant,
    deletelabAttendant,
    reviewlabAttendant
}