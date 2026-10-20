const catchAsync = require("../utils/catchAsync")

exports.getAllNotes = catchAsync(async(req, res, next) => {
    return 'All notes available'
})