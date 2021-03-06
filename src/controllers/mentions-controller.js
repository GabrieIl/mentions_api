const repository = require('../repositories/mentions-repository')
const { validationResult } = require('express-validator')


// List mentions
exports.listMentions = async(req, res) => {
    try {
        const data = await repository.listMentions()
        res.status(200).send(data)
    }
    catch(e) {
        res.status(500).send({message: 'Failded to load mentions.'})
    }
}


// Create mention
exports.createMention = async (req, res) => {
    const { errors } = validationResult(req)

    if(errors.length > 0 ) {
        return res.status(400).send({message: errors})
    }

    try {    
        await repository.createMention({
            friend: req.body.friend,
            mention: req.body.mention
        })
        res.status(201).send({message: 'New mention created with success.'})
    }
    catch(e) {
        res.status(500).send({message: 'Failed to create a new mention.'})
    }
}


// Delete mention
exports.deleteMention = async (req, res) => {
    try {
        const result = await repository.deleteMention(req.body)
        res.status(200).send(result)
    }
    catch (e) {
        res.status(400).send({message: `Error: ${e}`})
    }
}