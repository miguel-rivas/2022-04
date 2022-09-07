<template>
  <nn-scroll-area color="royal-purple">
    <img class="weather" :src="getAsset('snowy')" :alt="getDescription('snowy')" />
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    weathers: {
      snowy: {
        asset: 'snowy.png',
        alt: ''
      }
    },
  }),
  mounted() {},
  methods: {
    getAsset(name){
      return this.getZapp(`img/home/${name}.png`)
    },
    getDescription(name){
      return `${name} Weather`;
    }
  }
});
</script>