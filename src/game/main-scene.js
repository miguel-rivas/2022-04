import Phaser from "phaser";
import Player from "../game/player";
import Coin from "../game/coin";
import Duckling from "../game/duckling";

export default {
  preload() {
    Player.preload(this);
    Coin.preload(this);
    Duckling.preload(this);

    this.load.image("goose_coin", "/img/svg/coin_goose_pixel.svg");
    this.load.image("brick", "/img/svg/bricks_pixel.svg");
    this.load.image("brick_2", "/img/svg/bricks_2_pixel.svg");
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

    // layers.forEach(
    //   item => {
    //     item.setCollisionByProperty({ collides: true });
    //     this.matter.world.convertTilemapLayer(item);
    //   }
    // )

    Player.create(this);
    Duckling.create(this);

    // this.coin = new Coin({
    //   scene: this,
    //   x: 10,
    //   y: 10,
    //   texture: "coin",
    // });

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
      chicken: new Duckling({
        scene: this,
        x: 1900,
        y: 700,
        texture: "chicken",
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

    this.player = new Player({
      scene: this,
      x: 1180,
      y: 1080,
      texture: "goose",
      frame: 0,
    });

    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      down: Phaser.Input.Keyboard.KeyCodes.S,
    });

    this.player.setMass(1500);
    this.lastDuckling = this.player;
    this.player.followers = [];

    Object.values(this.ducklings).forEach((item, index) => {
      item.setMass(20);
      //   this.matter.add.joint(this.lastDuckling, item, 30, 0.9);
      //   item.play(`${item.texture.key}_walk`);
      //   this.lastDuckling = item;
    });



    this.matter.world.on('collisionstart', (event) => {
      const bodyA = event.source.pairs.list[0].bodyA.gameObject;
      // bodyA.body.parts[1] = undefined;
      if (bodyA instanceof Duckling) {
        this.player.followers.push(bodyA);
        this.matter.add.joint(this.lastDuckling, bodyA, this.lastDuckling.width, 0.5 - 0.1 * this.player.followers.length);

        bodyA.body.parts = [];

        // bodyA.body.parts[1].circleRadius = 16;
        // bodyA.body.parts[2].circleRadius = 3;
        // const ducklingCollider = Phaser.Physics.Matter.Matter.Bodies.circle(this.x, this.y, 16, { isSensor: false, label: 'ducklingCollider' });
        // const compoundBody = Phaser.Physics.Matter.Matter.Body.create({
        //   parts: [ducklingCollider],
        // });
        // bodyA.setExistingBody(compoundBody);
        bodyA.play(`${bodyA.texture.key}_walk`);
        this.lastDuckling = bodyA;
      }
    });

    // this.player.play("goose_walk");

    // this.add.image(100, 200, "goose_coin");
    // this.add.image(200, 300, "brick");
    // this.add.image(300, 300, "brick_2");

    this.coins = this.add.group({
      key: 'coin',
      repeat: 11,
      setXY: { x: 1000, y: 1000, stepX: 70 }
    });

    // this.coins.children.iterate(function (child) {
    //   // child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    // });
    // Phaser.Physics.Matter.Matter.World.add.overlap(this.player, this.coins, collectCoin, null, this);

    // function collectCoin(player, coin) {
    //   coin.disableBody(true, true);
    // }

    this.matter.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBackgroundColor("#eee");
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);

  },
  update() {
    this.player.update();
  },
};