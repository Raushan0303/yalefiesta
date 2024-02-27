// feedbackController.js
const FeedbackService = require('./feedbackService');

const feedbackService = new FeedbackService();

const createFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.createFeedback(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getFeedbackById = async (req, res) => {
    try {
        const feedback = await feedbackService.getFeedbackById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateFeedback = async (req, res) => {
    try {
        const feedback = await feedbackService.updateFeedback(req.params.id, req.body);
        if (!feedback) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteFeedback = async (req, res) => {
    try {
        const result = await feedbackService.deleteFeedback(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await feedbackService.getAllFeedback();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createFeedback, getFeedbackById, updateFeedback, deleteFeedback, getAllFeedback };
