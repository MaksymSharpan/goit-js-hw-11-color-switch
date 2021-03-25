const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const btnStart = document.querySelector('[data-action = start]');
const btnStop = document.querySelector('[data-action = stop]');

const FIRST_ELEM = 0;
const LAST_ELEM = colors.indexOf(colors[colors.length - 1]);
let timerId = null;

btnStart.classList.add('disabled');
btnStop.classList.add('enabled');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//_________________________________________________________________
btnStart.addEventListener('click', startRocket);
btnStop.addEventListener('click', stopMachine);

//запускаем
function startRocket() {
  btnStart.removeEventListener('click', startRocket);

  btnStart.classList.remove('disabled');
  btnStart.classList.add('enabled');
  btnStop.classList.remove('enabled');
  btnStop.classList.add('disabled');

  timerId = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(FIRST_ELEM, LAST_ELEM)];
    console.log('work');
  }, 700);
}

// останавливаем
function stopMachine() {
  clearInterval(timerId);
  btnStop.classList.add('enabled');
  btnStop.classList.remove('disabled');
  btnStart.classList.add('disabled');
  btnStart.classList.remove('enabled');

  btnStart.addEventListener('click', startRocket);
}
