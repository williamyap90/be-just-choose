import { model, Schema } from 'mongoose';

interface IEvent {
    eventName: string;
    eventURL: string;
    dateCreated: Date;
    organiser: string;
    restaurantList: Array<Object>;
    isDraft: boolean;
    voters: Array<Object>;
    winningRestaurant: Object;
    endDate: Date;
}

interface IEventDocument extends IEvent, Document {}

const EventSchemaFields: Record<keyof IEvent, any> = {
    eventName: {
        type: String,
        required: true,
    },
    eventURL: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    organiser: {
        type: String,
    },
    restaurantList: {
        type: [{ restaurantName: Object, cuisine: String, priceRange: String }],
    },
    isDraft: {
        type: Boolean,
    },
    voters: {
        type: [String],
    },
    winningRestaurant: {
        type: Object,
    },
    endDate: {
        type: Date,
    },
};

const EventSchema = new Schema(EventSchemaFields);
const Event = model<IEventDocument>('Event', EventSchema);

export { Event, IEvent };
