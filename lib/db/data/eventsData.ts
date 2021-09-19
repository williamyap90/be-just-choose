export const eventsData = [
    {
        eventName: 'Fat Friday!',
        eventURL: 'http://just-choose.com/event/12345',
        dateCreated: '01/09/2021 17:30',
        organiser: 'brayanbergnaum@test-jc.com',
        isDraft: false,
        endDate: '10/09/2021 11:00',
        winningRestaurant: {
            restaurantName: 'Trove Cafe + Bakery',
            categories: ['Bakeries', 'Cafes'],
            displayAddress: [
                '1032 Stockport Road',
                'Levenshulme',
                'Manchester M19 3WX',
                'United Kingdom',
            ],
            coordinates: { latitude: 53.441223, longitude: -2.189375 },
            phoneNo: '+44 161 432 7184',
            rating: 4.5,
            price: '£',
            reviewCount: 20,
            imageUrl:
                'https://s3-media1.fl.yelpcdn.com/bphoto/MSYzaWFPjYmnYtQQoctaag/o.jpg',
            url: 'https://www.yelp.com/biz/trove-cafe-bakery-manchester?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
        },
        voters: [
            // Array of voter emails (unique) or user Object.ids?
            'rosaleekunde@test-jc.com',
            'brianzboncak@test-jc.com',
            'dorthydietrich@test-jc.com',
        ],
        restaurantList: [
            // Array of restaurant objects with all of restaurants information?
            // or restaurant name?
            // or create restaurant documents when shortlisted & store Object.ids?
        ],
    },
];
