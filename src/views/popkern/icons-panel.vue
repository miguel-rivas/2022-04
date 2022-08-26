<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend Options

      nn-btn(
        @click="toggleValue('fallBackIcons')",
        text="Test Fallback Icons",
        color="gold-tips"
      )
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  methods: {
    ...mapMutations(["toggleValue"]),
  },
});
</script>