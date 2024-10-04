    const service = require("../Services/specialtyService")
    const createSpecialty = (req,res) => {
        const SpecialtyInfo = {
            Specialty_id: req.body.Specialty_id,
            Specialty_name: req.body.Specialty_name
        }
        service.createSpecialty(SpecialtyInfo,res)
    }
    const updateSpecialty = (req,res) => {
        const SpecialtyInfo = {
            Specialty_id: req.body.Specialty_id,
            Specialty_name: req.body.Specialty_name
        }
        service.updateSpecialty(SpecialtyInfo,res)
    }
    const deleteSpecialty = (req,res) => {
        const SpecialtyInfo = {
            Specialty_id: req.body.Specialty_id
        }
        service.deleteSpecialty(SpecialtyInfo,res)
    }
    const reviewSpecialty = (req,res) => {
        const SpecialtyInfo = {
            Specialty_id: req.body.Specialty_id
        }
        service.reviewSpecialty(SpecialtyInfo,res)
    }
    
module.exports = {
    createSpecialty,
    updateSpecialty,
    deleteSpecialty,
    reviewSpecialty
}