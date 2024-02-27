// notificationRepository.js
const Notification = require('./notificationSchema');

class NotificationRepository {
    async createNotification(data) {
        try {
            const notification = await Notification.create(data);
            return notification;
        } catch (error) {
            console.log("Something went wrong in notification repository layer");
            throw error;
        }
    }

    async getNotificationById(id) {
        try {
            const notification = await Notification.findById(id);
            return notification;
        } catch (error) {
            console.log("Something went wrong in notification repository layer");
            throw error;
        }
    }

    async updateNotification(id, data) {
        try {
            const notification = await Notification.findByIdAndUpdate(id, data, { new: true });
            return notification;
        } catch (error) {
            console.log("Something went wrong in notification repository layer");
            throw error;
        }
    }

    async deleteNotification(id) {
        try {
            await Notification.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in notification repository layer");
            throw error;
        }
    }

    async getAllNotifications() {
        try {
            const notifications = await Notification.find();
            return notifications;
        } catch (error) {
            console.log("Something went wrong in notification repository layer");
            throw error;
        }
    }
}

module.exports = NotificationRepository;
