import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ProjectsListWorkareaView from '../views/projects-list-workarea.vue';
import ProjectsListPanelView from '../views/projects-list-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';
import GithubWorkareaView from '../views/github-workarea.vue';


export default {
  name: 'projects',
  path: '/projects',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "github"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: "projects.navTitle"
        },
        links: {
          default: () => ([
            {
              text: "projects.section.github.title",
              name: "github",
              icon: "github",
            },
            {
              text: "projects.section.list.title",
              name: "list",
              icon: "list",
            },
            {
              text: "projects.section.statistics.title",
              name: "statistics",
              icon: "chart",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: 'github',
      path: '/github',
      components: {
        workarea2: GithubWorkareaView,
      },
    },
    {
      name: 'list',
      path: '/list',
      components: {
        workarea2: ProjectsListWorkareaView,
        panel2: ProjectsListPanelView,
      },
    },
    {
      name: 'statistics',
      path: '/statistics',
      components: {
        workarea2: StatisticsWorkareaView,
      },
    },
  ],
};