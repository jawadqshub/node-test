const getUserFromModel = require("../DAOs/userDAO");


const getUserFromService = async () => {
    try {
        const user = await getUserFromModel();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error; // Re-throw the error to the caller
    }
}
module.exports = getUserFromService;