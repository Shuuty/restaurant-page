const createHome = () => {
    const container = document.querySelector(`#content`);
    container.innerHTML = ``;


    const homeCard = document.createElement(`div`);
    container.appendChild(homeCard);

    const homeText = document.createElement(`p`);
    homeText.innerText = `In the heart of our city, lies the most prominent fictional restaurant, a place where flavors intertwine to create unforgettable culinary experiences. With a welcoming atmosphere and exceptional service, our establishment has earned a reputation for offering the best in fictional dining.
    Our menu is an ode to creativity and exquisiteness, carefully designed to satisfy even the most demanding palates. From tantalizing starters to main courses that will transport you to distant lands of flavor and delight, every bite is a celebration of imaginative cuisine. 
    Every detail in our restaurant is carefully considered to provide you with a unique experience. From the presentation of dishes to the selection of fresh, high-quality ingredients, we strive to exceed your expectations with each visit. 
    So, if you're looking for a place to enjoy exceptional food in a charming atmosphere, you've come to the right place! We invite you to explore our extensive menu and let your senses be swept away by our delicious creations. Welcome to an unforgettable dining experience at the best fictional restaurant in the world!`;
    homeCard.appendChild(homeText);

}

createHome();

export default createHome;