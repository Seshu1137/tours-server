require('./db')

const express = require('express')
const EnquiryModel = require('./Model/EnquiryModel')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.get('/enquiries', async (req,res) => {
    const enquiries = await EnquiryModel.find()
    res.json({enquiries})
})

app.post('/enquiries' , async (req , res) => {
    const enquiry = new EnquiryModel(req.body)
    const result = await enquiry.save()
    res.json({result})
})

app.get('/enquiries/:id' , async(req , res) => {
    const id = req.params.id
    const enquiry = await EnquiryModel.findOne({_id: id})
    res.json({enquiry})
})

app.delete('/enquiries/:id' , async(req , res) => {
    const id = req.params.id
    const result = await EnquiryModel.deleteOne({_id: id})
    res.json({result})
})

app.put('/enquiries/:id' , async (req, res) => {
    const id = req.params.id
    const enquiry = await EnquiryModel.updateOne({_id: id}, req.body)
    res.json({enquiry})
})

app.listen(5000, () => console.log('API Started'))