<template>
  <navbar title="Presidente" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "presidente-carnaval-filter",
        caption: "Carnaval Filter",
      },
      {
        route: "presidente-carnaval-home",
        caption: "Carnaval 2015",
      },
      {
        route: "presidente-verano-loader",
        caption: "Verano 2015 Loader",
      },
      {
        route: "presidente-verano-filter",
        caption: "Verano 2015 Filter",
      },
      {
        route: "presidente-destapa",
        caption: "Destapa el Coro",
      },
    ],
  }),
});
</script>