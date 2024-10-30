const OrgModel = require("../Models/orgs");

const getOrgFromModel = async () => {
    try {
        const org = await OrgModel.find();
        return org;
    } catch (error) {
        console.error("Error fetching org:", error);
        throw error; // Re-throw the error to the caller
    }
}
module.exports = getOrgFromModel;