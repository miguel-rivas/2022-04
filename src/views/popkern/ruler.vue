<template>
  <nn-scroll-area nn-color="royal-purple">
    <h2>{ <span>{{ width }}</span> x <span>{{ height }}</span> }px</h2>
    <h3>[ <span>{{ ratio }}</span> ]</h3>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    width: 0,
    height: 0,
    ratio: 0,
  }),
  mounted() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
  },
  methods: {
    windowResize: function (event) {
      this.width =
        document.width ||
        document.documentElement.clientWidth ||
        document.innerWidth ||
        window.innerWidth ||
        screen.width;

      this.height =
        document.height ||
        document.documentElement.clientHeight ||
        document.innerHeight ||
        window.innerHeight ||
        screen.height;

      this.ratio = (this.width / this.height).toFixed(2);
    },
  },
});
</script>