import express from 'express';
import { addEvent, findEvents } from '../Models/EventsModel';

export const getEvents: express.RequestHandler = (req, res, next) => {
    findEvents()
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

export const postEvent: express.RequestHandler = (req, res, next) => {
    addEvent(req.body)
        .then((event) => {
            res.status(201).send({ event });
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};