// userService.js
const UserRepository = require('./userRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        try {
            const user = await this.userRepository.getUserById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id, data) {
        try {
            const user = await this.userRepository.updateUser(id, data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const result = await this.userRepository.deleteUser(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllUsers() {
        try {
            const users = await this.userRepository.getAllUsers();
            return users;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;
