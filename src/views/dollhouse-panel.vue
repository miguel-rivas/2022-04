<template>
  <nn-scroll-area color="royal-purple">
    <div class="capsule">
      <nn-row class="row-block">
        <nn-column size="100%">
          <legend>Controllers</legend>
          <nn-row>
            <nn-column size="100%">
              <nn-row>
                <nn-column size="35">
                  <btn
                    color="burn-orange"
                    glyph="rotate"
                    @click="$store.commit('toggleViewSide')"
                  />
                </nn-column>
                <nn-column size="100%-35">
                  <btn
                    color="gold-tips"
                    text="Rotate"
                    @click="$store.commit('toggleViewSide')"
                  />
                </nn-column>
              </nn-row>
            </nn-column>
          </nn-row>
        </nn-column>
      </nn-row>
    </div>
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