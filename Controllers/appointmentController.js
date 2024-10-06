    const service = require("../Services/appointmentService")
    const createAppointment = (req,res) => {
        const AppointmentInfo = {
            first_name: req.body.user_fname,
            last_name: req.body.user_lname,
            age: req.body.user_age,
            email: req.body.user_email,
            phone: req.body.user_phone,
            address: req.body.user_address,
            gender: req.body.user_gender,
            role_id: req.body.user_role_id,
        }
        service.createAppointment(AppointmentInfo,res)
    }
    const updateAppointment = (req,res) => {
        const AppointmentInfo = {
            first_name: req.body.user_fname,
            last_name: req.body.user_lname,
            age: req.body.user_age,
            email: req.body.user_email,
            phone: req.body.user_phone,
            address: req.body.user_address,
            gender: req.body.user_gender,
            role_id: req.body.user_role_id,
        }
        service.updateAppointment(AppointmentInfo,res)
    }
    const deleteAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id
        }
        service.deleteAppointment(AppointmentInfo,res)
    }
    const reviewAppointment = (req,res) => {
        const AppointmentInfo = {
            user_id: req.body.user_id
        }
        service.reviewAppointment(AppointmentInfo,res)
    }
    
module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    reviewAppointment
}