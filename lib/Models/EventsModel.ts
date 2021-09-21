import { EventModel } from '../Schemas/Schemas';

export const findEvents = async () => {
    const res = await EventModel.find({});
    return res;
};

export const addEvent = async ({
    eventName,
    organiser,
    endDate,
    restaurantList,
}: any) => {
    console.log(restaurantList, '<<< restaurantList in addEvent');

    const newEvent = {
        eventName,
        organiser,
        endDate,
        restaurantList,
    };
    const res = await new EventModel(newEvent).save();
    return res;
};

export const findEventByName = async (eventName: string) => {
    const formattedEventName = eventName.replace('+', ' ');
    const res = await EventModel.find({ eventName: formattedEventName });
    return res;
};

export const findEventById = async (eventId: string) => {
    const res = await EventModel.find({ eventId: eventId });
    return res;
};

export const updateEventByName = async (eventName: string, updateBody: any) => {
    let res;
    const formattedEventName = eventName.replace('+', ' ');

    if (Object.prototype.hasOwnProperty.call(updateBody, 'restaurantVotes')) {
        // loop through updateBody (restaurantVotes) and update votes at given id
        // res = await EventModel.updateOne(
        //     { eventName: formattedEventName },
        //     updateBody
        // );
    } else {
        // update events properties as normal
        res = await EventModel.updateOne(
            { eventName: formattedEventName },
            updateBody
        );
    }

    return res;
};

//GET EVENT BY EVENT ID
