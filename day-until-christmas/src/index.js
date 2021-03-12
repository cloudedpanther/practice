import "./styles.css";

const timer = document.querySelector(".js-timer");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const daysLeft = xmasDay - today;

  const TIMER_DAYS = Math.floor(daysLeft / 86400000);
  const TIMER_HOURS = Math.floor((daysLeft % 86400000) / 3600000);
  const TIMER_MINUTES = Math.floor(((daysLeft % 86400000) % 3600000) / 60000);
  const TIMER_SECONDS = Math.floor(
    (((daysLeft % 86400000) % 3600000) % 60000) / 1000
  );

  const timerText = `${TIMER_DAYS}d 
  ${TIMER_HOURS < 10 ? `0${TIMER_HOURS}` : TIMER_HOURS}h 
  ${TIMER_MINUTES < 10 ? `0${TIMER_MINUTES}` : TIMER_MINUTES}m 
  ${TIMER_SECONDS < 10 ? `0${TIMER_SECONDS}` : TIMER_SECONDS}s`;

  timer.innerHTML = timerText;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
