const service = require("../Services/xrayService")
const createXRay = (req,res) => {
    const xrayInfo = {
        name: req.body.name,
        price: req.body.price
    }
    service.createXRay(xrayInfo,res)
}
const updateXRay = (req,res) => {
    const xrayInfo = {
        name: req.body.name,
        price: req.body.price
    }
    service.updateXRay(xrayInfo,res)
}
const deleteXRay = (req,res) => {
    const xrayInfo = {
        test_id: req.body.test_id
    }
    service.deleteXRay(xrayInfo,res)
}
const reviewXRay = (req,res) => {
    const xrayInfo = {
        test_id: req.body.test_id
    }
    service.reviewXRay(xrayInfo,res)
}

module.exports = {
    createXRay,
    updateXRay,
    deleteXRay,
    reviewXRay
}