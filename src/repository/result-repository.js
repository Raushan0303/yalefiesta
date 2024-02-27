// resultRepository.js
const Result = require('./resultSchema');

class ResultRepository {
    async createResult(data) {
        try {
            const result = await Result.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in result repository layer");
            throw error;
        }
    }

    async getResultById(id) {
        try {
            const result = await Result.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in result repository layer");
            throw error;
        }
    }

    async updateResult(id, data) {
        try {
            const result = await Result.findByIdAndUpdate(id, data, { new: true });
            return result;
        } catch (error) {
            console.log("Something went wrong in result repository layer");
            throw error;
        }
    }

    async deleteResult(id) {
        try {
            await Result.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in result repository layer");
            throw error;
        }
    }

    async getAllResults() {
        try {
            const results = await Result.find();
            return results;
        } catch (error) {
            console.log("Something went wrong in result repository layer");
            throw error;
        }
    }
}

module.exports = ResultRepository;
