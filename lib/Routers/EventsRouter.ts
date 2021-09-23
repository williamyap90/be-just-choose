import {
    getEvents,
    postEvent,
    getEventByName,
    patchEventByName,
    getEventById,
    getEventsByOrganiser
} from '../Controllers/EventsController';
import express from 'express';
const eventsRouter = express.Router();

eventsRouter.route('/').get(getEvents).post(postEvent);
eventsRouter.route('/eventsbyorganiser/:organiser').get(getEventsByOrganiser)



eventsRouter.route('/:eventName').get(getEventByName).patch(patchEventByName);

eventsRouter.route('/eventById/:eventId').get(getEventById);
export default eventsRouter;
