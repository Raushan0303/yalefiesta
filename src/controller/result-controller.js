// resultController.js
const ResultService = require('./resultService');

const resultService = new ResultService();

const createResult = async (req, res) => {
    try {
        const result = await resultService.createResult(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getResultById = async (req, res) => {
    try {
        const result = await resultService.getResultById(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Result not found' });
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateResult = async (req, res) => {
    try {
        const result = await resultService.updateResult(req.params.id, req.body);
        if (!result) {
            return res.status(404).json({ error: 'Result not found' });
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteResult = async (req, res) => {
    try {
        const result = await resultService.deleteResult(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Result not found' });
        }
        res.json({ message: 'Result deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllResults = async (req, res) => {
    try {
        const results = await resultService.getAllResults();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createResult, getResultById, updateResult, deleteResult, getAllResults };
