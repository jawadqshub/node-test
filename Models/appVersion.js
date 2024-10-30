const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppVersionSchema = new Schema({
    appName: {
        type: String,
    },
    version: {
        type: String,
    },
    downloadLink: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    sha1: {
        type: String,
    },
});

const AppVersionModel = mongoose.model("appVersion", AppVersionSchema, "app_version");
module.exports = AppVersionModel;