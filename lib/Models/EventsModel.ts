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

export const findEventByName = async (eventName: string) => {
    const formattedEventName = eventName.replace('+', ' ');
    const res = await Event.find({ eventName: formattedEventName });
    return res;
};

export const updateEventByName = async (eventName: string, updateBody: any) => {
    const formattedEventName = eventName.replace('+', ' ');
    const res = await Event.updateOne(
        { eventName: formattedEventName },
        updateBody
    );
    return res;
};
