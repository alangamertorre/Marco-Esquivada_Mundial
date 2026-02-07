// DOM principal
const marco = document.querySelector('.marco');
const game = document.querySelector('.game');
const contenedor = document.querySelector('.cajabotones');

const b1 = document.querySelector('.b1'); // ← corregido
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const fps = document.querySelector('.fps');
const b6 = document.querySelector('.b6');
//////////////////////////////////////////////////
// 🎮 B1 - FULLSCREEN
//////////////////////////////////////////////////

if (b1 && game) {
  b1.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      game.requestFullscreen().catch(err =>
        console.error("Fullscreen error:", err)
      );
    } else {
      document.exitFullscreen();
    }
  });
}

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    console.log("Exit fullscreen");
  }
});

//////////////////////////////////////////////////
// 🐞 B2 - BUG REPORT
//////////////////////////////////////////////////

if (b2){
  b2.addEventListener('click', () => {
    window.open('https://github.com/alangamertorre/Esquivada-Mundial/issues');
  });
}

//////////////////////////////////////////////////
// ℹ️ B3 - INFO
//////////////////////////////////////////////////

if (b3){
  b3.addEventListener('click', () => {
    window.open('https://alangamertorre.github.io/INFO.-Esquivada-Mundial/index.html');
  });
}

//////////////////////////////////////////////////
// 📊 B4 - DEBUG FPS
//////////////////////////////////////////////////

if (fps && b4){

let lastTime = performance.now();
let fpsValue = 0;
let mostrarFPS = false;
const smoothing = 0.9;

function loop(now){
  const delta = now - lastTime;

  if (delta > 0){
    const current = 1000 / delta;
    fpsValue = fpsValue * smoothing + current * (1 - smoothing);
  }

  lastTime = now;

  if (mostrarFPS){
    fps.textContent = Math.round(fpsValue) + " FPS";
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

fps.style.display = "none";

b4.addEventListener("click", () => {
  mostrarFPS = !mostrarFPS;
  fps.style.display = mostrarFPS ? "block" : "none";
});

}

//////////////////////////////////////////////////
// 🚀 B5 - JUEGO
//////////////////////////////////////////////////

if (b5){
  b5.addEventListener('click', () => {
    window.open('https://alangamertorre.github.io/Esquivada-Mundial/');
  });
}

/////////////////////////////////////////////////
// B6 - CREDITOS
/////////////////////////////////////////////////

if (b6) {
  b6.addEventListener('click', () => {
    window.open('Créditos\\index.html')
  })
}



