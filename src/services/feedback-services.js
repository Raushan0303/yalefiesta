// feedbackService.js
const FeedbackRepository = require('./feedbackRepository');

class FeedbackService {
    constructor() {
        this.feedbackRepository = new FeedbackRepository();
    }

    async createFeedback(data) {
        try {
            const feedback = await this.feedbackRepository.createFeedback(data);
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async getFeedbackById(id) {
        try {
            const feedback = await this.feedbackRepository.getFeedbackById(id);
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async updateFeedback(id, data) {
        try {
            const feedback = await this.feedbackRepository.updateFeedback(id, data);
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async deleteFeedback(id) {
        try {
            const result = await this.feedbackRepository.deleteFeedback(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllFeedback() {
        try {
            const feedbacks = await this.feedbackRepository.getAllFeedback();
            return feedbacks;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FeedbackService;
