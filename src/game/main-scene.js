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
    this.load.image("tile", "/img/tile.png");
  },
  init() {
    this.cameras.main.setBackgroundColor("#eee");
  },
  create() {
    this.add.image(400, 200, "tile");

    this.player = new Player({
      scene: this,
      x: 100,
      y: 100,
      texture: "goose",
      frame: 0,
    });
    
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      down: Phaser.Input.Keyboard.KeyCodes.S,
    });

    Player.create(this);
    Duckling.create(this);

    this.coin = new Coin({
      scene: this,
      x: 10,
      y: 10,
      texture: "coin",
    });

    this.duck = new Duckling({
      scene: this,
      x: 150,
      y: 100,
      texture: "duck",
      frame: 0,
    });

    this.kiwi = new Duckling({
      scene: this,
      x: 200,
      y: 100,
      texture: "kiwi",
      frame: 0,
    });

    this.phoenix = new Duckling({
      scene: this,
      x: 250,
      y: 100,
      texture: "phoenix",
      frame: 0,
    });

    this.chicken = new Duckling({
      scene: this,
      x: 300,
      y: 100,
      texture: "chicken",
      frame: 0,
    });

     this.quail = new Duckling({
      scene: this,
      x: 350,
      y: 100,
      texture: "quail",
      frame: 0,
    });

    this.player.play("goose_walk");

    // this.add.image(100, 200, "goose_coin");
    // this.add.image(50, 50, "coin");
    // this.add.image(200, 300, "brick");
    // this.add.image(300, 300, "brick_2");
  },
  update() {
    this.player.update();
  },
};