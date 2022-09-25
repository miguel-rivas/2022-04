<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  nn-row.row-block
    nn-column(nn-size="100%")
      legend {{ $t('three.panel.controller.legend') }}

      slider#rotation(
        :label="$t('three.panel.controller.rotation')",
        min="-20",
        max="20",
        step="0.01",
        v-on:update-value="updateVal('sceneRotation', $event)",
        :value="selection.sceneRotation"
      )

      nn-row
        nn-column(nn-size="100%")
          label.nn-btn(
            nn-mode="flat",
            nn-color="charcoal",
            :class="{ 'nn-active': selection.grid }"
          )
            | {{ $t('three.panel.controller.grid') }}
            input(type="checkbox", v-model="selection.grid")

      nn-row
        nn-column(nn-size="100%")
          label.nn-btn(
            nn-mode="flat",
            nn-color="charcoal",
            :class="{ 'nn-active': selection.pause }"
          )
            | {{ $t('three.panel.controller.pause') }}
            input(type="checkbox", v-model="selection.pause")

      nn-row
        nn-column(nn-size="100%")
          label.nn-btn(
            nn-mode="flat",
            nn-color="charcoal",
            :class="{ 'nn-active': selection.lines }"
          )
            | {{ $t('three.panel.controller.lines') }}
            input(type="checkbox", v-model="selection.lines")
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
    this.selection = this.$store.getters.getMeshSelection;
  },
});
</script>