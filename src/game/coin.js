import Phaser from "phaser";

export default class Coin extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y} = data;
    super(scene.matter.world, x, y, "coin", undefined);
    this.scene.add.existing(this);

    const {Body, Bodies} = Phaser.Physics.Matter.Matter;
    var coinSensor = Bodies.circle(this.x, this.y, 16,{isSensor: true, label: 'coinSensor'});
    const compoundBody = Body.create({
      parts: [coinSensor],
      friction: 0.35,
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();
  }

  static preload(scene) {
    scene.load.image("coin", "/img/svg/coin_pixel.svg");
  }
}