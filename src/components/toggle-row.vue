<template>
  <nn-row :table-element="tableElement" :breakpoint="breakpoint">
    <slot name="header" />
    <nn-column table-element size="35" class="controllers">
      <nn-btn
        :round="btnRound"
        glyph="arrow-angle"
        :direction="showData ? 'up' : 'down'"
        :active="showData"
        @click="toggleDataView()"
        color="elf-green"
        title="Toggle row button"
        tag="a"
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