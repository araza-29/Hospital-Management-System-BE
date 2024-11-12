const service = require("../Services/labTestService")
const createlabTest = (req,res) => {
    const labTestInfo = {
        name: req.body.name,
        price: req.body.price
    }
    service.createlabTest(labTestInfo,res)
}
const updatelabTest = (req,res) => {
    const labTestInfo = {
        name: req.body.name,
        price: req.body.price
    }
    service.updatelabTest(labTestInfo,res)
}
const deletelabTest = (req,res) => {
    const labTestInfo = {
        test_id: req.body.test_id
    }
    service.deletelabTest(labTestInfo,res)
}
const reviewlabTest = (req,res) => {
    const labTestInfo = {
        test_id: req.body.test_id
    }
    service.reviewlabTest(labTestInfo,res)
}

module.exports = {
    createlabTest,
    updatelabTest,
    deletelabTest,
    reviewlabTest
}