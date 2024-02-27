// branchController.js
const BranchService = require('./branchService');

const branchService = new BranchService();

const createBranch = async (req, res) => {
    try {
        const branch = await branchService.createBranch(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getBranchById = async (req, res) => {
    try {
        const branch = await branchService.getBranchById(req.params.id);
        if (!branch) {
            return res.status(404).json({ error: 'Branch not found' });
        }
        res.json(branch);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateBranch = async (req, res) => {
    try {
        const branch = await branchService.updateBranch(req.params.id, req.body);
        if (!branch) {
            return res.status(404).json({ error: 'Branch not found' });
        }
        res.json(branch);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteBranch = async (req, res) => {
    try {
        const result = await branchService.deleteBranch(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Branch not found' });
        }
        res.json({ message: 'Branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllBranches = async (req, res) => {
    try {
        const branches = await branchService.getAllBranches();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createBranch, getBranchById, updateBranch, deleteBranch, getAllBranches };
