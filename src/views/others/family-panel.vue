<template>
  <nn-scroll-area nn-color="royal-purple">
    <nn-row class="row-block">
      <nn-column nn-size="100%">
        <legend>Family Tree</legend>

        <slider
          id="layer-spacing"
          label="Layer Spacing"
          min="1"
          max="200"
          step="1"
          v-on:update-value="updateVal('layerSpacing', $event)"
          :value="selection.layerSpacing"
        />

        <slider
          id="node-spacing"
          label="Node Spacing"
          min="1"
          max="200"
          step="1"
          v-on:update-value="updateVal('nodeSpacing', $event)"
          :value="selection.nodeSpacing"
        />

        <nn-row>
          <nn-column nn-size="100%">
            <label
              class="nn-btn"
              nn-mode="flat"
              nn-color="charcoal"
              :class="{ 'nn-active': selection.verticalOrientation }"
            >
              Toggle Orientation
              <input type="checkbox" v-model="selection.verticalOrientation" />
            </label>
          </nn-column>
        </nn-row>
      </nn-column>
    </nn-row>
  </nn-scroll-area>
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
    this.selection = this.$store.getters.getFamilySelection;
  },
});
</script>