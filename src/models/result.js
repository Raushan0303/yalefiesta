// resultSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    winners: [{
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        position: { type: String, required: true, enum: ['Winner', 'Runner-up'] }
    }],
    // Add runners-up field
    runnersUp: [{
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        position: { type: String, required: true, enum: ['Winner', 'Runner-up'] }
    }],
    // Add more result schema fields as needed
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
