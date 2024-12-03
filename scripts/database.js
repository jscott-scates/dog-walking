/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    walkers: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        cityId: 2
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        cityId: 10
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        cityId: 8
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        cityId: 7
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        cityId: 1
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        cityId: 3
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        cityId: 9
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        cityId: 5
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        cityId: 4
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        cityId: 6
    }, {
        id: 14,
        name: "Amelia Anderson",
        email: "amelia@andersonfam.com",
        cityId: 7
    }],
    pets: [{
        id: 1,
        name: "Dianemarie Hartness",
        walkerId: 3
    }, {
        id: 2,
        name: "Christoph Fosdyke",
        walkerId: 10
    }, {
        id: 3,
        name: "Rocket",
        walkerId: 7
    }, {
        id: 4,
        name: "Ebony",
        walkerId: 3
    }, {
        id: 5,
        name: "Scotty",
        walkerId: 8
    }, {
        id: 6,
        name: "Mac",
        walkerId: 2
    }, {
        id: 7,
        name: "Oreo",
        walkerId: 5
    }, {
        id: 8,
        name: "Sassy",
        walkerId: 1
    }, {
        id: 9,
        name: "Salem",
        walkerId: 9
    }, {
        id: 10,
        name: "Panda",
        walkerId: 7
    }],
    cities: [{
        id: 1,
        name: "Boise"
    },{
        id: 2,
        name: "Chicago" 
    },{
        id: 3,
        name:"Denver"
    },{
        id: 4,
        name: "Minneapolis"
    },{
        id: 5,
        name: "Pheonix"
    },{
        id: 6,
        name: "Pittsburgh"
    },{
        id: 7,
        name: "San Diego"
    },{
        id: 8,
        name: "Sarasota"
    },{
        id: 9,
        name: "Tucson"
    },{
        id: 10,
        name: "White Plains"
    }]
}

export const getWalkers = () => {
    return database.walkers.map(walker => ({...walker}))
}

export const getPets = () => {
    return database.pets.map(pet => ({...pet}))
}

export const getCities = () => {
    return database.cities.map(cities => ({...cities}))
}