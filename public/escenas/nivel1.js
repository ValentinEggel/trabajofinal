export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }
  create() {
    const map = this.make.tilemap({ key: "map" });
    const conjutoPatronRuta = map.addTilesetImage("ruta", "ruta");

    const fondoLayer = map.createLayer("fondo", conjutoPatronRuta, 0, 0);

    const pjObjectosLayer = map.getObjectLayer("pj");
    let spawnPoint = map.findObject("pj", (obj) => obj.name === "cadete");

    this.jugador = this.physics.add.sprite(
      spawnPoint.x,
      spawnPoint.y,
      "cadete"
    );
    this.jugador.setScale(0.2);
    this.jugador.body.allowGravity = false;
    this.jugador.setVelocityY(-300);
    // meta this.jugador.visible = false;

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.startFollow(this.jugador);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }
  update() {
    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-360);
      // this.jugador.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(360);
      // this.jugador.anims.play("right", true);
    }
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}