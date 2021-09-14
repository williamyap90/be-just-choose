"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchemaFields = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    eventHistory: {
        type: [{ eventId: String }],
    },
    password: {
        type: String,
    },
};
const UserSchema = new mongoose_1.Schema(UserSchemaFields);
const User = (0, mongoose_1.model)('User', UserSchema);
exports.User = User;
