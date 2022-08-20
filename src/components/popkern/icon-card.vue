<template lang="pug">
li.icon-item.item
  nn-row
    nn-column.preview(size="100%, 150")
      nn-icon(:glyph="icon")
    nn-column(size="100%")
      p.nn-label.nn-gravel {{ icon }}
    nn-column(size="100%")
      nn-row(spacing="0.25")
        nn-column(size="1/4")
          p.nn-label.nn-charcoal(title="Down") 0
          .nn-label.nn-gravel(title="Down")
            nn-icon(:glyph="icon", direction="down")

        nn-column(size="1/4")
          p.nn-label.nn-charcoal 45
          .nn-label.nn-gravel
            nn-icon(:glyph="icon", direction="45", :flip="flip")

        nn-column(size="1/4")
          p.nn-label.nn-charcoal(title="Left") 90
          .nn-label.nn-gravel(title="Left")
            nn-icon(:glyph="icon", direction="left", :flip="flip")

        nn-column(size="1/4")
          p.nn-label.nn-charcoal 135
          .nn-label.nn-gravel
            nn-icon(:glyph="icon", direction="135", :flip="flip")

      nn-row(spacing="0.25")
        nn-column(size="1/4")
          p.nn-label.nn-charcoal(title="Up") 180
          .nn-label.nn-gravel(title="Up")
            nn-icon(:glyph="icon", direction="180", :flip="flip")

        nn-column(size="1/4")
          p.nn-label.nn-charcoal 225
          .nn-label.nn-gravel
            nn-icon(:glyph="icon", direction="225", :flip="flip")

        nn-column(size="1/4")
          p.nn-label.nn-charcoal(title="Right") 270
          .nn-label.nn-gravel(title="Right")
            nn-icon(:glyph="icon", direction="right", :flip="flip")

        nn-column(size="1/4")
          p.nn-label.nn-charcoal 315
          .nn-label.nn-gravel
            nn-icon(:glyph="icon", direction="315", :flip="flip")

      nn-row(spacing="0.25")
        nn-column(size="1/1")
          nn-btn(
            :color="flip ? 'burn-orange' : 'gold-tips'",
            text="Flip",
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