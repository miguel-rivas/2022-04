<template lang="pug">
nn-scroll-area(color="royal-purple", :horizontal="false")
  header.nano-header
    nn-container(size="900")
      h1 Filter Projects
      br
      nn-row
        nn-column(size="100%")
          select#search.nn-input(v-model="typeFilter")
            template(v-for="(option, optionIndex) in typeFilters")
              option(:value="option", :key="optionIndex") {{ option }}
  gallery(:db="projectsDB")
</template>

<script>
import Vue from "vue";
import Gallery from "@/components/gallery.vue";
import { client } from "@/enums/clients";
import { allDBListVisible } from "@/modules/format-db";
import { tool } from "@/enums/tools";

export default Vue.extend({
  components: {
    Gallery,
  },
  data: () => ({
    panel: false,
    customFilter: "",
    typeFilter: "Companies",
    toolFilter: "All",
    typeFilters: ["All", "Experiments", "Companies", "Homework"],
    toolFilters: [
      "All",

      tool.html,
      tool.pug,
      tool.scss,

      tool.jQuery,
      tool.javascript,
      tool.vue,
      tool.react,
      tool.svelte,
      tool.webComponents,

      tool.php,
      tool.rails,

      tool.illustrator,
      tool.photoshop,

      tool.git,
    ],
  }),
  computed: {
    projectsDB() {
      let db = allDBListVisible;
      let result = db;

      switch (this.typeFilter) {
        case "Experiments":
          result = db.filter(
            (item) =>
              item.client.includes(client.miguelRivas) ||
              item.client.includes(client.itla) ||
              item.client.includes(client.itesa) ||
              item.client.includes(client.codepen)
          );
          break;
        case "Companies":
          result = db.filter(
            (item) =>
              item.filter.includes("company") ||
              (!item.client.includes(client.miguelRivas) &&
                !item.client.includes(client.itla) &&
                !item.client.includes(client.itesa) &&
                !item.client.includes(client.codepen))
          );
          break;
        case "Homework":
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
});
</script>