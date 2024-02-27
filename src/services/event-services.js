// eventService.js
const EventRepository = require('./eventRepository');

class EventService {
    constructor() {
        this.eventRepository = new EventRepository();
    }

    async createEvent(data) {
        try {
            const event = await this.eventRepository.createEvent(data);
            return event;
        } catch (error) {
            throw error;
        }
    }

    async getEventById(id) {
        try {
            const event = await this.eventRepository.getEventById(id);
            return event;
        } catch (error) {
            throw error;
        }
    }

    async updateEvent(id, data) {
        try {
            const event = await this.eventRepository.updateEvent(id, data);
            return event;
        } catch (error) {
            throw error;
        }
    }

    async deleteEvent(id) {
        try {
            const result = await this.eventRepository.deleteEvent(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllEvents() {
        try {
            const events = await this.eventRepository.getAllEvents();
            return events;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventService;
