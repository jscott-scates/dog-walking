import { getPets, getWalkers,getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

//function to find the city the walker lives in
const findWalkerCity =(walker, cities) => {
    let walkerCity = null

    for (const city of cities) {
        if(city.id === walker.cityId){
            walkerCity = city
        }
    }
    return walkerCity
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentWalkerCity = findWalkerCity(currentPetWalker,cities)

            assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentWalkerCity.name}
            </li>`
        }
        assignmentHTML += "</ul>"

        return assignmentHTML
        
    }

    
