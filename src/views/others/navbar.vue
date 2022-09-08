<template>
  <navbar title="Other Apps" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "weather",
        caption: "Weather",
      },
      {
        route: "mineros",
        caption: "Mineros",
      },
      {
        route: "tetravex",
        caption: "Tetravex",
      },
      {
        route: "descubria",
        caption: "Descubria",
      },
      {
        route: "voxel",
        caption: "Voxel",
      },
      {
        route: "capital",
        caption: "Capital 401",
      },
      {
        route: "hello",
        caption: "Hello",
      },
      {
        route: "hello2",
        caption: "Hello 2",
      },
      {
        route: "journey",
        caption: "Journey",
      },
      {
        route: "css-study",
        caption: "CSS Study",
      },
      {
        route: "flat",
        caption: "FlatCSS",
      },
      {
        route: "evolution",
        caption: "Evolution",
      },
      {
        route: "stargazer",
        caption: "Stargazer",
      },
      {
        route: "html",
        caption: "HTML",
      },
      {
        route: "soundboard",
        caption: "Fake Audience",
      },
    ],
  }),
});
</script>