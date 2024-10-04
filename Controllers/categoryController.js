    const service = require("../Services/categoryService")
    const createCategory = (req,res) => {
        const categoryInfo = {
            category_id: req.body.category_id,
            category_name: req.body.category_name
        }
        service.createCategory(categoryInfo,res)
    }
    const updateCategory = (req,res) => {
        const categoryInfo = {
            category_id: req.body.category_id,
            category_name: req.body.category_name
        }
        service.updateCategory(categoryInfo,res)
    }
    const deleteCategory = (req,res) => {
        const categoryInfo = {
            category_id: req.body.category_id
        }
        service.deleteCategory(categoryInfo,res)
    }
    const reviewCategory = (req,res) => {
        const categoryInfo = {
            category_id: req.body.category_id
        }
        service.reviewCategory(categoryInfo,res)
    }
    
module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    reviewCategory
}