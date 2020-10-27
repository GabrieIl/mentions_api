const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema({
    friend: {
        type: String,
        require: true,
        trim: true
    },
    mention: {
        type: String,
        require: true
    }
}, {
    collection: 'Mentions'
})


module.exports = mongoose.model('Mentions', schema)
