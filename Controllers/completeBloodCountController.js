const service = require("../Services/completeBloodCountService")
const createBloodCount = (req,res) => {
    const BloodCountInfo = {
        whiteCells: req.body.whiteCells,
        hemoglobin: req.body.hemoglobin,
        redCells: req.body.redCells
    }
    service.createBloodCount(BloodCountInfo,res)
}
const updateBloodCount = (req,res) => {
    const BloodCountInfo = {
        testId: req.body.testId,
        whiteCells: req.body.whiteCells,
        hemoglobin: req.body.hemoglobin,
        redCells: req.body.redCells
    }
    service.updateBloodCount(BloodCountInfo,res)
}
const deleteBloodCount = (req,res) => {
    const BloodCountInfo = {
        testId: req.body.testId
    }
    service.deleteBloodCount(BloodCountInfo,res)
}
const reviewBloodCount = (req,res) => {
    const BloodCountInfo = {
        testId: req.body.testId
    }
    service.reviewBloodCount(BloodCountInfo,res)
}

module.exports = {
    createBloodCount,
    updateBloodCount,
    deleteBloodCount,
    reviewBloodCount
}