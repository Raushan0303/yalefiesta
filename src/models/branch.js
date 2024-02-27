// branchSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
    name: { type: String, required: true, unique: true },
    // Add more branch schema fields as needed
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
