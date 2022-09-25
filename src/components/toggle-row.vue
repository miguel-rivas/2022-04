<template>
  <nn-row :nn-table-element="tableElement" :nn-breakpoint="breakpoint">
    <slot name="header" />
    <nn-column nn-table-element nn-size="35" class="controllers">
      <nn-btn
        title="Toggle row button"
        @click="toggleDataView()"
        :nn-round="btnRound"
        nn-glyph="arrow-angle"
        :nn-direction="showData ? 'up' : 'down'"
        :nn-active="showData"
        nn-color="elf-green"
        nn-tag="a"
        nn-mode="flat"
      />
    </nn-column>
    <template v-if="showData">
      <slot name="more" />
    </template>
  </nn-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    rowData: {
      type: Object,
    },
    breakpoint: {
      type: String,
    },
    tableElement: {
      type: Boolean,
      default: true,
    },
    btnRound: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showData: false,
  }),
  methods: {
    toggleDataView() {
      this.showData = !this.showData;
    },
  },
});
</script>