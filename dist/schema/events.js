"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = require("mongoose");
const EventSchemaFields = {
    eventName: {
        type: String,
        required: true,
    },
    eventURL: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    organiser: {
        type: String,
    },
    restaurantList: {
        type: [{ restaurantName: Object, cuisine: String, priceRange: String }],
    },
    isDraft: {
        type: Boolean,
    },
    voters: {
        type: [String],
    },
    winningRestaurant: {
        type: Object,
    },
    endDate: {
        type: Date,
    },
};
const EventSchema = new mongoose_1.Schema(EventSchemaFields);
const Event = (0, mongoose_1.model)('Event', EventSchema);
exports.Event = Event;
