const mongoose = require('mongoose')

const EnquirySchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    message: String
})

module.exports = mongoose.model('enquiries', EnquirySchema)