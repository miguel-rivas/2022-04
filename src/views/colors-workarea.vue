<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(color, colorIndex) in gColorsDB")
        li.swatch.item(v-bind:key="colorIndex")
          nn-row
            nn-column.color(
              size="100%, 250",
              :style="`background-color: ${color.hex}`"
            )
            nn-column(size="100%")
              h1 {{ color.titleCase }}
              p {{ color.hex }}
</template>

<script lang="ts">
import Vue from "vue";
import { allColors } from "../db/wiki-colors";

export default Vue.extend({
  data: () => ({
    gColorsDB: Object.values(allColors)
      .sort((a, b) => {
        return a.lightness - b.lightness;
      })
      .sort((a, b) => {
        return b.saturation - a.saturation;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      })
      .sort((a, b) => {
        return a.opacity - b.opacity;
      }),
  }),
});
</script>