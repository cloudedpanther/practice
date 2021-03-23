const body = document.querySelector("body"),
    hero = body.querySelector(".hero"),
    buttonContainer = body.querySelector(".button-container"),
    left = buttonContainer.querySelector(".left"),
    right = buttonContainer.querySelector(".right");


// maybe use time function?
const moveToLeft = () => {
    const xIndex = hero.style.left;
    hero.style.left = `${parseInt(xIndex) - 100}px`; 
}
const moveToRight = () => {
    const xIndex = hero.style.left;
    hero.style.left = `${parseInt(xIndex) + 100}px`; 

}

const init = () => {
    hero.style.left = "30px";
    hero.style.top = "100px";
    left.addEventListener("click", moveToLeft);
    right.addEventListener("click", moveToRight);
}

init();