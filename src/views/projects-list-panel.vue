<template lang="pug">
div
  nn-row.row-block.row-block(
    v-if="selection.currentLink.src === ''",
  )
    nn-column(size="100%")
      legend {{ $t('projects.section.list.panel.filter.legend') }}

      nn-row
        nn-column(size="100%")
          ul.summary
            li: nn-row
              nn-column(size="100%")
                label.btn.flat.charcoal(
                  :class="{ active: selection.filterData == 'all' }"
                )
                  | {{ $t('projects.section.list.panel.filter.all') }}
                  input(
                    type="radio",
                    name="filter",
                    value="all",
                    v-model="selection.filterData"
                  )

            li: nn-row
              nn-column(size="100%")
                label.btn.flat.charcoal(
                  :class="{ active: selection.filterData == 'companies' }"
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
                label.btn.flat.charcoal(
                  :class="{ active: selection.filterData == 'projects' }"
                )
                  | {{ $t('projects.section.list.panel.filter.projects') }}
                  input(
                    type="radio",
                    name="filter",
                    value="projects",
                    v-model="selection.filterData"
                  )

            li: nn-row
              nn-column(size="100%")
                label.btn.flat.charcoal(
                  :class="{ active: selection.filterData == 'experiments' }"
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
                label.btn.flat.charcoal(
                  :class="{ active: selection.filterData == 'homework' }"
                )
                  | {{ $t('projects.section.list.panel.filter.homework') }}
                  input(
                    type="radio",
                    name="filter",
                    value="homework",
                    v-model="selection.filterData"
                  )

  nn-row.row-block(v-else)
    nn-column(size="100%")
      btn(@click="closeProject()", color="persian-red", text="Close Project")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    selection: {
      filterData: undefined,
      currentLink: {},
    },
  }),
  created() {
    this.selection = this.$store.getters.getFilterData;
  },
  methods: {
    closeProject() {
      this.$store.commit("setProject", {
        value: "",
      });
    },
  },
});
</script>