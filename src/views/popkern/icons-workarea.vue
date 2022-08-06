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
                nn-column(size="1/4")
                  p.nn-label.nn-denim Up
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="up")
                nn-column(size="1/4")
                  p.nn-label.nn-denim Right
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="right")
                nn-column(size="1/4")
                  p.nn-label.nn-denim Down
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="down")
                nn-column(size="1/4")
                  p.nn-label.nn-denim Left
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="left")

              nn-row(spacing="0.25")
                nn-column(size="1/1")
                  p.nn-label.nn-denim Flip
                nn-column(size="1/4")
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="up", flip)
                nn-column(size="1/4")
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="right", flip)
                nn-column(size="1/4")
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="down", flip)
                nn-column(size="1/4")
                  .nn-label.nn-gravel
                    nn-icon(:glyph="icon", direction="left", flip)

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