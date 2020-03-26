
const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $199",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "$200 to $249",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "$250 to $279",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "$280 to $299",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "More than $300",
        "array": [300, 1500000]
    }
]



const brands = [
    {
        "_id": 1,
        "name": "Addidas"
    },
    {
        "_id": 2,
        "name": "Nike"
    },
    {
        "_id": 3,
        "name": "Levis"
    },
    {
        "_id": 4,
        "name": "Polo"
    },
    {
        "_id": 5,
        "name": "Zara"
    },
    {
        "_id": 6,
        "name": "Tommy Hilfiger"
    },
    {
        "_id": 7,
        "name": "Puma"
    },
    {
        "_id": 8,
        "name": "Apple"
    }
    ,
    // {
    //     "_id": 9,
    //     "name": "Calvin"
    // },
    {
        "_id": 10,
        "name": "Gucci"
    }
    // {
    //     "_id": 11,
    //     "name": "parada"
    // }
]


const discount = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "%0 to %5",
        "array": [0, 5]
    },
    {
        "_id": 2,
        "name": "%6 to %10",
        "array": [6, 10]
    },
    // {
    //     "_id": 3,
    //     "name": "$250 to $279",
    //     "array": [250, 279]
    // },
    // {
    //     "_id": 4,
    //     "name": "$280 to $299",
    //     "array": [280, 299]
    // },
    // {
    //     "_id": 5,
    //     "name": "More than $300",
    //     "array": [300, 1500000]
    // }
]

export {
    price,
    brands,
    discount
}