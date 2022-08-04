<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container(size="1450", spacing="4")
    article.nn-box
      h1 {{ $t('statistics.workarea.yearlyAverage') }}
      br
      line-chart(:chart-data="allDates()")

    article.nn-box
      h1 {{ $t('statistics.workarea.skillsUsed') }}
      br
      bar-chart(:chart-data="allTools()")

    article.nn-box
      h1 {{ $t('statistics.workarea.database') }}
      hr

      .table(role="table")
        .table-head(role="rowgroup")
          nn-row(breakpoint="lg", table-element)
            nn-column(size="40%", table-element) {{ $t('statistics.workarea.table.name') }}
            nn-column(size="20%", table-element) {{ $t('statistics.workarea.table.type') }}
            nn-column(size="20%", table-element) {{ $t('statistics.workarea.table.date') }}
            nn-column(size="20-35%", table-element) {{ $t('statistics.workarea.table.client') }}
            nn-column(size="35")

        .table-body(role="rowgroup")
          template(v-for="(project, projectIndex) in projectsDBList")
            toggle-row(breakpoint="lg", :key="projectIndex")
              template(v-slot:header)
                nn-column(table-element, size="40%") {{ project.title }}
                nn-column(table-element, size="20%") {{ $t(project.type) }}
                nn-column(table-element, size="20%") {{ project.turingDate }}
                nn-column(table-element, size="20%-35") {{ project.client }}

              template(v-slot:more)
                nn-column(table-element, size="100%")
                  .pill-container
                    template(v-for="(tool, toolIndex) in project.tools")
                      span.pill(:key="toolIndex", v-html="tool")
</template>

<script>
import Vue from "vue";
import LineChart from "@/components/line-chart.vue";
import BarChart from "@/components/bar-chart.vue";
import ToggleRow from "@/components/toggle-row.vue";
import { projectsDBList, allTools, allDates } from "@/modules/format-db";

export default Vue.extend({
  components: {
    ToggleRow,
    LineChart,
    BarChart,
  },
  data: () => ({
    projectsDBList,
    allTools,
    allDates,
  }),
});
</script>