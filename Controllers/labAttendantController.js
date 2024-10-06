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
    service.deletelabAttendant(labAttendantInfo,res)
}
const reviewlabAttendant = (req,res) => {
    const labAttendantInfo = {
        user_id: req.body.user_id
    }
    service.reviewlabAttendant(labAttendantInfo,res)
}

module.exports = {
    createlabAttendant,
    updatelabAttendant,
    deletelabAttendant,
    reviewlabAttendant
}