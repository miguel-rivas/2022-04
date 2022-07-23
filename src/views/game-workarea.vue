<template>
  <ion-phaser v-bind:game.prop="game" v-bind:initialize.prop="initialize" />
</template>

<script>
import Vue from "vue";
import Phaser from "phaser";
import mainScene from "../game/main-scene";

export default Vue.extend({
  data: () => ({
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: [mainScene],
      scale: {
        zoom: 1,
      },
      physics: {
        default: "matter",
        matter: {
          debug: false,
          gravity: { y: 0 },
        },
      },
      render: {
        pixelArt: true,
      },
    },
  }),
  methods: {},
});
</script>
