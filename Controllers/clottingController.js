const service = require("../Services/clottingService")
const createClotting = (req,res) => {
    const clottingInfo = {
        bleedingTime: req.body.bleedingTime,
        clottingTime: req.body.clottingTime,
        Prothrombin: req.body.Prothrombin
    }
    req.bleedingTime,req.clottingTime,req.Prothrombin
    service.createClotting(clottingInfo,res)
}
const updateClotting = (req,res) => {
    const clottingInfo = {
        testId: req.body.testId,
        bleedingTime: req.body.bleedingTime,
        clottingTime: req.body.clottingTime,
        Prothrombin: req.body.Prothrombin
    }
    service.updateClotting(clottingInfo,res)
}
const deleteClotting = (req,res) => {
    const clottingInfo = {
        testId: req.body.testId
    }
    service.deleteClotting(clottingInfo,res)
}
const reviewClotting = (req,res) => {
    const clottingInfo = {
        testId: req.body.testId
    }
    service.reviewClotting(clottingInfo,res)
}

module.exports = {
    createClotting,
    updateClotting,
    deleteClotting,
    reviewClotting
}