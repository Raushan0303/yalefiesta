// resultService.js
const ResultRepository = require('./resultRepository');

class ResultService {
    constructor() {
        this.resultRepository = new ResultRepository();
    }

    async createResult(data) {
        try {
            const result = await this.resultRepository.createResult(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getResultById(id) {
        try {
            const result = await this.resultRepository.getResultById(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateResult(id, data) {
        try {
            const result = await this.resultRepository.updateResult(id, data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async deleteResult(id) {
        try {
            const result = await this.resultRepository.deleteResult(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllResults() {
        try {
            const results = await this.resultRepository.getAllResults();
            return results;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ResultService;
