const service = require("../Services/urinalysisService")
const createUrinalysis = (req,res) => {
    const urinalysisInfo = {
        colour: req.body.colour,
        clearity: req.body.clearity,
        PH_value: req.body.PH_value
    }
    service.createUrinalysis(Info,res)
}
const updateUrinalysis = (req,res) => {
    const urinalysisInfo = {
        testId: req.body.testId,
        colour: req.body.colour,
        clearity: req.body.clearity,
        PH_value: req.body.PH_value
    }
    service.updateUrinalysis(urinalysisInfo,res)
}
const deleteUrinalysis = (req,res) => {
    const urinalysisInfo = {
        testId: req.body.testId
    }
    service.deleteUrinalysis(urinalysisInfo,res)
}
const reviewUrinalysis = (req,res) => {
    const urinalysisInfo = {
        testId: req.body.testId
    }
    service.reviewUrinalysis(urinalysisInfo,res)
}

module.exports = {
    createUrinalysis,
    updateUrinalysis,
    deleteUrinalysis,
    reviewUrinalysis
}