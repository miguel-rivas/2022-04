import Phaser from "phaser";
import Player from "../game/player";
import Coin from "../game/coin";
import Duckling from "../game/duckling";

export default {
  preload() {
    Player.preload(this);
    Coin.preload(this);
    Duckling.preload(this);

    this.load.image("goose_coin", "/img/coin_goose.png");
    this.load.image("tiles", "/img/nature.png");
    this.load.tilemapTiledJSON('map', "/img/map.json");
  },
  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('nature_tileset', 'tiles', 32, 32, 0, 0);
    const layers = [
      map.createLayer('sea', tileset, 0, 0),
      map.createLayer('ground', tileset, 0, 0),
      map.createLayer('top_ground', tileset, 0, 0),
      map.createLayer('bridges', tileset, 0, 0),
    ];

    layers.forEach(
      item => {
        item.setCollisionByProperty({ collides: true });
        this.matter.world.convertTilemapLayer(item);
      }
    )

    Player.create(this);
    Duckling.create(this);

    this.coins = [
      new Coin({
        scene: this,
        x: 800,
        y: 1800,
        texture: "goose_coin",
        size: 30,
      }),
      new Coin({
        scene: this,
        x: 1000,
        y: 1500,
      }),

      new Coin({
        scene: this,
        x: 1500,
        y: 1000,
      }),

      new Coin({
        scene: this,
        x: 800,
        y: 800,
      }),

      new Coin({
        scene: this,
        x: 100,
        y: 100,
      }),

      new Coin({
        scene: this,
        x: 1000,
        y: 100,
      }),
    ];

    this.ducklings = {
      duck: new Duckling({
        scene: this,
        x: 430,
        y: 230,
        texture: "duck",
        frame: 0,
      }),
      kiwi: new Duckling({
        scene: this,
        x: 1600,
        y: 1220,
        texture: "kiwi",
        frame: 0,
      }),
      phoenix: new Duckling({
        scene: this,
        x: 150,
        y: 1700,
        texture: "phoenix",
        frame: 0,
      }),
      raven: new Duckling({
        scene: this,
        x: 1900,
        y: 700,
        texture: "raven",
        frame: 0,
      }),
      quail: new Duckling({
        scene: this,
        x: 1420,
        y: 1860,
        texture: "quail",
        frame: 0,
      }),
    };

    this.goose = new Player({
      scene: this,
      x: 1180,
      y: 1080,
      texture: "goose",
      frame: 0,
    });

    this.goose.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      down: Phaser.Input.Keyboard.KeyCodes.S,
    });

    this.goose.setMass(500);
    this.lastDuckling = this.goose;
    this.goose.followers = [];

    Object.values(this.ducklings).forEach((item, index) => {
      item.setMass(0.1);
    });

    this.matter.world.on('collisionstart', (event) => {
      const bodyA = event.source.pairs.list[0].bodyA.gameObject;
      const bodyB = event.source.pairs.list[0].bodyB.gameObject;
      if (bodyA instanceof Duckling && !this.goose.followers.includes(bodyA)) {
        // add current duckling to the group of the player's followers so it move according to the player's direction
        this.goose.followers.push(bodyA);
        // follow the last duckling added
        this.matter.add.joint(this.lastDuckling, bodyA, this.lastDuckling.width, 0.4);
        bodyA.play(`${bodyA.texture.key}_walk`, true);
        this.lastDuckling = bodyA;
      }

      if (bodyA instanceof Coin) {
        bodyA.destroy();
      } else if (bodyB instanceof Coin) {
        bodyB.destroy();
      }

    });

    this.matter.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBackgroundColor("#eee");
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.goose);

  },
  update() {
    this.goose.update();
  },
};