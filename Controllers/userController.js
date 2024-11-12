    const service = require("../Services/userServices")
    const createUser = (req,res) => {
        const userInfo = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            role_id: req.body.role_id
        }
        service.createUser(userInfo,res)
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
            role_id: req.body.user_role_id
        }
        service.updateUser(userInfo,res)
    }
    const deleteUser = (req,res) => {
        const userInfo = {
            user_id: req.body.user_id
        }
        service.deleteUser(userInfo,res)
    }
    const reviewUser = (req,res) => {
        const userInfo = {
            user_id: req.body.user_id
        }
        service.reviewUser(userInfo,res)
    }
    const Login = (req,res) => {
        const LoginInfo = {
            email: req.body.email,
            password: req.body.password,
            role_id: req.body.role_id
        }
        service.Login(LoginInfo,res)
    }
    
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    reviewUser,
    Login
}