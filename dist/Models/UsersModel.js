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
exports.findUserByEmail = exports.findUsers = void 0;
const Schemas_1 = require("../Schemas/Schemas");
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Schemas_1.User.find({});
    return response;
});
exports.findUsers = findUsers;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield Schemas_1.User.findOne({ email: email });
    return response;
});
exports.findUserByEmail = findUserByEmail;
