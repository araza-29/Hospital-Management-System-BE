    const service = require("../Services/prescriptionService")
    const createPrescription = (req,res) => {
        const PrescriptionInfo = {
            doctor_id: req.body.doctor_id, 
            user_id: req.body.user_id
        }
        service.createPrescription(PrescriptionInfo,res)
    }
    const updatePrescription = (req,res) => {
        const PrescriptionInfo = {
            doctor_id: req.body.doctor_id,
            user_id: req.body.user_id,
            Prescription_id: req.body.Prescription_id
        }
        service.updatePrescription(PrescriptionInfo,res)
    }
    const deletePrescription = (req,res) => {
        const PrescriptionInfo = {
            Prescription_id: req.body.Prescription_id
        }
        service.deletePrescription(PrescriptionInfo,res)
    }
    const reviewPrescriptionByDoctorID = (req,res) => {
        const PrescriptionInfo = {
            doctor_id: req.body.doctor_id
        }
        service.reviewPrescriptionByDoctorID(PrescriptionInfo,res)
    }
    const reviewPrescriptionByUserID = (req,res) => {
        const PrescriptionInfo = {
            user_id: req.body.user_id
        }
        service.reviewPrescriptionByUserID(PrescriptionInfo,res)
    }
    
module.exports = {
    createPrescription,
    reviewPrescriptionByDoctorID,
    reviewPrescriptionByUserID,
    updatePrescription,
    deletePrescription
}