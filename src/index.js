import Game from "./game.js";



document.addEventListener("DOMContentLoaded", () => {
  //   const canvasEl = document.getElementById("canvas");
  //   canvasEl.width = Game.HORI;
  //   canvasEl.height = Game.VERT;

  //   const ctx = canvasEl.getContext("2d");
  const game = new Game();
  game.start()
  //   new GameView(game, ctx).start();
  // const img = new Image()
  // img.src = '/Users/dali/Desktop/App Academy Projects/WHAC-A-MOLE/grassygrass.png';
  // img.onload = () => {
  //     ctx.drawImage(img,0,0)
  // }
  game.setDifficulty()

});
