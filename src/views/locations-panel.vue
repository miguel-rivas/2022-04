<template lang="pug">
.capsule
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('canvas.section.map.panel.locations.legend') }}
      nn-row
        nn-column(size="100%")
          ul.summary
            template(v-for="(location, locationIndex) in locationsDBList")
              li(:key="locationIndex")
                nn-row
                  nn-column(size="35")
                    btn(
                      @click="centerMap(location.position)",
                      color="burn-orange",
                      glyph="gps-fixed"
                    )
                  nn-column(size="100%-35")
                    btn(
                      @click="openModal(location.clients[0])",
                      color="gold-tips",
                      :text="location.title"
                    )
</template>

<script>
import Vue from "vue";
import { locationsDBList } from "../modules/format-db";

export default Vue.extend({
  data: () => ({
    selection: {},
    modal: {},
    locationsDBList,
  }),
  created() {
    this.selection = this.$store.getters.getLocationSelection;
    this.modal = this.$store.getters.getModal;
  },
  methods: {
    centerMap(position) {
      this.$store.commit("centerMap", {
        position: position,
      });
    },
    openModal(filter) {
      this.modal.data = locationsDBList.find(
        (item) => item.clients[0] === filter
      );
      this.modal.hidden = false;
    },
  },
});
</script>