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
        service.createCategory(categoryInfo,res)
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
        service.updateCategory(categoryInfo,res)
    }
    const deleteUser = (req,res) => {
        const userInfo = {
            user_id: req.body.user_id
        }
        service.deleteCategory(categoryInfo,res)
    }
    const reviewUser = (req,res) => {
        const categoryInfo = {
            user_id: req.body.user_id
        }
        service.reviewCategory(categoryInfo,res)
    }
    
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    reviewUser
}