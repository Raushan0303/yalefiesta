// notificationService.js
const NotificationRepository = require('./notificationRepository');

class NotificationService {
    constructor() {
        this.notificationRepository = new NotificationRepository();
    }

    async createNotification(data) {
        try {
            const notification = await this.notificationRepository.createNotification(data);
            return notification;
        } catch (error) {
            throw error;
        }
    }

    async getNotificationById(id) {
        try {
            const notification = await this.notificationRepository.getNotificationById(id);
            return notification;
        } catch (error) {
            throw error;
        }
    }

    async updateNotification(id, data) {
        try {
            const notification = await this.notificationRepository.updateNotification(id, data);
            return notification;
        } catch (error) {
            throw error;
        }
    }

    async deleteNotification(id) {
        try {
            const result = await this.notificationRepository.deleteNotification(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllNotifications() {
        try {
            const notifications = await this.notificationRepository.getAllNotifications();
            return notifications;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NotificationService;
