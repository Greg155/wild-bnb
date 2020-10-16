console.log("Hello World");
import houseToRent from "./houseToRent"

import createCards from "./createCards"

console.log(houseToRent)

const cards = document.querySelector(".cards")

const searchInput = document.querySelector(".search-input")
const selector = document.querySelector(".select")
const availableCheckbox = document.querySelector(".available-checkbox");

const render = ( housseList ) => {
    // Whatever is the array passed housseList argument, this function
    // will generate a card for each element of this array
    cards.innerHTML = ""; // Lets clear the content of cards, in case there is previous results
    housseList.forEach(house => {
        createCards(cards, house.name, house.img, house.desc )
    });
}

// Let's add an event listener on this input
searchInput.addEventListener("input", (event) => {
  // lets filter our list according to new value typed in the input
  let filterdListing = houseToRent.filter(house => house.name.includes(event.target.value))
  // and we render again. Remember, within render, we will clear the content, and recreate a card for each
  // housses of the lsting given as argument.
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

// This function is executed, with the full list of rentings on the first loading of this script
render(houseToRent);