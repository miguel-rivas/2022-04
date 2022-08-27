<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend Options

      nn-btn(
        @click="toggleValue('fallBackIcons')",
        text="Test Fallback Icons",
        color="gold-tips"
        :active="fallBackIcon"
      )
</template>

<script>
import Vue from "vue";
import { mapMutations, mapGetters } from "vuex";

export default Vue.extend({
  methods: {
    ...mapMutations(["toggleValue"]),
  },
   computed: {
    ...mapGetters({
      fallBackIcons: "getFallBackValue",
    }),
  },
});
</script>