    const service = require("../Services/appointmentService")
    const createAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id,
            doctor_id: req.body.doctor_id,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            date: req.body.date
        }
        service.createAppointment(AppointmentInfo,res)
    }
    const updateAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id,
            doctor_id: req.body.doctor_id,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            date: req.body.date,
            appointment_id: req.body.appointment_id
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
        service.reviewAppointmentByUserID(AppointmentInfo,res)
    }
    const reviewAppointmentByDoctorID = (req,res) => {
        const AppointmentInfo = {
            doctor_id: req.body.doctor_id
        }
        service.reviewAppointmentByDoctorID(AppointmentInfo,res)
    }
    
module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    reviewAppointment,
    reviewAppointmentByDoctorID,
    reviewAppointmentByUserID
}