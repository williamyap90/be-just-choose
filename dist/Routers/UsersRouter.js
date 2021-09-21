"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersController_1 = require("../Controllers/UsersController");
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
usersRouter.route('/').get(UsersController_1.getUsers).post(UsersController_1.postUser);
usersRouter.route('/:email').get(UsersController_1.getUserByEmail).patch(UsersController_1.patchUserByEmail);
exports.default = usersRouter;
