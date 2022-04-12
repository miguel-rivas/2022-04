<template lang="pug">
nn-row.alert.fixed(:class="alert.status", v-if="alert.message !== ''")
  nn-column(size="100%-35") {{ alert.message }}
  nn-column(size="35")
    button.close-btn(@click="closeAlert()")
      nn-icon(glyph="close")
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      alert: "getAlert",
    }),
  },
  methods: {
    closeAlert() {
      this.$store.commit("setValue", {
        name: "alert",
        value: {
          message: "",
          status: "",
        },
      });
    },
  },
});
</script>