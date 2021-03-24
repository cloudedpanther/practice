const body = document.querySelector("body"),
    hero = body.querySelector(".hero"),
    buttonContainer = body.querySelector(".button-container"),
    left = buttonContainer.querySelector(".left"),
    right = buttonContainer.querySelector(".right"),
    up = buttonContainer.querySelector(".up"),
    down = buttonContainer.querySelector(".down");

const moveToLeft = () => {
    const xIndex = hero.style.left;

    hero.classList.add("animation__move-left");
    setTimeout(function() {
        hero.style.left = `${parseInt(xIndex) - 100}px`; 
        hero.classList.remove("animation__move-left");
    }, 100);
}
const moveToRight = () => {
    const xIndex = hero.style.left;

    hero.classList.add("animation__move-right");
    setTimeout(function() {
        hero.style.left = `${parseInt(xIndex) + 100}px`; 
        hero.classList.remove("animation__move-right");
    }, 100);
}
const moveToUpside = () => {
    const yIndex = hero.style.top;

    hero.classList.add("animation__move-up");
    setTimeout(function() {
        hero.style.top = `${parseInt(yIndex) - 100}px`; 
        hero.classList.remove("animation__move-up");
    }, 100);
}
const moveToDownside = () => {
    const yIndex = hero.style.top;

    hero.classList.add("animation__move-down");
    setTimeout(function() {
        hero.style.top = `${parseInt(yIndex) + 100}px`; 
        hero.classList.remove("animation__move-down");
    }, 100);
}

const handleKeys = (e) => {
    if(e.key === "ArrowRight") {
        moveToRight();
    }
    else if(e.key === "ArrowLeft") {
        moveToLeft();
    }
    else if(e.key === "ArrowUp") {
        moveToUpside();
    }
    else if(e.key === "ArrowDown") {
        moveToDownside();
    }
}

const init = () => {
    hero.style.left = "30px";
    hero.style.top = "100px";
    document.addEventListener("keydown", handleKeys);
    left.addEventListener("click", moveToLeft);
    right.addEventListener("click", moveToRight);
    up.addEventListener("click", moveToUpside);
    down.addEventListener("click", moveToDownside);
}

init();