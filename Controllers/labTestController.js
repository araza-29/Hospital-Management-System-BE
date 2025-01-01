const service = require("../Services/labTestService")
const createlabTest = (req,res) => {
    const labTestInfo = {
        name: req.body.name,
        price: req.body.price,
        sample: req.body.sample,
        userId: req.body.userId,
        attendantId: req.body.attendantId,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status
    }
    service.createlabTest(labTestInfo,res)
}
const updatelabTest = (req,res) => {
    const labTestInfo = {
        name: req.body.name,
        price: req.body.price,
        sample: req.body.sample,
        userId: req.body.userId,
        attendantId: req.body.attendantId,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        testId: req.body.testId
    }
    service.updatelabTest(labTestInfo,res)
}
const deletelabTest = (req,res) => {
    const labTestInfo = {
        testId: req.body.testId
    }
    service.deletelabTest(labTestInfo,res)
}
const reviewlabTest = (req,res) => {
    const labTestInfo = {
        testId: req.body.testId
    }
    service.reviewlabTest(labTestInfo,res)
}
const reviewlabTestByUserId = (req,res) => {
    const labTestInfo = {
        userId: req.body.userId
    }
    service.reviewlabTestByUserId(labTestInfo,res);
}
const reviewlabTestByAttendantId = (req,res) => {
    const labTestInfo = {
        attendantId: req.body.attendantId
    }
    service.reviewlabTestByAttendantId(labTestInfo,res);
}
const reviewlabTestsUniquely = (req,res) => {
    const labTestInfo = {
        attendantId: req.body.attendantId
    }
    service.reviewlabTestByAttendantId(labTestInfo,res);
}

const reviewFreeAttendant = (req,res) => {
    const labTestInfo = {
        date: req.body.date,
        time: req.body.time
    }
    service.reviewFreeAttendant(labTestInfo,res);
}
module.exports = {
    createlabTest,
    updatelabTest,
    deletelabTest,
    reviewlabTest,
    reviewlabTestByUserId,
    reviewlabTestByAttendantId,
    reviewlabTestsUniquely,
    reviewFreeAttendant
}