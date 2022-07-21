<template>
  <ion-phaser v-bind:game.prop="game" v-bind:initialize.prop="initialize" />
</template>

<script>
import Vue from "vue";
import Phaser from "phaser";
import Player from "../modules/game-player";

const mainScene = {
  preload() {
    Player.preload(this)
  },
  
  init() {
    this.cameras.main.setBackgroundColor("#222");
  },
  create() {
    this.player = new Player({scene: this, x:0, y:0, texture: undefined, frame: undefined });
    // this.player = this.add.sprite(32, this.matter.world.height - 150, 'goose');
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    // this.player.body.gravityScale.y = 2;
    // console.log(this.player)
    // this.player.body.bounce.y = 0.2;
    // this.player.body.colliderWorldBounds = true;
  },
  update() {
    this.player.update();
  },
};

export default Vue.extend({
  data: () => ({
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: [mainScene],
      scale: {
        zoom: 2,
      },
      physics: {
        default: "matter",
        matter: {
          debug: true,
          gravity: { y: 0 },
        },
      },
      // plugins: {
      //   scene: [
      //     {
      //       plugin: PhaserMatterCollisionPlugin,
      //       key: 'matterCollision',
      //       mapping: 'matterCollision',
      //     }
      //   ]
      // }
    },
  }),
  methods: {},
});
</script>
