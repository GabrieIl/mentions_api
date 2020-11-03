const express = require('express');
const { connect } = require('mongoose');
const Mentions = require('./models/mentions')
const db = require('./controllers/database-controller')


// Global instance of App
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes
const indexRoutes = require('./routes/index-routes') 
app.use('/', indexRoutes) 

const mentionsRouttes = require('./routes/mentions-route')
app.use('/mentions', mentionsRouttes)


module.exports = app 
