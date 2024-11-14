const Specialtycontroller = require("./Controllers/SpecialtyController")
const rolescontroller = require("./Controllers/rolesController")
const usercontroller = require("./Controllers/userController")
const appointmentController = require("./Controllers/appointmentController")
const ambulanceController = require("./Controllers/ambulanceController")
const appointmentBookingController = require("./Controllers/ambulanceBookingController")
const doctorController = require("./Controllers/doctorController")
const driverController = require("./Controllers/driverController")
const inventoryController = require("./Controllers/inventoryController")
const labAttendantController = require("./Controllers/labAttendantController")
const labTestController = require("./Controllers/labTestController")
const medicineController = require("./Controllers/medicineController")
const orderController = require("./Controllers/orderController")
const orderDetailsController = require("./Controllers/orderDetailsController")
const prescriptionController = require("./Controllers/prescriptionController")
const prescriptionDetailsController = require("./Controllers/prescriptionDetailsController")
const reportsController = require("./Controllers/reportsController")
const stocksController = require("./Controllers/stocksController")

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
router.post("/Login",usercontroller.Login)

//Roles
router.post("/CreateRoles",rolescontroller.createRoles)
router.post("/UpdateRoles",rolescontroller.updateRoles)
router.post("/ReviewRoles",rolescontroller.updateRoles)
router.post("/DeleteRoles",rolescontroller.deleteRoles)

//User
router.post("/CreateAppoinment",appointmentController.createAppointment)
router.post("/UpdateAppoinment",appointmentController.updateAppointment)
router.post("/ReviewAppoinment",appointmentController.reviewAppointment)
router.post("/DeleteAppoinment",appointmentController.deleteAppointment)
router.post("/ReviewAppointmentByDoctorId",appointmentController.reviewAppointmentByDoctorID)
router.post("/ReviewAppointmentByUserId",appointmentController.reviewAppointmentByUserID)

//Ambulance
router.post("/CreateAmbulance",ambulanceController.createAmbulance)
router.post("/DeleteAmbulance",ambulanceController.deleteAmbulance)
router.post("/ReviewAmbulance",ambulanceController.reviewAmbulance)
router.post("/UpdateAmbulance",ambulanceController.updateAmbulance)

//Ambulance Booking
router.post("/CreateAmbulanceBooking",appointmentBookingController.createAmbulanceBooking)
router.post("/UpdateAmbulanceBooking",appointmentBookingController.updateAmbulanceBooking)
router.post("/ReviewAmbulanceBooking",appointmentBookingController.reviewAmbulanceBooking)
router.post("/ReviewAmbulanceBookingByPhoneNo",appointmentBookingController.reviewAmbulanceBookingByPhoneNo)
router.post("/DeleteAmbulanceBooking",appointmentBookingController.deleteAmbulanceBooking)

//Doctor
router.post("/CreateDoctor",doctorController.createDoctor)
router.post("/UpdateDoctor",doctorController.updateDoctor)
router.post("/ReviewDoctor",doctorController.reviewDoctor)
router.post("/ReviewDoctorByDictor",doctorController.reviewDoctorByDoctorName)
router.post("/DeleteDoctor",doctorController.deleteDoctor)

//Driver
router.post("/CreateDriver",driverController.createDriver)
router.post("/UpdateDriver",driverController.updateDriver)
router.post("/ReviewDriver",driverController.reviewDriver)
router.post("/DeleteDriver",driverController.deleteDriver)

//Inventory 
router.post("/CreateInventory",inventoryController.createInventory)
router.post("/UpdateInventory",inventoryController.updateInventory)
router.post("/ReviewInventory",inventoryController.reviewInventory)
router.post("/DeleteInventory",inventoryController.deleteInventory)

//Lab Attendant
router.post("/CreateLabAttendant",labAttendantController.createlabAttendant)
router.post("/UpdateLabAttendant",labAttendantController.updatelabAttendant)
router.post("/ReviewLabAttendant",labAttendantController.reviewlabAttendant)
router.post("/DeleteLabAttendant",labAttendantController.deletelabAttendant)

//Lab Test
router.post("/CreateLabTest",labTestController.createlabTest)
router.post("/UpdateLabTest",labTestController.updatelabTest)
router.post("/ReviewLabTest",labTestController.reviewlabTest)
router.post("/UpdateLabTest",labTestController.updatelabTest)

//Medicine
router.post("/CreateMedicine",medicineController.createMedicine)
router.post("/ReviewMedicine",medicineController.reviewMedicine)
router.post("/UpdateMedicine",medicineController.updateMedicine)
router.post("/DeleteMedicine",medicineController.deleteMedicine)

//Order
router.post("/CreateOrder",orderController.createOrder)
router.post("/UpdateOrder",orderController.updateOrder)
router.post("/ReviewOrderByUserID",orderController.reviewOrderByUserID)
router.post("/DeleteOrder",orderController.deleteOrder)

//Order Details
router.post("/CreateOrderDetails",orderDetailsController.createOrderDetail)
router.post("/UpdateOrderDetails",orderDetailsController.updateOrderDetail)
router.post("/ReviewOrderDetailsByOrderID",orderDetailsController.reviewOrderDetailByorderID)
router.post("/DeleteOrderDetails",orderDetailsController.deleteOrderDetail)

// Prescription 
router.post("/CreatePrescription",prescriptionController.createPrescription)
router.post("/UpdatePrescription",prescriptionController.updatePrescription)
router.post("/ReviewPrescriptionByDoctorID",prescriptionController.reviewPrescriptionByDoctorID)
router.post("/ReviewPrescriptionByUserID",prescriptionController.reviewPrescriptionByUserID)
router.post("/DeletePrescription",prescriptionController.deletePrescription)

//Prescription Controller
router.post("/CreatePrescriptionDetails",prescriptionDetailsController.createprescriptionDetail)
router.post("/UpdatePrescriptionDetails",prescriptionDetailsController.updateprescriptionDetail)
router.post("/ReviewPrescriptionDetailsByAppointmentID",prescriptionDetailsController.reviewPrescriptionDetailByAppointmentID)
router.post("/DeletePrescriptionDetails",prescriptionDetailsController.deleteprescriptionDetail)

//Reports
router.post("/CreateReports",reportsController.createReports)
router.post("/UpdateReports",reportsController.updateReports)
router.post("/ReviewReports",reportsController.reviewReports)
router.post("/DeleteReports",reportsController.deleteReports)

//Stocks
router.post("/CreateStocks",stocksController.createStock)
router.post("/UpdateStocks",stocksController.updateStock)
router.post("/ReviewStocks",stocksController.reviewStock)
router.post("/DeleteStocks",stocksController.deleteStock)

module.exports = router