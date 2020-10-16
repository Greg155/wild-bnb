const createCard = ( 
    div, 
    title = "Untitled Place", 
    imageUrl = "https://source.unsplash.com/random",
    desc = " "
) => {
    // console.log("hello card")

    {/* <div class="card">
        <div class="card-header">
            <div class="card-header">
            </div>
        </div>
        <div class="card-body">
            <h3 class="card-title">Modern flat in Milano</h3>
            <p class="card-description">This descthe perfect flat to chill in Milano for you</p>
        </div>
    </div> */}


                    // Card Preparation

    // 1 - The Card
    const card = document.createElement("div")
    card.classList.add("card")


        // 2 - Add Header to Card
    const cardHeader = document.createElement("div")
    cardHeader.classList.add("card-header")
    card.appendChild(cardHeader)

            // 3 - Display image in header
    const cardImg = document.createElement("div")
    cardImg.classList.add("card-img");
    cardImg.style.backgroundImage = `url(${imageUrl})`
    cardHeader.appendChild(cardImg)

        // 5 - Create a body card and insert it in the Card

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody)

             // 6 - Insert a title in the body

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title")
    cardTitle.innerHTML = title
    cardBody.appendChild(cardTitle);

             // 7 – Insert a text within the body

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description")
    cardDescription.innerHTML = desc
    cardBody.appendChild(cardDescription);


            // Now, the card is ready, insert the card in the target div
    div.appendChild(card)
}

export default createCard