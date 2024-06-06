import createHome from "./home.js";
import menu from "./menu.js"
import createAbout from "./about.js"


navEvents();

function navEvents() {
    const homeBtn = document.querySelector(`#home`);
    const menuBtn = document.querySelector(`#menu`);
    const aboutBtn = document.querySelector(`#about`);

    homeBtn.addEventListener(`click`, () =>{
        if(homeBtn.classList.contains(`active`)) return;
        setActiveButton(homeBtn)
        createHome()
    });
    menuBtn.addEventListener(`click`, () => {
        if(menuBtn.classList.contains(`active`)) return;
        setActiveButton(menuBtn)
        menu()
    });
    aboutBtn.addEventListener(`click`, () => {
        if(aboutBtn.classList.contains(`active`)) return;
        setActiveButton(aboutBtn)
        createAbout()
    });

}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(`button`);

    buttons.forEach((btn) => {
        if(btn !== button) {
            btn.classList.remove(`active`);
        }
    });
    button.classList.add(`active`);
}