<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend Theme
      nn-row
        nn-column(size="100%")
          ul.summary
              li
                nn-row
                  nn-column(size="35")
                    btn(
                      @click="toggleValue('theme')",
                      color="burn-orange",
                      glyph="brightness"
                    )
                  nn-column(size="100%-35")
                    btn(
                      @click="toggleValue('theme')",
                      color="gold-tips",
                      text="Toggle Light"
                    )

  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('stargaze.panel.controller.legend') }}

      slider#hue(
        :label="$t('stargaze.panel.controller.hue')",
        min="0",
        max="360",
        step="10",
        v-on:update-value="updateVal('hue', $event)",
        :value="selection.hue"
      )
</template>

<script>
import Vue from "vue";
import Slider from "../mixins/slider";
import { mapMutations } from "vuex";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getStargazeSelection;
  },
  methods: {
    ...mapMutations(["toggleValue"]),
  }
});
</script>