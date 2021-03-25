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
// bodyRef.classList.add('');
// bodyRef.classList.add('isActive');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//_________________________________________________________________
btnStart.addEventListener('click', startRocket);
btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  bodyRef.classList.remove('isActive');
  btnStart.addEventListener('click', startRocket);
});

function startRocket() {
  bodyRef.classList.add('isActive');
  if (bodyRef.classList.contains('isActive')) {
    btnStart.removeEventListener('click', startRocket);
  }

  timerId = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(FIRST_ELEM, LAST_ELEM)];
    console.log('work');
  }, 1000);
}
