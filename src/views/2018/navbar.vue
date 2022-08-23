<template>
  <navbar title="Portfolio 2018" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "2018-home",
        caption: "Home",
      },
      {
        route: "2018-drlogic",
        caption: "DrLogic",
      },
      {
        route: "2018-presidente",
        caption: "Cerveza Presidente",
      },
      {
        route: "2018-apap",
        caption: "APAP",
      },
      {
        route: "2018-bpr",
        caption: "BPR",
      },
    ],
  }),
});
</script>