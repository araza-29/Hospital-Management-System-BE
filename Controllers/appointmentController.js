    const service = require("../Services/appointmentService")
    const createAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id,
            doctor_id: req.body.doctor_id,
            time: req.body.time
        }
        service.createAppointment(AppointmentInfo,res)
    }
    const updateAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id,
            doctor_id: req.body.doctor_id,
            time: req.body.time
        }
        service.updateAppointment(AppointmentInfo,res)
    }
    const deleteAppointment = (req,res) => {
        const AppointmentInfo = {
            appointment_id: req.body.appointment_id
        }
        service.deleteAppointment(AppointmentInfo,res)
    }
    const reviewAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id
        }
        service.reviewAppointment(AppointmentInfo,res)
    }
    const reviewAppointmentByUserID = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id
        }
        service.reviewAppointment(AppointmentInfo,res)
    }
    const reviewAppointmentByDoctorID = (req,res) => {
        const AppointmentInfo = {
            doctor_id: req.body.doctor_id
        }
        service.reviewAppointment(AppointmentInfo,res)
    }
    
module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    reviewAppointment,
    reviewAppointmentByDoctorID,
    reviewAppointmentByUserID
}