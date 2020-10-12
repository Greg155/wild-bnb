console.log("Hello World");
import houseToRent from "./houseToRent"

import createCards from "./createCards"

console.log(houseToRent)

const cards = document.querySelector(".cards")

const searchInput = document.querySelector(".search-input")
const selector = document.querySelector(".select")
const availableCheckbox = document.querySelector(".available-checkbox");


const render = ( housseList ) => {
    cards.innerHTML = "";
    housseList.forEach(house => {
        console.log(house)
        createCards(cards, house.name, house.img, house.desc )
    });
}

render(houseToRent)
