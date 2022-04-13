import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import P2014WorkareaView from '../views/2014-workarea.vue';
import P2014PanelView from '../views/2014-panel.vue';
import P2016WorkareaView from '../views/2016-workarea.vue';
import P2016PanelView from '../views/2016-panel.vue';
import P2018WorkareaView from '../views/2018-workarea.vue';
import P2018PanelView from '../views/2018-panel.vue';
import P2022WorkareaView from '../views/2022-workarea.vue';
import P2022PanelView from '../views/2022-panel.vue';

export default {
  name: 'timeline',
  path: '/timeline',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "2014"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: "timeline.navTitle"
        },
        links: {
          default: () => ([
            {
              text: "timeline.section.2014.title",
              name: "2014",
              icon: "",
            },
            {
              text: "timeline.section.2016.title",
              name: "2016",
              icon: "",
            },
            {
              text: "timeline.section.2018.title",
              name: "2018",
              icon: "",
            },
            {
              text: "timeline.section.2022.title",
              name: "2022",
              icon: "",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: '2014',
      path: '/2014',
      components: {
        workarea2: P2014WorkareaView,
        panel2: P2014PanelView,
      },
    },
    {
      name: '2016',
      path: '/2016',
      components: {
        workarea2: P2016WorkareaView,
        panel2: P2016PanelView,
      },
    },
    {
      name: '2018',
      path: '/2018',
      components: {
        workarea2: P2018WorkareaView,
        panel2: P2018PanelView,
      },
    },
    {
      name: '2022',
      path: '/2022',
      components: {
        workarea2: P2022WorkareaView,
        panel2: P2022PanelView,
      },
    },
  ],
};