<template>
  <div class="nested-app p2018" :class="[sectionName]">
    <nn-scroll-area color="royal-purple">
      <router-view name="workarea3" />
    </nn-scroll-area>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
  }),
  computed: {
    sectionName() {
      return `section-${this.$route.name}`;
    },
  },
  created() {
    if (this.$route.name !== '2018-home') {
      this.$router.push({ name: '2018-home' });
    }
  },
});
</script>