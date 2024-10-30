const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

const OrgModel = mongoose.model("orgs", OrgSchemaSchema, "orgs");
module.exports = OrgModel;