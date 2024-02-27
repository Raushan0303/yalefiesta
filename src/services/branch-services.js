// branchService.js
const BranchRepository = require('./branchRepository');

class BranchService {
    constructor() {
        this.branchRepository = new BranchRepository();
    }

    async createBranch(data) {
        try {
            const branch = await this.branchRepository.createBranch(data);
            return branch;
        } catch (error) {
            throw error;
        }
    }

    async getBranchById(id) {
        try {
            const branch = await this.branchRepository.getBranchById(id);
            return branch;
        } catch (error) {
            throw error;
        }
    }

    async updateBranch(id, data) {
        try {
            const branch = await this.branchRepository.updateBranch(id, data);
            return branch;
        } catch (error) {
            throw error;
        }
    }

    async deleteBranch(id) {
        try {
            const result = await this.branchRepository.deleteBranch(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllBranches() {
        try {
            const branches = await this.branchRepository.getAllBranches();
            return branches;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BranchService;
