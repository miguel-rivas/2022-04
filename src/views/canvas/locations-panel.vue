<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('map.panel.locations.legend') }}
      nn-row
        nn-column(size="100%")
          ul.summary
            template(v-for="(location, locationIndex) in locationsDBList")
              li(:key="locationIndex")
                nn-row
                  nn-column(size="100%")
                    btn(
                      @click="openModal(location.client)",
                      color="gold-tips",
                      :text="location.title"
                    )
</template>

<script>
import Vue from "vue";
import { locationsDBList } from "@/modules/format-db";

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
    openModal(filter) {
      this.modal.data = locationsDBList.find((item) => item.client === filter);
      this.modal.hidden = false;
    },
  },
});
</script>