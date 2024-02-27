// notificationController.js
const NotificationService = require('./notificationService');

const notificationService = new NotificationService();

const createNotification = async (req, res) => {
    try {
        const notification = await notificationService.createNotification(req.body);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getNotificationById = async (req, res) => {
    try {
        const notification = await notificationService.getNotificationById(req.params.id);
        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateNotification = async (req, res) => {
    try {
        const notification = await notificationService.updateNotification(req.params.id, req.body);
        if (!notification) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteNotification = async (req, res) => {
    try {
        const result = await notificationService.deleteNotification(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Notification not found' });
        }
        res.json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllNotifications = async (req, res) => {
    try {
        const notifications = await notificationService.getAllNotifications();
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createNotification, getNotificationById, updateNotification, deleteNotification, getAllNotifications };
