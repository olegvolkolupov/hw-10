let bodyRef = document.querySelector('body');
let startBtn = document.querySelector('button[data-action="start"]');
let stopBtn = document.querySelector('button[data-action="stop"]');

const colors = ['red', 'green', 'violet', 'gray', 'blue', 'yellow'];
const lastColorIndex = colors.length - 1;
const intervalMs = 1000;
let timerID;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startTimer() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  timerID = setInterval(() => {
    let colorID = randomIntegerFromInterval(0, lastColorIndex);
    bodyRef.style.backgroundColor = colors[colorID];
  }, intervalMs);
}

function stopTimer() {
  clearInterval(timerID);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
stopBtn.setAttribute('disabled', true);
