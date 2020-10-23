const express = require('express')


// Global instance App
const app = express();


// Routes
const indexRoutes = require('./routes/index-routes') // base of paths
app.use('/', indexRoutes) // set at app the paths


module.exports = app // make this file a package
