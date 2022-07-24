import Phaser from "phaser";
import { getZapp } from "../modules/helpers";

const ducklings = ['raven', 'duck', 'kiwi', 'phoenix', 'quail'];

export default class Duckling extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);

    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const ducklingCollider = Bodies.circle(this.x, this.y, 10, { isSensor: false, label: 'ducklingCollider' });
    const ducklingSensor = Bodies.circle(this.x, this.y, 10, { isSensor: true, label: 'ducklingSensor' });
    const compoundBody = Body.create({
      parts: [
        ducklingCollider,
        ducklingSensor],
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();
    this.play(`${texture}_idle`);
  }

  static preload(scene) {
    ducklings.forEach(item => {
      scene.load.spritesheet(item, getZapp(`img/game/${item}.png`), {
        frameHeight: 36,
        frameWidth: 36,
      });
    });
  }

  static create(scene) {
    ducklings.forEach(item => {
      scene.anims.create({
        key: `${item}_walk`,
        frames: scene.anims.generateFrameNumbers(item, {
          frames: [0, 1, 0, 2],
        }),
        frameRate: 16,
        repeat: -1,
      });

      scene.anims.create({
        key: `${item}_idle`,
        frames: scene.anims.generateFrameNumbers(item, {
          frames: [3],
        }),
        frameRate: 1,
        repeat: 0,
      });
    });
  }
}