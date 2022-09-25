<template>
  <nn-scroll-area nn-color="royal-purple">
    <nn-row class="row-block">
      <nn-column nn-size="100%">
        <legend>{{ $t(`dollhouse.panel.controller.legend`) }}</legend>
        <nn-row>
          <nn-column nn-size="100%">
            <nn-row>
              <nn-column nn-size="35">
                <btn
                  color="burn-orange"
                  glyph="rotate-left"
                  @click="$store.commit('toggleViewSide')"
                />
              </nn-column>
              <nn-column nn-size="100%-35">
                <btn
                  color="gold-tips"
                  :text="$t(`dollhouse.panel.controller.rotate`)"
                  @click="$store.commit('toggleViewSide')"
                />
              </nn-column>
            </nn-row>
          </nn-column>
        </nn-row>
      </nn-column>
    </nn-row>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({}),
  methods: {
    ...mapMutations(["toggleViewSide"]),
  },
});
</script>