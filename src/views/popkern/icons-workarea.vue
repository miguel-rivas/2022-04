<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(icon, iconIndex) in iconsDB")
        li.icon-item.item(:key="iconIndex")
          nn-row
            nn-column.preview(size="100%, 150")
              nn-icon(:glyph="icon")
            nn-column(size="100%")
              p.nn-label.nn-gold-tips {{ icon }}
            nn-column(size="100%")
              nn-row(spacing="0.25")
                nn-column(size="1/3")
                  p.nn-label.nn-denim Left
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="left")
                nn-column(size="1/3")
                  p.nn-label.nn-denim Up
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="up")
                nn-column(size="1/3")
                  p.nn-label.nn-denim Right
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="right")
</template>

<script>
import Vue from "vue";
import { icons } from "@/db/icons";

export default Vue.extend({
  data: () => ({
    iconsDB: Object.keys(icons),
  }),
});
</script>