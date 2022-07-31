import Phaser from "phaser";
import { getZapp } from "@/modules/helpers";

export default class Coin extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, texture = "coin", size = 10 } = data;
    super(scene.matter.world, x, y, texture);
    this.scene.add.existing(this);

    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    var coinSensor = Bodies.circle(this.x, this.y, size, { isSensor: true, label: 'coinSensor' });
    const compoundBody = Body.create({
      isStatic: true,
      parts: [coinSensor],
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();
  }

  static preload(scene) {
    scene.load.image("coin", getZapp("img/game/coin.png"));
  }
}