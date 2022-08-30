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