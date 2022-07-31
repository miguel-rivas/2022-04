<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('colorWheel.panel.general.legend') }}

      slider#colors(
        :label="$t('colorWheel.panel.general.colors')",
        min="1",
        max="720",
        step="1",
        v-on:update-value="updateVal('colors', $event)",
        :value="selection.colors"
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
    this.selection = this.$store.getters.getWheelSelection;
  },
});
</script>