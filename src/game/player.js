import Phaser from "phaser";

export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);

    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    const playerCollider = Bodies.circle(this.x, this.y, 32, { isSensor: false, label: 'playerCollider' });
    const playerSensor = Bodies.circle(this.x, this.y, 38, { isSensor: true, label: 'playerSensor' });
    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
    });
    this.setExistingBody(compoundBody);
  }

  static preload(scene) {
    scene.load.spritesheet('goose', '/img/goose.svg', {
      frameHeight: 64,
      frameWidth: 64,
    });
  }

  static create(scene) {
    scene.anims.create({
      key: "goose_walk",
      frames: scene.anims.generateFrameNumbers("goose", {
        frames: [0, 1, 0, 2],
      }),
      frameRate: 16,
      repeat: -1,
    });

    scene.anims.create({
      key: "goose_idle",
      frames: scene.anims.generateFrameNumbers("goose", {
        frames: [0],
      }),
      frameRate: 1,
      repeat: 0,
    });
  }

  update() {
    const speed = 7;
    let playerVelocity = new Phaser.Math.Vector2();
    if (this.inputKeys.left.isDown) {
      this.setScale(1, 1);

      this.followers.forEach(item => {
        item.setScale(1, 1);
      })
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
      this.setScale(-1, 1);
      this.followers.forEach(item => {
        item.setScale(-1, 1);
      })
    }

    if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);
    this.setFixedRotation();

    if (Math.abs(this.body.velocity.x) > 0.1 || Math.abs(this.body.velocity.y) > 0.1) {
      this.play('goose_walk', true);
    } else {
      this.play('goose_idle', true);
    }
  }
}