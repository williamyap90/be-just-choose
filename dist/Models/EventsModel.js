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
exports.updateEventByName = exports.findEventById = exports.findEventByName = exports.addEvent = exports.findEvents = void 0;
const Schemas_1 = require("../Schemas/Schemas");
const findEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.EventModel.find({});
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
    const res = yield new Schemas_1.EventModel(newEvent).save();
    return res;
});
exports.addEvent = addEvent;
const findEventByName = (eventName) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedEventName = eventName.replace('+', ' ');
    const res = yield Schemas_1.EventModel.find({ eventName: formattedEventName });
    return res;
});
exports.findEventByName = findEventByName;
const findEventById = (eventId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Schemas_1.EventModel.find({ eventId: eventId });
    return res;
});
exports.findEventById = findEventById;
const updateEventByName = (eventName, updateBody) => __awaiter(void 0, void 0, void 0, function* () {
    let res;
    const formattedEventName = eventName.replace('+', ' ');
    if (Object.prototype.hasOwnProperty.call(updateBody, 'restaurantVotes')) {
        // loop through updateBody (restaurantVotes) and update votes at given id
        // res = await EventModel.updateOne(
        //     { eventName: formattedEventName },
        //     updateBody
        // );
    }
    else {
        // update events properties as normal
        res = yield Schemas_1.EventModel.updateOne({ eventName: formattedEventName }, updateBody);
    }
    return res;
});
exports.updateEventByName = updateEventByName;
//GET EVENT BY EVENT ID
