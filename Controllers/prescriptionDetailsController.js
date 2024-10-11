    const service = require("../Services/prescriptionDetailsService")
    const createprescriptionDetail = (req,res) => {
        const prescriptionDetailInfo = {
            prescription_id: req.body.prescription_id, 
            medicine_id: req.body.medicine_id,
            test_id: req.body.test_id
        }
        service.createPrescriptionDetail(prescriptionDetailInfo,res)
    }
    const updateprescriptionDetail = (req,res) => {
        const prescriptionDetailInfo = {
            prescription_id: req.body.prescription_id,
            medicine_id: req.body.medicine_id,
            test_id: req.body.test_id,
            prescriptionDetail_id: req.body.prescriptionDetail_id
        }
        service.updatePrescriptionDetail(prescriptionDetailInfo,res)
    }
    const deleteprescriptionDetail = (req,res) => {
        const prescriptionDetailInfo = {
            prescriptionDetail_id: req.body.prescriptionDetail_id
        }
        service.deletePrescriptionDetail(prescriptionDetailInfo,res)
    }
    const reviewPrescriptionDetailByAppointmentID = (req,res) => {
        const prescriptionDetailInfo = {
            prescription_id: req.body.prescription_id
        }
        service.reviewPrescriptionDetailByAppointmentID(prescriptionDetailInfo,res)
    }
    
module.exports = {
    createprescriptionDetail,
    reviewPrescriptionDetailByAppointmentID,
    updateprescriptionDetail,
    deleteprescriptionDetail
}