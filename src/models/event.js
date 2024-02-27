// eventSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    maxParticipants: { type: Number, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    // Add more event schema fields as needed
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
