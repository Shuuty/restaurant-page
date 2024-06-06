const menu = () =>{
    const container = document.querySelector(`#content`);
    container.innerHTML = "";

    createMenuItem(`empanadaMeat`, `Meat Empanada`, `Enter a world of tempting flavors at our beloved establishment, where tradition and passion for good food come together to create an unforgettable dining experience. Our meat empanada are the epitome of culinary excellence, a tribute to the rich gastronomic heritage of Latin America that will delight your senses from the first bite.
    Imagine a golden, crispy dough that melts in your mouth, revealing a juicy and flavorful filling of beef seasoned with the most exquisite spices, caramelized onions and green olives, all cooked with love and care to achieve gastronomic perfection. Each empanada is a masterpiece of flavor and texture, which will transport you to the most authentic corners of our culinary culture.` );
    createMenuItem(`empanadaCorn`, `Corn Empanada`, `Immerse yourself in a unique culinary experience in our charming gastronomic corner, where each bite is a tribute to the richness of Latin American cuisine. Let yourself be seduced by the authentic flavor of our corn empanada, a delicacy that celebrates tradition and the diversity of ingredients that make each dish a masterpiece.
    Imagine a tender, golden dough, carefully made with fresh corn flour, enveloping a generous filling of tender corn, mixed with chopped onion, red pepper and a pinch of spices that awaken the senses. Each bite is a festival of textures and flavors that will transport you to the golden fields of Latin America.`);
    createMenuItem(`empanadaChicken`, `Chicken empanada`, `In the heart of our cozy restaurant, a unique gastronomic experience awaits you: authentic Argentine chicken empanada, a culinary treasure that has conquered hearts around the world.
    Imagine a golden, crispy dough, delicately filled with juicy pieces of chicken seasoned with the finest spices, chopped onion and a touch of red pepper, all baked to perfection. Each empanada is a tribute to Argentine tradition and culinary art, passed down from generation to generation.  
    In our warm atmosphere, you can enjoy the company of friends and family while you savor these delicacies, accompanied by a selection of Argentine wines carefully chosen to enhance the flavors of each empanada. In addition, our personalized attention and passion for cooking will make you feel at home from the first moment.`);
    createMenuItem(`empanadaJyQ`, `Ham and cheese empanada`, `Welcome to a corner of delights where simplicity combines with exquisiteness to create an unforgettable dining experience. In our establishment, the ham and cheese expands are the undisputed star, a perfect fusion of classic flavors that will transport you on a journey of culinary pleasure from the first bite.
    Imagine a golden and delicately crispy dough, enveloping a generous filling of smoked ham and melted cheese, creating a harmony of flavors that will delight your taste buds. Each empanada is a work of culinary art, baked with care to ensure a perfect blend of textures and unmatched flavor.`);

    
};

function createMenuItem(nameToImg, foodName, description) {
    const container = document.querySelector(`#content`);

    const foodCard = document.createElement(`div`);
    foodCard.classList.add(`food-card`);
    container.appendChild(foodCard);

    const imgFood = document.createElement(`img`);
    imgFood.classList.add(`food-img`);
    imgFood.src = `./images/food/${nameToImg}.jpg`;
    foodCard.appendChild(imgFood);

    const foodInfo = document.createElement(`div`);
    foodInfo.classList.add(`food-info`);
    foodCard.appendChild(foodInfo);

    const infoTitle = document.createElement(`h2`);
    foodInfo.appendChild(infoTitle);
    infoTitle.innerText = `${foodName}`;

    const infoDescription = document.createElement(`p`);
    foodInfo.appendChild(infoDescription);
    foodInfo.innerText = `${description}`;
}

export default menu;