const { query } = require('express-validator');
const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');


exports.listMentions = async () => {
    const result = await Mentions.find({}, 'friend mention -_id')
    return result
};


exports.createMention = async (data) => {
    const mention = new Mentions(data)
    await mention.save()
};


exports.deleteMention = async (query) => {
    const result = await Mentions.deleteOne(query)
    return result
}


exports.updateMention = async (find_query, update_fields) => {
    const result = await Mentions.updateOne(find_query, update_fields)
    return result
}