import Phaser from "phaser";

const ducklings = ['chicken', 'duck', 'kiwi', 'phoenix', 'quail'];

export default class Duckling extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);

    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    var ducklingSensor = Bodies.circle(this.x, this.y, 20, { isSensor: true, label: 'ducklingSensor' });
    const compoundBody = Body.create({
      parts: [ducklingSensor],
      friction: 0.35,
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();

    this.play(`${texture}_walk`);
  }

  static preload(scene) {
    ducklings.forEach(item => {
      scene.load.spritesheet(item, `/img/${item}.svg`, {
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
        frameRate: 8,
        repeat: -1,
      });

      scene.anims.create({
        key: `${item}_idle`,
        frames: scene.anims.generateFrameNumbers(item, {
          frames: [3],
        }),
        frameRate: 8,
        repeat: -1,
      });
    });
  }
}