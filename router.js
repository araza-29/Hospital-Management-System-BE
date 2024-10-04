const controller = require("../Controllers/categoryController")
const router = require("express").Router()

//Category
router.post("/CreateCategory",controller.createCategory)
router.post("/UpdateCategory",controller.updateCategory)
router.post("/ReviewCategory",controller.reviewCategory)
router.post("/DeleteCategory",controller.deleteCategory)

module.exports = router