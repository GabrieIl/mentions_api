const express = require('express')
const router = express.Router()


function httpLogResponse(req, res){
    console.log(`[${req.protocol}] ${req.method} ${res.statusCode} ${req.path}`)
}

// Define / path
router.get('/', (req, res, next) => {
    res.send({
        title: 'MentionsAPI',
        version: '1.0.0'
    })
    httpLogResponse(req, res)
})


module.exports = router // make this file a package
