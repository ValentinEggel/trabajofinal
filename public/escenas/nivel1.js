export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
  }
  create() {
    const map = this.make.tilemap({ key: "map" });
    const conjutoPatronRuta = map.addTilesetImage("ruta", "ruta");
    const fondoLayer = map.createLayer("fondo", conjutoPatronRuta, 0, 0);
    const barandaLayer = map.addTilesetImage("baranda", "baranda");
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
    const autoLayer = map.getObjectLayer("auto1");
      this.autos=this.physics.add.group();
      autoLayer.objects.forEach((objData) => {
        const { x = 0, y = 0, name } = objData;
        switch(name){
          case "auto":{
            const auto = this.autos.create(
              x,
              y,
              "autorojo"
              ).setScale(0.3); 
              break;
          }
          case "autov":{
            const auto = this.autos.create(
              x,
              y,
              "autoverde"
              ).setScale(0.3); 
              break;
          }
        }
      });
    this.physics.add.collider(this.jugador,this.autos, function (jugador,autos)
      this.auto.destroy()
    )

      

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
