export default class Goblin {
  constructor() {
    this.misses = 0;
    this.score = 0;
  }

  changePosition() {
    const position = [...document.querySelectorAll(".block")];
    let goblinPosition = 0;
    const missesCounter = document.querySelector(".misses");
    let interval = setInterval(() => {
      const random = Math.floor(Math.random() * position.length);
      if (random !== goblinPosition) {
        position[goblinPosition].classList.remove("goblin");
        position[random].classList.add("goblin");
        goblinPosition = random;
        this.misses += 1;
      }
      if (this.misses === 6) {
        position[random].classList.remove("goblin");
        alert("Конец игры! Вы промахнулись 5 раз");
        clearInterval(interval);
      }
    }, 1000);
  }

  gotCaught() {
    const container = document.querySelector(".container");
    const scoreCounter = document.querySelector(".score");
    container.addEventListener("click", (event) => {
      const e = event.target;
      if (e.className.includes("goblin")) {
        e.classList.remove("goblin");
        this.misses -= 1;
        this.score += 1;
        scoreCounter.innerText = `Количество попаданий: ${this.score}`;
      }
    });
  }
}
