// userSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    branch: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    eventsRegistered: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    // Add more user schema fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
