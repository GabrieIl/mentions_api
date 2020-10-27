const router = require('express').Router()
const mentionsController = require('../controllers/mentions-controller')
const { check } = require('express-validator')


router.get('/', mentionsController.listMentions)

router.post('/', [
    check('friend')
        .isLength({min: 7})
        .withMessage('The name must be at least 7 characters.'),
    check('mention')
        .isLength({min: 10, max: 280})
        .withMessage('The mentions must be at least 10 and at most 280 characters.')    
], mentionsController.createMention)


module.exports = router
