import { EventModel } from '../Schemas/Schemas';

export const findEvents = async () => {
    const res = await EventModel.find({});
    return res;
};

export const findEventsByOrganiser = async (organiser:string) => {
    const res = await EventModel.find({organiser : organiser});
    

    return res;
}

export const addEvent = async ({
    eventName,
    organiser,
    endDate,
    restaurantList,
}: any) => {
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
    const res = await EventModel.find({ _id: eventId });
    return res;
};

export const updateEventByName = async (eventName: string, updateBody: any) => {
    let res;
    const formattedEventName = eventName.replace('+', ' ');

    if (Object.prototype.hasOwnProperty.call(updateBody, 'restaurantVotes')) {
        // GET request to find current event
        const getEvent = await EventModel.find({
            eventName: formattedEventName,
        });

        // Assign result of GET to a variable
        const currentEvent: any = getEvent[0];

        updateBody.restaurantVotes.forEach((currentResVotes: any) => {
            currentEvent.restaurantList.forEach((restaurant: any) => {
                if (
                    restaurant.restaurantName ===
                        currentResVotes.restaurantName &&
                    currentResVotes.voteType === 'up'
                ) {
                    restaurant.upvotes++;
                }
            });
        });
        const newRestaurantList: any = [...currentEvent.restaurantList];

        res = await EventModel.updateOne(
            {
                eventName: formattedEventName,
            },
            { restaurantList: newRestaurantList }
        );
        return res;
    } else {
        // update events properties as normal
        res = await EventModel.updateOne(
            { eventName: formattedEventName },
            updateBody
        );
        return res;
    }
};

//GET EVENT BY EVENT ID
