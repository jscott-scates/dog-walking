import { getWalkers, getCities } from "./database.js"

const cities = getCities()
document.addEventListener(
    "click",
    (cityClickEvent) => {
        const clickedTargetCity = cityClickEvent.target
        const walkerCity = clickedTargetCity.dataset.cityidforeignkey

        const allWalkers = getWalkers()
        for (const walker of allWalkers) {
            if(parseInt(walkerCity) === walker.cityId)
                window.alert(`This city is serviced by: ${walker.name}`)
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `
        <li data-cityidforeignkey="${city.id}">
            ${city.name}
        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

