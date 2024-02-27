// feedbackSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
    // Add more feedback schema fields as needed
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
