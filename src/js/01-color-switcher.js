import '../css/common.css';
import '../css/color-switcher.css';
import '../css/button.css';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]')
}
refs.startBtn.addEventListener('click', handleStartColor);
refs.stopBtn.addEventListener('click', handleStopColor);
let intervalId = null;

function handleStartColor() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() =>
    document.body.style.background = getRandomHexColor(), 1000);
}
function handleStopColor() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}