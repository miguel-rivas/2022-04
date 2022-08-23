<template>
  <navbar title="CSS Animation" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "window",
        caption: "Window",
      },
      {
        route: "pills",
        caption: "Pills",
      },
      {
        route: "minivan",
        caption: "Minivan",
      },
      {
        route: "house",
        caption: "House",
      },
    ],
  }),
});
</script>