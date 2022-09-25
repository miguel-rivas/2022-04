<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  nn-container(nn-size="1450", nn-spacing="4")
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
          nn-row(nn-breakpoint="lg", nn-table-element)
            nn-column(nn-size="40%", nn-table-element) {{ $t('statistics.workarea.table.name') }}
            nn-column(nn-size="20%", nn-table-element) {{ $t('statistics.workarea.table.type') }}
            nn-column(nn-size="20%", nn-table-element) {{ $t('statistics.workarea.table.date') }}
            nn-column(nn-size="20-35%", nn-table-element) {{ $t('statistics.workarea.table.client') }}
            nn-column(nn-size="35")

        .table-body(role="rowgroup")
          template(v-for="(project, projectIndex) in projectsDBList")
            toggle-row(breakpoint="lg", :key="projectIndex")
              template(v-slot:header)
                nn-column(nn-table-element, nn-size="40%") {{ project.title }}
                nn-column(nn-table-element, nn-size="20%") {{ $t(project.type) }}
                nn-column(nn-table-element, nn-size="20%") {{ project.turingDate }}
                nn-column(nn-table-element, nn-size="20%-35") {{ project.client }}

              template(v-slot:more)
                nn-column(nn-table-element, nn-size="100%")
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