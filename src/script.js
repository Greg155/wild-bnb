console.log("Hello World");
import houseToRent from "./houseToRent"

import createCards from "./createCards"

console.log(houseToRent)

const cards = document.querySelector(".cards")

const searchInput = document.querySelector(".search-input")
const selector = document.querySelector(".select")
const availableCheckbox = document.querySelector(".available-checkbox");

const render = ( housseList ) => {
    // Whatever is the array passed trough the house list argument, this function
    // will generate a card for each element of this array
    cards.innerHTML = ""; // Let's clear the content of the cards div, in case there are previous results
    housseList.forEach(house => {
        createCards(cards, house.name, house.img, house.desc )
    });
}

// Let's add an event listener on this input
searchInput.addEventListener("input", (event) => {
  // Let's filter our list according to the new value typed in input
  let filterdListing = houseToRent.filter(house => house.name.includes(event.target.value))

  // And we render again. Remember, within render, we will clear the content, and recreate a card for each
  // housses of the listing given as argument.
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

// The function is called with a complete list of renting on the first loading of this script.
render(houseToRent);