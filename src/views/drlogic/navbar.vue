<template>
  <navbar title="DrLogic" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "drlogic-home",
        caption: "Home",
      },
      {
        route: "drlogic-team",
        caption: "Team",
      },
      {
        route: "drlogic-testimonials",
        caption: "Testimonials",
      },
      {
        route: "drlogic-services",
        caption: "Services",
      },
      {
        route: "drlogic-support",
        caption: "Support",
      },
      {
        route: "drlogic-contact",
        caption: "Contact",
      },
      {
        route: "drlogic-404",
        caption: "Error 404",
      },
    ],
  }),
});
</script>