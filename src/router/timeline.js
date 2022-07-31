import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';



import P2016WorkareaView from '../views/2016/index.vue';
import P2016PanelView from '../views/2016/index-panel.vue';



import P2022WorkareaView from '../views/stargaze-workarea.vue';
import P2022PanelView from '../views/stargaze-panel.vue';

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
          default: "timeline.title"
        },
        links: {
          default: () => ([
            {
              text: "timeline.section.2014.title",
              name: ["2014-home", "2014", "2014-projects", "2014-contact"],
              icon: "avo",
            },
            {
              text: "timeline.section.2016.title",
              name: ["2016"],
              icon: "monster",
            },
            {
              text: "timeline.section.2018.title",
              name: ["2018-home", "2018", "2018-apap", "2018-presidente", "2018-drlogic", "2018-bpr"],
              icon: "collections",
            },
            {
              text: "timeline.section.2022.title",
              name: ["2022"],
              icon: "moon",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [   
    {
      name: '2016',
      path: '/2016',
      components: {
        workarea2: P2016WorkareaView,
        panel2: P2016PanelView,
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