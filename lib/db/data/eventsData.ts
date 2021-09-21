export const eventsData = [
    {
        eventName: 'Fat Friday!',
        eventURL: 'http://just-choose.com/event/12345',
        dateCreated: '01/09/2021 17:30',
        organiser: 'brayanbergnaum@test-jc.com',
        isDraft: false,
        endDate: '10/09/2021 11:00',
        winningRestaurant: {},
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
            {
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
            {
                restaurantName: 'The Magnet Freehouse',
                categories: ['Pubs'],
                displayAddress: [
                    '51 Wellington Road N',
                    'Stockport SK4 1HJ',
                    'United Kingdom',
                ],
                coordinates: {
                    latitude: 53.4157383633383,
                    longitude: -2.16892495847961,
                },
                phoneNo: '+44 161 429 6287',
                rating: 4.5,
                price: '£',
                reviewCount: 9,
                imageUrl:
                    'https://s3-media2.fl.yelpcdn.com/bphoto/jWjO2gAASni4POjxz0BTTA/o.jpg',
                url: 'https://www.yelp.com/biz/the-magnet-freehouse-stockport?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
            },
            {
                restaurantName: 'Pokusevskis Delicatessen and Cafe',
                categories: ['Delis', 'Coffee & Tea'],
                displayAddress: [
                    '13 Shaw Road',
                    'Stockport SK4 4AG',
                    'United Kingdom',
                ],
                coordinates: { latitude: 53.4229065, longitude: -2.1846736 },
                phoneNo: '+44 161 442 1717',
                rating: 4,
                price: '£',
                reviewCount: 6,
                imageUrl:
                    'https://s3-media3.fl.yelpcdn.com/bphoto/phUORvPfcBEbgiwoGv4WlQ/o.jpg',
                url: 'https://www.yelp.com/biz/pokusevskis-delicatessen-and-cafe-stockport?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
            },
        ],
    },
];
