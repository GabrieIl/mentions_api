const express = require('express')
const mongoose = require('mongoose')
const Mentions = require('./models/mentions')

require('dotenv').config()


// Global instance App
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Database connection
mongoose.connect('mongodb://root:awsd2357@localhost:27017/mentions?authSource=admin', {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
})


const db = mongoose.connection


db.on('connected', () => {
    console.log('Mongoose default connection is open')
})

db.on('error', (err) => {
    console.log(`Mongoose default connection has occured \n${err}`)
})

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected')
})

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connection is disconnected due to application termination')
        process.exit(0)
    })
})


// Load models
// const Mention = require('./models/mentions')


// Routes
const indexRoutes = require('./routes/index-routes') 
app.use('/', indexRoutes) 

const mentionsRouttes = require('./routes/mentions-route')
app.use('/mentions', mentionsRouttes)


module.exports = app // make this file a package
