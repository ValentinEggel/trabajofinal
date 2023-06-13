export default class Precarga extends Phaser.Scene {
  // escena para optimiozar tiempos
  // carga el preload solo una vez y sirve para todo el juego
  constructor() {
    // key of the scene
    super("precarga");
  }

  preload() {
    this.load.tilemapTiledJSON("map", "./public/tilemaps/nivel1.json");
    this.load.image("ruta", "./public/assets/ruta.png");
    this.load.image("cadete", "./public/assets/cadete.png");
    this.load.image("autorojo", "./public/assets/autorojo.png");
    this.load.image("autoamarillo", "./public/assets/autoamarillo.png");
    this.load.image("autoblanco", "./public/assets/autoblanco.png");
    this.load.image("autoverde", "./public/assets/autoverde.png");
    this.load.image("baranda", "./public/assets/baranda.png");
    this.load.image("explosion", "./public/assets/explosion.png");
  }

  create() {
    this.scene.start("nivel1");
  }
}
