const UserModel = require("../Models/users");

const getUserFromModel = async () => {
    try {
        const user = await UserModel.find();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error; // Re-throw the error to the caller
    }
}
module.exports = getUserFromModel;