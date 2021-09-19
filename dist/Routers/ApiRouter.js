"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpoints_json_1 = __importDefault(require("../endpoints.json"));
const UsersRouter_1 = __importDefault(require("./UsersRouter"));
const axios_1 = __importDefault(require("axios"));
const apiRouter = express_1.default.Router();
apiRouter.get('/', (req, res, next) => {
    res.status(200).send(endpoints_json_1.default);
});
apiRouter.use('/users', UsersRouter_1.default);
// apiRouter.use('/events', eventsRouter);
apiRouter.get('/restaurants', (req, res) => {
    //refactor
    const reviewsAPI = axios_1.default.create({
        baseURL: 'https://api.yelp.com/v3/businesses/search',
    });
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = reviewsAPI
        .get('', {
        params: {
            location: req.query.location,
            radius: req.query.radius,
            limit: req.query.limit,
            sort_by: req.query.sort_by,
            price: req.query.price,
            offset: req.query.offset,
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    })
        .then((response) => {
        res.status(200).send({ restaurants: response.data });
    })
        .catch((e) => {
        console.log(e);
    });
});
exports.default = apiRouter;
