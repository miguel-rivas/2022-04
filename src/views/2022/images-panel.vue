<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('images.panel.controller.legend') }}

      slider#outter-circle-radius(
        :label="$t('images.panel.controller.rotationDelay')",
        min="50",
        max="600",
        step="50",
        v-on:update-value="updateVal('rotationDelay', $event)",
        :value="selection.rotationDelay"
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
    this.selection = this.$store.getters.getProjects3DSelection;
  },
});
</script>