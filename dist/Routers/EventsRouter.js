"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventsController_1 = require("../Controllers/EventsController");
const express_1 = __importDefault(require("express"));
const eventsRouter = express_1.default.Router();
eventsRouter.route('/').get(EventsController_1.getEvents).post(EventsController_1.postEvent);
exports.default = eventsRouter;
