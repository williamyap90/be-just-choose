"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    eventHistory: [{ eventId: String }],
    password: String,
}, { collection: 'users', versionKey: false });
const EventSchema = new mongoose_1.default.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventURL: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    organiser: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    restaurantList: [
        { restaurantName: String, cuisine: String, priceRange: String },
    ],
    isDraft: Boolean,
    voters: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }],
    winningRestaurant: {
        restaurantName: String,
        cuisine: String,
        priceRange: String,
    },
    endDate: Date,
}, { collection: 'events', versionKey: false });
exports.User = mongoose_1.default.model('User', UserSchema);
exports.Event = mongoose_1.default.model('Event', EventSchema);
