import Precarga from "./public/escenas/precarga.js";
import Nivel1 from "./public/escenas/nivel1.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 960,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 576,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },

  scene: [Precarga, Nivel1],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
