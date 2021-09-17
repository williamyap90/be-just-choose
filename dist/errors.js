"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRouter404 = void 0;
const handleRouter404 = (req, res, next) => {
    res.status(404).send({ message: 'Invalid path' });
};
exports.handleRouter404 = handleRouter404;
