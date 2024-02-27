// branchRepository.js
const Branch = require('./branchSchema');

class BranchRepository {
    async createBranch(data) {
        try {
            const branch = await Branch.create(data);
            return branch;
        } catch (error) {
            console.log("Something went wrong in branch repository layer");
            throw error;
        }
    }

    async getBranchById(id) {
        try {
            const branch = await Branch.findById(id);
            return branch;
        } catch (error) {
            console.log("Something went wrong in branch repository layer");
            throw error;
        }
    }

    async updateBranch(id, data) {
        try {
            const branch = await Branch.findByIdAndUpdate(id, data, { new: true });
            return branch;
        } catch (error) {
            console.log("Something went wrong in branch repository layer");
            throw error;
        }
    }

    async deleteBranch(id) {
        try {
            await Branch.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in branch repository layer");
            throw error;
        }
    }

    async getAllBranches() {
        try {
            const branches = await Branch.find();
            return branches;
        } catch (error) {
            console.log("Something went wrong in branch repository layer");
            throw error;
        }
    }
}

module.exports = BranchRepository;
