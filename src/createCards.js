const createCard = ( 
    div, 
    title = "Untitled Place", 
    imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    desc = " "
) => {
    console.log("hello card")
    // console.log(div, title, imageUrl, desc)

    // 1 - La carte
    const card = document.createElement("div")
    card.classList.add("card")


    // 2 - Insertion de la carte dans la div cible
    div.appendChild(card)
    console.log(div)

    // 3 - Add Header to Card
    const cardHeader = document.createElement("div")
    cardHeader.classList.add("card-header")
    card.appendChild(cardHeader)

    // 4 - Creation de l'image dans le Headers
    const cardImg = document.createElement("div")
    cardImg.classList.add("card-header");
    cardImg.style.backgroundImage = `url(${imageUrl})`
    cardHeader.appendChild(cardImg)

    // 5 - Creation du body

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody)

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title")
    cardTitle.innerHTML = title
    cardBody.appendChild(cardTitle);


    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description")
    cardDescription.innerHTML = desc
    cardBody.appendChild(cardDescription);

    








}

export default createCard