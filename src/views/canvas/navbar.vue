<template>
  <navbar title="Canvas" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "game",
        caption: "Game",
      },
      {
        route: "dollhouse",
        caption: "Doll House",
      },
      {
        route: "avatar",
        caption: "Avatar",
      },
      {
        route: "pixel",
        caption: "Pixel",
      },
      {
        route: "gear",
        caption: "Gear",
      },
      {
        route: "wheel",
        caption: "Wheel",
      },
      {
        route: "cube",
        caption: "Cube",
      },
      {
        route: "spirit",
        caption: "Spirit",
      },
      {
        route: "drakkar",
        caption: "Drakkar",
      },
      {
        route: "car",
        caption: "Car",
      },
      {
        route: "xwing",
        caption: "X-wing",
      },
      {
        route: "portfolio2017",
        caption: "Portfolio",
      },
      {
        route: "audio2",
        caption: "Audio 2",
      },
    ],
  }),
});
</script>