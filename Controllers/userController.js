    const service = require("../Services/userServices")
    const createUser = (req,res) => {
        const userInfo = {
            first_name: req.body.user_fname,
            last_name: req.body.user_lname,
            age: req.body.user_age,
            email: req.body.user_email,
            phone: req.body.user_phone,
            address: req.body.user_address,
            gender: req.body.user_gender,
            role_id: req.body.user_role_id,
        }
        service.createUser(SpecialtyInfo,res)
    }
    const updateUser = (req,res) => {
        const userInfo = {
            first_name: req.body.user_fname,
            last_name: req.body.user_lname,
            age: req.body.user_age,
            email: req.body.user_email,
            phone: req.body.user_phone,
            address: req.body.user_address,
            gender: req.body.user_gender,
            role_id: req.body.user_role_id,
        }
        service.updateUser(SpecialtyInfo,res)
    }
    const deleteUser = (req,res) => {
        const userInfo = {
            user_id: req.body.user_id
        }
        service.deleteUser(SpecialtyInfo,res)
    }
    const reviewUser = (req,res) => {
        const SpecialtyInfo = {
            user_id: req.body.user_id
        }
        service.reviewUser(SpecialtyInfo,res)
    }
    
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    reviewUser
}