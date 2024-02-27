// userRepository.js
const User = require('./userSchema');

class UserRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async updateUser(id, data) {
        try {
            const user = await User.findByIdAndUpdate(id, data, { new: true });
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            await User.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }

    async getAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.log("Something went wrong in user repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;
