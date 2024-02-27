// eventRepository.js
const Event = require('./eventSchema');

class EventRepository {
    async createEvent(data) {
        try {
            const event = await Event.create(data);
            return event;
        } catch (error) {
            console.log("Something went wrong in event repository layer");
            throw error;
        }
    }

    async getEventById(id) {
        try {
            const event = await Event.findById(id);
            return event;
        } catch (error) {
            console.log("Something went wrong in event repository layer");
            throw error;
        }
    }

    async updateEvent(id, data) {
        try {
            const event = await Event.findByIdAndUpdate(id, data, { new: true });
            return event;
        } catch (error) {
            console.log("Something went wrong in event repository layer");
            throw error;
        }
    }

    async deleteEvent(id) {
        try {
            await Event.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in event repository layer");
            throw error;
        }
    }

    async getAllEvents() {
        try {
            const events = await Event.find();
            return events;
        } catch (error) {
            console.log("Something went wrong in event repository layer");
            throw error;
        }
    }
}

module.exports = EventRepository;
