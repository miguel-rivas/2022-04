<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(icon, iconIndex) in iconsDB")
        li.icon-item.item(:key="iconIndex")
          nn-row
            nn-column(size="100%, 150")
              nn-icon(:glyph="icon")
            nn-column(size="100%")
              h1(v-html="icon")
</template>

<script>
import Vue from "vue";
import { icons } from "../db/icons";

export default Vue.extend({
  data: () => ({
    iconsDB: Object.keys(icons),
  }),
});
</script>