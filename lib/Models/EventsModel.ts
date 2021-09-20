import { Event } from '../Schemas/Schemas';

export const findEvents = async () => {
    const res = await Event.find({});
    return res;
};

export const addEvent = async ({ eventName, organiser, endDate }: any) => {
    const newEvent = {
        eventName,
        organiser,
        endDate,
    };
    const res = await new Event(newEvent).save();
    return res;
};
