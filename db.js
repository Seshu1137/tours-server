const mongoose = require('mongoose')
const url = 'mongodb+srv://kakarlamudidurgaramaseshu:ArT6ZZegScmrKnjK@sample.qghflrl.mongodb.net/tours?retryWrites=true&w=majority&appName=sample'
// const url = 'mongodb://localhost:27017/tours'

mongoose.connect(url)
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.log(err.message))