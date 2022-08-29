<template>
  <navbar title="Popkern" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "popkern-icons",
        caption: "Icons",
      },
      {
        route: "popkern-colors",
        caption: "Colors",
      },
      {
        route: "popkern-links",
        caption: "Resources",
      },
    ],
  }),
});
</script>