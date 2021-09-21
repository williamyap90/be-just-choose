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
exports.updateEventByName = exports.findEventByName = exports.addEvent = exports.findEvents = void 0;
const Schemas_1 = require("../Schemas/Schemas");
const findEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.Event.find({});
    return res;
});
exports.findEvents = findEvents;
const addEvent = ({ eventName, organiser, endDate, restaurantList, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(restaurantList, '<<< restaurantList in addEvent');
    const newEvent = {
        eventName,
        organiser,
        endDate,
        restaurantList,
    };
    const res = yield new Schemas_1.Event(newEvent).save();
    return res;
});
exports.addEvent = addEvent;
const findEventByName = (eventName) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedEventName = eventName.replace('+', ' ');
    const res = yield Schemas_1.Event.find({ eventName: formattedEventName });
    return res;
});
exports.findEventByName = findEventByName;
const updateEventByName = (eventName, updateBody) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedEventName = eventName.replace('+', ' ');
    const res = yield Schemas_1.Event.updateOne({ eventName: formattedEventName }, updateBody);
    return res;
});
exports.updateEventByName = updateEventByName;
