<template>
  <web-gear
    axis-radius="3"
    side-perforation-radius="8"
    side-perforation-amount="5"
    width="165"
    class="rtl g6"
  />
</template>

<script>
import Vue from "vue";
// import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    selection: {},
  }),
  computed: {
    // ...mapGetters({
    //   panel: "getPanelVisibility",
    //   panelSize: "getPanelVisibility",
    // }),
  },
  created() {
    // this.selection = this.$store.getters.getAvatarSelection;
  },
  mounted() {},
  methods: {},
});
</script>