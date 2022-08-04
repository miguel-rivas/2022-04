<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(color, colorIndex) in gColorsDB")
        li.swatch.item(:key="colorIndex")
          nn-row
            nn-column.color(
              size="100%, 250",
              :style="`background-color: ${color.hex}`"
            )
            nn-column(size="100%")
              p.nn-label.nn-gold-tips {{ color.titleCase }}

              nn-row
                nn-column(size="1/2")
                  p.nn-label.nn-charcoal Hexadecimal
                nn-column(size="1/2")
                  p.nn-label.nn-gravel {{ color.hex }}
                nn-column(size="1/2")
                  p.nn-label.nn-charcoal Hue
                nn-column(size="1/2")
                  p.nn-label.nn-gravel {{ color.hue.toFixed(2) }}
                nn-column(size="1/2")
                  p.nn-label.nn-charcoal Saturation
                nn-column(size="1/2")
                  p.nn-label.nn-gravel {{ color.saturation.toFixed(2) }}
                nn-column(size="1/2")
                  p.nn-label.nn-charcoal Lightness
                nn-column(size="1/2")
                  p.nn-label.nn-gravel {{ color.lightness.toFixed(2) }}

              p.nn-label.nn-denim Background Contrast
              nn-row
                template(v-for="(bk, bkIndex) in bkColors")
                  nn-column(size="35", :key="`bkIndex1${bkIndex}`")
                    .nn-label(:style="setBallBk(bk.hex)")
                  nn-column(size="70%-35", :key="`bkIndex2${bkIndex}`")
                    p.nn-label.nn-charcoal {{ bk.label }}
                  nn-column(size="30%", :key="`bkIndex3${bkIndex}`")
                    p.nn-label(
                      :class="checkContrast(color.hex, bk.hex) >= 7 ? 'nn-shamrock' : 'nn-persian-red'",
                      :title="checkContrast(color.hex, bk.hex) >= 7 ? 'Enough Contrast' : 'Not Enough Contrast'"
                    ) {{ checkContrast(color.hex, bk.hex).toFixed(2) }}
</template>

<script>
import Vue from "vue";
import { wikiColors, paletteColors } from "@/db/wiki-colors";
import { bkColors } from "@/db/colors";

export default Vue.extend({
  data: () => ({
    bkColors,
    gColorsDB: Object.values({ ...wikiColors, ...paletteColors })
      .sort((a, b) => {
        return a.lightness - b.lightness;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      }),
  }),
  methods: {
    setBallBk(color) {
      return `background-color: ${color}; box-shadow: 0 3px 0 #17171c`;
    },

    checkContrast(f, b) {
      let L1 = this.getL(f),
        L2 = this.getL(b),
        ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      return this.Dec2((ratio * 100) / 100);
    },

    getRGB(c) {
      try {
        return (c = parseInt(c, 16));
      } catch (err) {
        return (c = false);
      }
    },

    getsRGB(c) {
      c = this.getRGB(c) / 255;
      c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      return c;
    },

    getL(c) {
      return (
        0.2126 * this.getsRGB(c.substr(1, 2)) +
        0.7152 * this.getsRGB(c.substr(3, 2)) +
        0.0722 * this.getsRGB(c.substr(-2))
      );
    },

    Dec2(num) {
      num = String(num);
      if (num.indexOf(".") !== -1) {
        let numarr = num.split(".");
        if (numarr.length == 1) {
          return Number(num);
        } else {
          return Number(
            numarr[0] + "." + numarr[1].charAt(0) + numarr[1].charAt(1)
          );
        }
      } else {
        return Number(num);
      }
    },
  },
});
</script>