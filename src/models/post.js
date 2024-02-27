// postSchema.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    content: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    // Add more post schema fields as needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
