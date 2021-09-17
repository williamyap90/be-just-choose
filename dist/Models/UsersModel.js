"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUser = exports.findUserByEmail = exports.findUsers = void 0;
const Schemas_1 = require("../Schemas/Schemas");
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.User.find({});
    return res;
});
exports.findUsers = findUsers;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.User.findOne({ email: email });
    return res;
});
exports.findUserByEmail = findUserByEmail;
const addNewUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: req.password,
    };
    const res = yield new Schemas_1.User(newUser).save();
    return res;
});
exports.addNewUser = addNewUser;
