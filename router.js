const categorycontroller = require("./Controllers/categoryController")
const rolescontroller = require("./Controllers/rolesController")
const usercontroller = require("./Controllers/userController")
const router = require("express").Router()

//Category
router.post("/CreateCategory",categorycontroller.createCategory)
router.post("/UpdateCategory",categorycontroller.updateCategory)
router.post("/ReviewCategory",categorycontroller.reviewCategory)
router.post("/DeleteCategory",categorycontroller.deleteCategory)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

//Roles
router.post("/CreateRoles",rolescontroller.createRoles)
router.post("/UpdateRoles",rolescontroller.updateRoles)
router.post("/ReviewRoles",rolescontroller.updateRoles)
router.post("/DeleteRoles",rolescontroller.deleteRoles)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

//User
router.post("/CreateUser",usercontroller.createUser)
router.post("/UpdateUser",usercontroller.updateUser)
router.post("/ReviewUser",usercontroller.reviewUser)
router.post("/DeleteUser",usercontroller.deleteUser)

module.exports = router