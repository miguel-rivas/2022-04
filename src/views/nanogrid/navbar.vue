<template>
  <navbar title="Nano Grid" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "nanogrid-home",
        caption: "Home",
      },
      {
        route: "nanogrid-documentation",
        caption: "Documentation",
      },
      {
        route: "nanogrid-tests",
        caption: "Tests",
      },
    ],
  }),
});
</script>