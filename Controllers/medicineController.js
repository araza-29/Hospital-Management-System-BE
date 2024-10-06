    const service = require("../Services/medicineService")
    const createMedicine = (req,res) => {
        const MedicineInfo = {
            medicine_name: req.medicine_id,
            medicine_price: req.medicine_price, 
            medicine_dose: req.medicine_dose
        }
        service.createMedicine(MedicineInfo,res)
    }
    const updateMedicine = (req,res) => {
        const MedicineInfo = {
            medicine_name: req.medicine_id,
            medicine_price: req.medicine_price, 
            medicine_dose: req.medicine_dose,
            medicine_id: req.medicine_id
        }
        service.updateMedicine(MedicineInfo,res)
    }
    const deleteMedicine = (req,res) => {
        const MedicineInfo = {
            medicine_id: req.body.medicine_id
        }
        service.deleteMedicine(MedicineInfo,res)
    }
    const reviewMedicine = (req,res) => {
        const MedicineInfo = {
            user_id: req.body.medicine_id
        }
        service.reviewMedicine(MedicineInfo,res)
    }
    
module.exports = {
    createMedicine,
    reviewMedicine,
    updateMedicine,
    deleteMedicine
}