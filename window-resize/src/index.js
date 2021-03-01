// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const mainScreen = document.querySelector("body");

function screenPainter(event) {
  if (window.innerWidth > 900) {
    mainScreen.style.backgroundColor = "yellow";
  } else if (window.innerWidth <= 900 && window.innerWidth >= 400) {
    mainScreen.style.backgroundColor = "purple";
  } else if (window.innerWidth < 400) {
    mainScreen.style.backgroundColor = "blue";
  }
}

function init() {
  window.addEventListener("resize", screenPainter);
}

init();
