"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchEventByName = exports.getEventById = exports.getEventByName = exports.postEvent = exports.getEvents = void 0;
const EventsModel_1 = require("../Models/EventsModel");
const getEvents = (req, res, next) => {
    (0, EventsModel_1.findEvents)()
        .then((events) => {
        if (!events) {
            res.status(404).send();
        }
        res.status(200).send({ events });
    })
        .catch((err) => {
        res.send(400).send(err);
    });
};
exports.getEvents = getEvents;
const postEvent = (req, res, next) => {
    (0, EventsModel_1.addEvent)(req.body)
        .then((event) => {
        res.status(201).send({ event });
    })
        .catch((err) => {
        res.status(400).send(err);
    });
};
exports.postEvent = postEvent;
const getEventByName = (req, res, next) => {
    const { eventName } = req.params;
    (0, EventsModel_1.findEventByName)(eventName)
        .then((event) => {
        if (!event) {
            res.status(404).send();
        }
        res.status(200).send({ event });
    })
        .catch((err) => {
        res.send(400).send(err);
    });
};
exports.getEventByName = getEventByName;
const getEventById = (req, res, next) => {
    const { eventId } = req.params;
    (0, EventsModel_1.findEventById)(eventId)
        .then((event) => {
        if (!event) {
            res.status(404).send();
        }
        res.status(200).send({ event });
    })
        .catch((err) => {
        res.send(400).send(err);
    });
};
exports.getEventById = getEventById;
const patchEventByName = (req, res, next) => {
    const { eventName } = req.params;
    const updateBody = req.body;
    (0, EventsModel_1.updateEventByName)(eventName, updateBody)
        .then((event) => {
        if (!event) {
            res.status(404).send();
        }
        res.status(200).send({ event });
    })
        .catch((err) => {
        res.send(400).send(err);
    });
};
exports.patchEventByName = patchEventByName;
