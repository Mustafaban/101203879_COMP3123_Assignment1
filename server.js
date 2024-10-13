const express = require('express')
const userRouter = require('./routes/user')
const empRouter = require('./routes/emp')
const app = express()
const mongoose = require("mongoose")


const SERVER_PORT = 5050

const DB_STRING = "mongodb+srv://Roxboyz60:OIIKSraRdsd7PIkC@101203879-mustafabanduk.1xilh.mongodb.net/?retryWrites=true&w=majority&appName=101203879-MustafaBandukda"
mongoose.connect(DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));