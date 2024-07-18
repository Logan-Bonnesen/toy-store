const mongoose = require('mongoose')

const toySchema = new mongoose.Schema({
    name: { type: String, required: true}
});

module.exports = mongoose.model('Toy', toySchema)