<template lang="pug">
li.icon-item.item
  nn-row
    nn-column.preview(nn-size="100%, 150")
      nn-icon(:nn-glyph="icon")
    nn-column(nn-size="100%")
      p.nn-label.nn-gravel {{ icon }}
    nn-column(nn-size="100%")
      nn-row(nn-spacing="0.25")
        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal(title="Down") 0
          .nn-label.nn-gravel(title="Down")
            nn-icon(:nn-glyph="icon", nn-direction="down")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal 45
          .nn-label.nn-gravel
            nn-icon(:nn-glyph="icon", nn-direction="45", :nn-flip="flip")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal(title="Left") 90
          .nn-label.nn-gravel(title="Left")
            nn-icon(:nn-glyph="icon", nn-direction="left", :nn-flip="flip")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal 135
          .nn-label.nn-gravel
            nn-icon(:nn-glyph="icon", nn-direction="135", :nn-flip="flip")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal(title="Up") 180
          .nn-label.nn-gravel(title="Up")
            nn-icon(:nn-glyph="icon", nn-direction="180", :nn-flip="flip")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal 225
          .nn-label.nn-gravel
            nn-icon(:nn-glyph="icon", nn-direction="225", :nn-flip="flip")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal(title="Right") 270
          .nn-label.nn-gravel(title="Right")
            nn-icon(:nn-glyph="icon", nn-direction="right", :nn-flip="flip")

        nn-column(nn-size="1/4")
          p.nn-label.nn-charcoal 315
          .nn-label.nn-gravel
            nn-icon(:nn-glyph="icon", nn-direction="315", :nn-flip="flip")
   
        nn-column(nn-size="1/1")
          nn-btn(
            :nn-color="flip ? 'burn-orange' : 'gold-tips'",
            nn-text="Flip",
            @click="flip = !flip"
          )
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    flip: false,
  }),
});
</script>