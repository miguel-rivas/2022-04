<template lang="pug">
.capsule
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
import Slider from "@/mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getStargazeSelection;
  },
});
</script>