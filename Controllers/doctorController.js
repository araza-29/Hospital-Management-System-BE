const service = require("../Services/doctorServices")
const createDoctor = (req,res) => {
    const SpecialtyInfo = {
        user_id: req.body.user_id,
        qualification: req.body.qualification,
        experince: req.body.experince
    }
    service.createDoctor(SpecialtyInfo,res)
}
const updateDoctor = (req,res) => {
    const SpecialtyInfo = {
        user_id: req.body.user_id,
        qualification: req.body.qualification,
        experince: req.body.experince
    }
    service.updateSpecialty(SpecialtyInfo,res)
}
const deleteDoctor = (req,res) => {
    const SpecialtyInfo = {
        user_id: req.body.user_id
    }
    service.deleteSpecialty(SpecialtyInfo,res)
}
const reviewDoctor = (req,res) => {
    const SpecialtyInfo = {
        user_id: req.body.user_id
    }
    service.reviewSpecialty(SpecialtyInfo,res)
}

module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    reviewDoctor
}