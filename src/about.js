const createAbout = () => {
    const container = document.querySelector(`#content`);
    container.innerHTML = ``;

    const aboutCard = document.createElement(`div`);
    aboutCard.classList.add(`about-card`);
    container.appendChild(aboutCard);

    const aboutChef = document.createElement(`div`);
    aboutChef.classList.add(`about-chef`);
    aboutCard.appendChild(aboutChef);

    const aboutImg = document.createElement(`img`);
    aboutImg.src = `./images/food/cat.jpg`;
    aboutChef.appendChild(aboutImg)

    const catText = document.createElement(`p`);
    catText.innerText = 'Fresh ingredients are the key to a purrfect meal!'
    aboutChef.appendChild(catText);

}

export default createAbout