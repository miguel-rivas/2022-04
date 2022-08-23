<template>
  <navbar title="Pixel Perfect Tree" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "pixelpt-404",
        caption: "Error 404",
      },
      {
        route: "pixelpt-500",
        caption: "Error 500",
      },
    ],
  }),
});
</script>