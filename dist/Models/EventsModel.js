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
exports.addEvent = exports.findEvents = void 0;
const Schemas_1 = require("../Schemas/Schemas");
const findEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.Event.find({});
    return res;
});
exports.findEvents = findEvents;
const addEvent = ({ eventName, organiser, endDate }) => __awaiter(void 0, void 0, void 0, function* () {
    const newEvent = {
        eventName,
        organiser,
        endDate,
    };
    const res = yield new Schemas_1.Event(newEvent).save();
    return res;
});
exports.addEvent = addEvent;
