// notificationSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    // Add more notification schema fields as needed
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
