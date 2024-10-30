const mongoose = require('mongoose');
const { Schema } = mongoose;

const screenshotSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    organizationId: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    dateCreated: {
        type: Date,
    },
    dateModified: {
        type: Date,
    },
    dateUploaded: {
        type: Date,
    },
    dayUploaded: {
        type: String,
    },
    projectId: {
        type: String,
    },
    taskId: {
        type: String,
    },
    dateCaptured: {
        type: Date,
    },

});

const ScreenShotModel = mongoose.model("screenshot", screenshotSchema);
module.exports = ScreenShotModel;