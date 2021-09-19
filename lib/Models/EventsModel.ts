import { Event } from '../Schemas/Schemas';

export const findEvents = async () => {
    const res = await Event.find({});
    return res;
};
