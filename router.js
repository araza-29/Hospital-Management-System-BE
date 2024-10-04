const Specialtycontroller = require("./Controllers/SpecialtyController")
const rolescontroller = require("./Controllers/rolesController")
const usercontroller = require("./Controllers/userController")
const router = require("express").Router()

//Specialty
router.post("/CreateSpecialty",Specialtycontroller.createSpecialty)
router.post("/UpdateSpecialty",Specialtycontroller.updateSpecialty)
router.post("/ReviewSpecialty",Specialtycontroller.reviewSpecialty)
router.post("/DeleteSpecialty",Specialtycontroller.deleteSpecialty)

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