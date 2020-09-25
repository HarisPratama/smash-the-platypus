let ground = document.querySelectorAll(".tanah");
let tikus = document.querySelectorAll(".tikus");
let score = document.querySelector(".score");

let groundB;
let end;
let point;

function rGround(ground) {
  let tRandom = Math.floor(Math.random() * ground.length);
  let groundR = ground[tRandom];
  if (groundR == groundB) {
    rGround(ground);
  }

  groundB = groundR;
  return groundR;
}

function rTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function appear() {
  let random = rGround(ground);
  let time = rTime(300, 800);
  random.classList.add("appear");

  setTimeout(() => {
    random.classList.remove("appear");
    if (!end) {
      appear();
    }
  }, time);
}

function start() {
  end = false;
  point = 0;
  score.textContent = 0;
  appear();
  setTimeout(() => {
    end = true;
  }, 10000);
}

function hit() {
  point++;
  this.parentNode.classList.remove("appear");
  score.textContent = point;
}

tikus.forEach((i) => {
  i.addEventListener("click", hit);
});
