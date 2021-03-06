"use strict";
const restaurants = [
    {
        id: 's_r-YRXFR9kADAmFsyZDfQ',
        alias: 'trove-cafe-bakery-manchester',
        name: 'Trove Cafe + Bakery',
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/MSYzaWFPjYmnYtQQoctaag/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/trove-cafe-bakery-manchester?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
        review_count: 20,
        categories: [
            {
                alias: 'bakeries',
                title: 'Bakeries',
            },
            {
                alias: 'cafes',
                title: 'Cafes',
            },
        ],
        rating: 4.5,
        coordinates: {
            latitude: 53.441223,
            longitude: -2.189375,
        },
        transactions: [],
        price: '£',
        location: {
            address1: '1032 Stockport Road',
            address2: '',
            address3: 'Levenshulme',
            city: 'Manchester',
            zip_code: 'M19 3WX',
            country: 'GB',
            state: 'XGM',
            display_address: [
                '1032 Stockport Road',
                'Levenshulme',
                'Manchester M19 3WX',
                'United Kingdom',
            ],
        },
        phone: '+441614327184',
        display_phone: '+44 161 432 7184',
        distance: 1142.0908772686444,
    },
    {
        id: 'FobtC14BSl4D3LLUBwfPoA',
        alias: 'the-magnet-freehouse-stockport',
        name: 'The Magnet Freehouse',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/jWjO2gAASni4POjxz0BTTA/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/the-magnet-freehouse-stockport?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
        review_count: 9,
        categories: [
            {
                alias: 'pubs',
                title: 'Pubs',
            },
        ],
        rating: 4.5,
        coordinates: {
            latitude: 53.4157383633383,
            longitude: -2.16892495847961,
        },
        transactions: [],
        price: '£',
        location: {
            address1: '51 Wellington Road N',
            address2: '',
            address3: '',
            city: 'Stockport',
            zip_code: 'SK4 1HJ',
            country: 'GB',
            state: 'XGM',
            display_address: [
                '51 Wellington Road N',
                'Stockport SK4 1HJ',
                'United Kingdom',
            ],
        },
        phone: '+441614296287',
        display_phone: '+44 161 429 6287',
        distance: 2022.8053823195216,
    },
    {
        id: 'L-3nVL94gDf6acW_je_XEQ',
        alias: 'pokusevskis-delicatessen-and-cafe-stockport',
        name: 'Pokusevskis Delicatessen and Cafe',
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/phUORvPfcBEbgiwoGv4WlQ/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/pokusevskis-delicatessen-and-cafe-stockport?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
        review_count: 6,
        categories: [
            {
                alias: 'delis',
                title: 'Delis',
            },
            {
                alias: 'coffee',
                title: 'Coffee & Tea',
            },
        ],
        rating: 4,
        coordinates: {
            latitude: 53.4229065,
            longitude: -2.1846736,
        },
        transactions: [],
        price: '£',
        location: {
            address1: '13 Shaw Road',
            address2: '',
            address3: '',
            city: 'Stockport',
            zip_code: 'SK4 4AG',
            country: 'GB',
            state: 'XGM',
            display_address: [
                '13 Shaw Road',
                'Stockport SK4 4AG',
                'United Kingdom',
            ],
        },
        phone: '+441614421717',
        display_phone: '+44 161 442 1717',
        distance: 1142.3327795406137,
    },
    {
        id: 'eKgD-et4hkoy8RnZWia0zw',
        alias: 'nook-stockport',
        name: 'Nook',
        image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/KbkXF6yU9wGYw5dvdfnsVw/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/nook-stockport?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
        review_count: 4,
        categories: [
            {
                alias: 'coffee',
                title: 'Coffee & Tea',
            },
        ],
        rating: 4.5,
        coordinates: {
            latitude: 53.418372134504,
            longitude: -2.18845255781578,
        },
        transactions: [],
        price: '£',
        location: {
            address1: '111 Heaton Moor Road',
            address2: '',
            address3: '',
            city: 'Stockport',
            zip_code: 'SK4 4HY',
            country: 'GB',
            state: 'XGM',
            display_address: [
                '111 Heaton Moor Road',
                'Stockport SK4 4HY',
                'United Kingdom',
            ],
        },
        phone: '',
        display_phone: '',
        distance: 1710.8907855554376,
    },
    {
        id: 'uiCCFotgbb6rpuSMc33Yng',
        alias: 'juno-cafe-stockport',
        name: 'Juno Cafe',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/DRIe1I8Bvr5Pfq7sU2TKbA/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/juno-cafe-stockport?adjust_creative=NU9lAcDMMPSLSkTaTUlw-g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NU9lAcDMMPSLSkTaTUlw-g',
        review_count: 4,
        categories: [
            {
                alias: 'coffee',
                title: 'Coffee & Tea',
            },
            {
                alias: 'italian',
                title: 'Italian',
            },
            {
                alias: 'breakfast_brunch',
                title: 'Breakfast & Brunch',
            },
        ],
        rating: 4.5,
        coordinates: {
            latitude: 53.4173402,
            longitude: -2.1893312,
        },
        transactions: [],
        price: '£',
        location: {
            address1: '147 Heaton Moor Road',
            address2: 'Stockport',
            address3: '',
            city: 'Stockport',
            zip_code: 'SK4 4HY',
            country: 'GB',
            state: 'XGM',
            display_address: [
                '147 Heaton Moor Road',
                'Stockport',
                'Stockport SK4 4HY',
                'United Kingdom',
            ],
        },
        phone: '+441614422756',
        display_phone: '+44 161 442 2756',
        distance: 1838.7665400405172,
    },
];
const restaurantList = [];
restaurants.forEach((restaurant) => {
    const newRestaurant = {
        restaurantName: restaurant.name,
        categories: restaurant.categories.map((c) => c.title),
        displayAddress: restaurant.location.display_address,
        coordinates: restaurant.coordinates,
        phoneNo: restaurant.display_phone,
        rating: restaurant.rating,
        price: restaurant.price,
        reviewCount: restaurant.review_count,
        imageUrl: restaurant.image_url,
        url: restaurant.url,
    };
    restaurantList.push(newRestaurant);
});
console.log(restaurantList);
