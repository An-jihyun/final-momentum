const tomatoBtn = document.querySelector(".tomatoBtn");
const pomoDiv = document.querySelector("div.pomoWatchDiv");

function pomoToggle() {
  pomoDiv.classList.toggle("pomoWatchDivActive");
}

tomatoBtn.addEventListener("click", pomoToggle);

const lines = document.querySelector(".lines");

for (let i = 0; i < 30; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.transform = `rotate(${i * 6}deg)`;

  if (i % 5 == 0) {
    line.classList.add("thick");
  }

  lines.append(line);
}

const nums = document.querySelector(".num-container");

let left = 15;
let right = 45;

for (let i = 0; i < 6; i++) {
  const numBox = document.createElement("div");
  numBox.classList.add("num-box");
  numBox.style.transform = `rotate(${i * 30}deg)`;

  const spanLeft = document.createElement("span");
  const spanRight = document.createElement("span");

  const leftText = left - 5 * i;
  spanLeft.textContent = leftText < 0 ? 60 + leftText : leftText;
  spanRight.textContent = right - 5 * i;

  spanLeft.style.transform = `rotate(${-30 * i}deg)`;
  spanRight.style.transform = `rotate(${-30 * i}deg)`;

  numBox.append(spanLeft, spanRight);
  nums.append(numBox);
}

const fins = document.querySelector(".fins");
const endTime = 40;

for (let min = 0; min < endTime; min++) {
  for (let sec = 0; sec < 60; sec++) {
    const remainFin = document.createElement("div");
    remainFin.classList.add("fin");

    const deg = min * 6 + sec * 0.1;
    remainFin.style.transform = `rotate(${-deg}deg)`;

    fins.append(remainFin);
  }
}

const timerBtn = document.querySelector(".timerBtn");

function tickSec() {
  const lastFin = fins.lastChild;
  if (lastFin) {
    lastFin.remove();
  }
}

function play() {
  setInterval(tickSec, 1000);
}

timerBtn.addEventListener("click", play);
