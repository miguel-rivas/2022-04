<template>
  <navbar title="Miguel Rivas" :links="links" />
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "map",
        caption: "Home",
      },
      {
        route: "2022-projects",
        caption: "Projects",
      },
      {
        route: "2022-videos",
        caption: "Videos",
      },
      {
        route: "2022-images",
        caption: "Gallery",
      },
      {
        route: "2022-statistics",
        caption: "Statistics",
      },
      {
        route: "2022-resume",
        caption: "Resume",
      },
    ],
  }),
});
</script>