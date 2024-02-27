// eventController.js
const EventService = require('./eventService');

const eventService = new EventService();

const createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEventById = async (req, res) => {
    try {
        const event = await eventService.getEventById(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateEvent = async (req, res) => {
    try {
        const event = await eventService.updateEvent(req.params.id, req.body);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const result = await eventService.deleteEvent(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createEvent, getEventById, updateEvent, deleteEvent, getAllEvents };
