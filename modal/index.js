const modal = document.querySelector(".js-modal-container"),
    modalMain = modal.querySelector(".js-modal-screen"),
    modalTopMenu = modalMain.querySelector(".js-modal-screen__top-menu"),
    hideBtn = modalTopMenu.querySelector(".js-modal-screen__close-btn"),
    showBtn = document.querySelector(".js-btn");

const body = document.querySelector("body");

function hideModal() {
    modal.classList.add("hidden");
}

function showModal() {
    modal.classList.remove("hidden");
}

function init() {
    showBtn.addEventListener("click", showModal);
    hideBtn.addEventListener("click", hideModal);
}

init();
