<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('gearBuilder.panel.properties.legend') }}

      slider#corner-amount(
        :label="$t('gearBuilder.panel.properties.teethAmount')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('cornerAmount', $event)",
        :value="selection.cornerAmount"
      )

      slider#outter-circle-radius(
        :label="$t('gearBuilder.panel.properties.pitchRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('outterCircleRadius', $event)",
        :value="selection.outterCircleRadius"
      )

      slider#inner-circle-radius(
        :label="$t('gearBuilder.panel.properties.baseCircleRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('innerCircleRadius', $event)",
        :value="selection.innerCircleRadius"
      )

      slider#main-perforation-radius(
        :label="$t('gearBuilder.panel.properties.axisRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('mainPerforationRadius', $event)",
        :value="selection.mainPerforationRadius"
      )

      slider#side-perforation-amount(
        :label="$t('gearBuilder.panel.properties.sidePerforationAmount')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationAmount', $event)",
        :value="selection.sidePerforationAmount"
      )

      slider#side-perforation-radius(
        :label="$t('gearBuilder.panel.properties.sidePerforationRadius')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationRadius', $event)",
        :value="selection.sidePerforationRadius"
      )

      slider#side-perforation-distance(
        :label="$t('gearBuilder.panel.properties.sidePerforationDistance')",
        min="3",
        max="50",
        step="1",
        v-on:update-value="updateVal('sidePerforationDistance', $event)",
        :value="selection.sidePerforationDistance"
      )
</template>

<script>
import Vue from "vue";
import Slider from "../mixins/slider";

export default Vue.extend({
  mixins: [Slider],
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getGearSelection;
  },
});
</script>