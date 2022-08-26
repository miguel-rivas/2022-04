<template lang="pug">
nn-scroll-area(color="royal-purple", :class="{ 'fall-back': fallBackIcons }")
  nn-container
    ul.img-gallery
      template(v-for="(icon, iconIndex) in iconsDB")
        icon-card(:key="iconIndex", :icon="icon")
</template>

<script>
import Vue from "vue";
import { icons } from "@/db/icons";
import IconCard from "@/components/popkern/icon-card.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: { IconCard },
  data: () => ({
    iconsDB: Object.keys(icons),
  }),
  computed: {
    ...mapGetters({
      fallBackIcons: "getFallBackValue",
    }),
  },
});
</script>