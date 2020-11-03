const express = require('express')
const router = express.Router()


// Define / path
router.get('/', (req, res, next) => {
    res.send({
        title: 'MentionsAPI',
        version: '1.0.0'
    })
})


module.exports = router 
