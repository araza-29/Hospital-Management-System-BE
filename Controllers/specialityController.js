    const service = require("../Services/specialityService")
    const createSpeciality = (req,res) => {
        const SpecialityInfo = {
            Speciality_name: req.body.speciality_name
        }
        service.createSpeciality(SpecialityInfo,res)
    }
    const updateSpeciality = (req,res) => {
        const SpecialityInfo = {
            Speciality_id: req.body.speciality_id,
            Speciality_name: req.body.speciality_name
        }
        service.updateSpeciality(SpecialityInfo,res)
    }
    const deleteSpeciality = (req,res) => {
        const SpecialityInfo = {
            Speciality_id: req.body.speciality_id
        }
        service.deleteSpeciality(SpecialityInfo,res)
    }
    const reviewSpeciality = (req,res) => {
        service.reviewSpeciality(req,res)
    }
    
module.exports = {
    createSpeciality,
    updateSpeciality,
    deleteSpeciality,
    reviewSpeciality
}