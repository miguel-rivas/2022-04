<template lang="pug">
nn-scroll-area(color="royal-purple", :horizontal="false")
  gallery(:db="projectsDB")
</template>

<script>
import Vue from "vue";
import Gallery from "@/components/gallery.vue";
import { client } from "@/enums/clients";
import { allDBListVisible } from "@/modules/format-db";

export default Vue.extend({
  components: {
    Gallery,
  },
  data: () => ({
    panel: false,
    selection: {
      filterData: undefined,
    },
  }),
  computed: {
    projectsDB() {
      let db = allDBListVisible;

      let result = db;
      switch (this.selection.filterData) {
        case "experiments":
          result = db.filter(
            (item) =>
              item.client.includes(client.miguelRivas) ||
              item.client.includes(client.itla) ||
              item.client.includes(client.itesa) ||
              item.client.includes(client.codepen)
          );
          break;
        case "companies":
          result = db.filter(
            (item) =>
              item.filter.includes("company") ||
              !item.client.includes(client.miguelRivas) &&
              !item.client.includes(client.itla) &&
              !item.client.includes(client.itesa) &&
              !item.client.includes(client.codepen)
          );
          break;
        case "homework":
          result = db.filter(
            (item) =>
              !item.disabled &&
              (item.client.includes(client.itla) ||
                item.client.includes(client.itesa))
          );
          break;
      }
      return result;
    },
  },
  created() {
    this.selection = this.$store.getters.getFilterData;
  },
});
</script>