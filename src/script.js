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
        createCards(cards, house.name, house.img, house.desc )
    });
}


searchInput.addEventListener("input", (event) => {
  let filterdListing = houseToRent.filter( house => house.name.includes(event.target.value))
  render(filterdListing);
});



selector.addEventListener("change", (event) => {
  if (event.target.value === "All") {
    render(houseToRent);
  } else {
    let filteredListing = houseToRent.filter(house => house.type === event.target.value )
    render(filteredListing);
  }
});


availableCheckbox.addEventListener("click", (event) => {
  if (event.target.checked) {
    let filteredListing = houseToRent.filter(house => house.available === true)
    render(filteredListing);
  } else {
    render(houseToRent);
  }
});

render(houseToRent)
