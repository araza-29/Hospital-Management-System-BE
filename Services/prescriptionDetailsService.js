const pool = require("../Config/dbconfig")
const connect = require("../Config/dbconfig")
const checkTable = async () => {
    await connect.query(`Create Table if not exists prescriptionDetail(
        id INT AUTO_INCREMENT primary key,
        prescription_id INT not null,
        medicine_id INT,
        test_id INT,
        foreign key prescription_id refrences prescription(id),
        foreign key medicine_id refrences medicine(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);`);
}
const createPrescriptionDetail = async(req,res) => {
    await checkTable();
    pool.query(`Insert into prescriptionDetail(prescription_id,medicine_id) values(?,?)`,[req.prescription_id, req.medicine_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const updatePrescriptionDetail = (req,res) => {
    pool.query(`Update prescriptionDetail set prsecription_id = ?, medicine_id = ? where id=?`,[req.prescription_id, req.medicine_id, req.prescriptionDetail_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const deletePrescriptionDetail = (req,res) => {
    checkTable();
    pool.query(`Delete from prescriptionDetail where id = ?`,[req.prescriptionDetail_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}
const reviewPrescriptionDetailByAppointmentID = (req,res) => {
    checkTable();
    pool.query(`Select * from prescriptionDetail d join prescription p on d.prescription_id = p.id join appointment a on p.appointment_id = ?`,[req.appointment_id],
    (error,results)=> {
        if(error){
            res.status(500).send(error)
        }
        return res.status(200).send(results)
    })
}

module.exports = {
    createPrescriptionDetail,
    updatePrescriptionDetail,
    reviewPrescriptionDetailByAppointmentID,
    deletePrescriptionDetail
}