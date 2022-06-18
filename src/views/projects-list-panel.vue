<template lang="pug">
.capsule
  nn-row.row-block.row-block
    nn-column(size="100%")
      legend {{ $t('projects.section.list.panel.filter.legend') }}

      nn-row
        nn-column(size="100%")
          ul.summary
            li: nn-row
              nn-column(size="100%")
                label.nn-btn.nn-flat.nn-charcoal(
                  :class="{ 'nn-active': selection.filterData == 'companies' }"
                )
                  | {{ $t('projects.section.list.panel.filter.companies') }}
                  input(
                    type="radio",
                    name="filter",
                    value="companies",
                    v-model="selection.filterData"
                  )

            li: nn-row
              nn-column(size="100%")
                label.nn-btn.nn-flat.nn-charcoal(
                  :class="{ 'nn-active': selection.filterData == 'experiments' }"
                )
                  | {{ $t('projects.section.list.panel.filter.experiments') }}
                  input(
                    type="radio",
                    name="filter",
                    value="experiments",
                    v-model="selection.filterData"
                  )

            li: nn-row
              nn-column(size="100%")
                label.nn-btn.nn-flat.nn-charcoal(
                  :class="{ 'nn-active': selection.filterData == 'homework' }"
                )
                  | {{ $t('projects.section.list.panel.filter.homework') }}
                  input(
                    type="radio",
                    name="filter",
                    value="homework",
                    v-model="selection.filterData"
                  )

            li: nn-row
              nn-column(size="100%")
                label.nn-btn.nn-flat.nn-charcoal(:class="{ 'nn-active': selection.filterData == 'all' }")
                  | {{ $t('projects.section.list.panel.filter.all') }}
                  input(
                    type="radio",
                    name="filter",
                    value="all",
                    v-model="selection.filterData"
                  )
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {
      filterData: undefined,
    },
  }),
  created() {
    this.selection = this.$store.getters.getFilterData;
  },
});
</script>