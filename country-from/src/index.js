// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

const COUNTRY_FROM = "country";

function handleSelect(event) {
  const selectedCountry = event.target.value;
  localStorage.setItem(COUNTRY_FROM, selectedCountry);
}

function loadCountry() {
  const country = localStorage.getItem(COUNTRY_FROM);
  if (country !== null) {
    const loadedCountry = select.querySelector(`option[value=${country}]`);
    loadedCountry.setAttribute("selected", "");
  }
  select.addEventListener("change", handleSelect);
}

function init() {
  loadCountry();
}

init();
