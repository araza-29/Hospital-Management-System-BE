const service = require("../Services/reportsService")
const createReports = (req,res) => {
    const ReportsInfo = {
        user_id: req.body.user_id,
        attendant_id: req.body.attendant_id,
        test_id: req.body.test_id
    }
    service.createReports(ReportsInfo,res)
}
const updateReports = (req,res) => {
    const ReportsInfo = {
        user_id: req.body.user_id,
        attendant_id: req.body.attendant_id,
        test_id: req.body.test_id
    }
    service.updateReports(ReportsInfo,res)
}
const deleteReports = (req,res) => {
    const ReportsInfo = {
        report_id: req.body.report_id
    }
    service.deleteReports(ReportsInfo,res)
}
const reviewReports = (req,res) => {
    const ReportsInfo = {
        report_id: req.body.report_id
    }
    service.reviewReports(ReportsInfo,res)
}

module.exports = {
    createReports,
    updateReports,
    deleteReports,
    reviewReports
}