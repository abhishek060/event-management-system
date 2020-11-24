const mongoose = require('mongoose');

// Schema
const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    startDate: String,
    endDate: String,
    organizer: String,
    tickets: Array
});

// Model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;