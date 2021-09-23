"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventsController_1 = require("../Controllers/EventsController");
const express_1 = __importDefault(require("express"));
const eventsRouter = express_1.default.Router();
eventsRouter.route('/').get(EventsController_1.getEvents).post(EventsController_1.postEvent);
eventsRouter.route('/eventsbyorganiser/:organiser').get(EventsController_1.getEventsByOrganiser);
eventsRouter.route('/:eventName').get(EventsController_1.getEventByName).patch(EventsController_1.patchEventByName);
eventsRouter.route('/eventById/:eventId').get(EventsController_1.getEventById);
exports.default = eventsRouter;
