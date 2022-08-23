<template>
  <navbar title="Formability" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "formability-demo",
        caption: "Demo",
      },
      {
        route: "formability-401",
        caption: "Error 401",
      },
      {
        route: "formability-404",
        caption: "Error 404",
      },
      {
        route: "formability-500",
        caption: "Error 500",
      },
    ],
  }),
});
</script>