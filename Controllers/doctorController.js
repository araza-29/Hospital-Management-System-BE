const service = require("../Services/doctorServices")
const createDoctor = (req,res) => {
    const DoctorInfo = {
        user_id: req.body.user_id,
        qualification: req.body.qualification,
        experince: req.body.experince
    }
    service.createDoctor(DoctorInfo,res)
}
const updateDoctor = (req,res) => {
    const DoctorInfo = {
        user_id: req.body.user_id,
        qualification: req.body.qualification,
        experince: req.body.experince
    }
    service.updateDoctor(DoctorInfo,res)
}
const deleteDoctor = (req,res) => {
    const DoctorInfo = {
        user_id: req.body.user_id
    }
    service.deleteDoctor(DoctorInfo,res)
}
const reviewDoctor = (req,res) => {
    const DoctorInfo = {
        user_id: req.body.user_id
    }
    service.reviewDoctor(DoctorInfo,res)
}

const reviewDoctorByDoctorName = (req,res) => {
    const DoctorInfo = {
        Doctor_name: req.body.Doctor_name
    }
    service.reviewDoctorByDoctor(DoctorInfo,res)
}

module.exports = {
    createDoctor,
    updateDoctor,
    deleteDoctor,
    reviewDoctor,
    reviewDoctorByDoctorName
}