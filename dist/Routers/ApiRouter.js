"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpoints_json_1 = __importDefault(require("../endpoints.json"));
const UsersRouter_1 = __importDefault(require("./UsersRouter"));
const apiRouter = express_1.default.Router();
apiRouter.get('/', (req, res, next) => {
    res.status(200).send(endpoints_json_1.default);
});
apiRouter.use('/users', UsersRouter_1.default);
// apiRouter.use('/events', eventsRouter);
exports.default = apiRouter;
