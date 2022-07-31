import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import P2014HomeView from '../views/2014/home.vue';
import P2014ProjectsView from '../views/2014/projects.vue';
import P2014ContactView from '../views/2014/contact.vue';
import P2014WorkareaView from '../views/2014/index.vue';
import P2014PanelView from '../views/2014/index-panel.vue';

import P2016WorkareaView from '../views/2016/index.vue';
import P2016PanelView from '../views/2016/index-panel.vue';

import P2018HomeView from '../views/2018/home.vue';
import P2018DrLogicView from '../views/2018/drlogic.vue';
import P2018ApapView from '../views/2018/apap.vue';
import P2018BPRBankView from '../views/2018/bpr.vue';
import P2018PresidenteView from '../views/2018/presidente.vue';
import P2018WorkareaView from '../views/2018/index.vue';
import P2018PanelView from '../views/2018/index-panel.vue';

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
      name: '2014',
      path: '/2014',
      components: {
        workarea2: P2014WorkareaView,
        panel2: P2014PanelView,
      },
      children: [
        {
          name: '2014-home',
          path: '/2014-home',
          components: {
            workarea3: P2014HomeView,
          },
        },
        {
          name: '2014-projects',
          path: '/2014-projects',
          components: {
            workarea3: P2014ProjectsView,
          },
        },
        {
          name: '2014-contact',
          path: '/2014-contact',
          components: {
            workarea3: P2014ContactView,
          },
        },
      ],
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
      children: [
        {
          name: '2018-home',
          path: '/2018-home',
          components: {
            workarea3: P2018HomeView,
          },
        },
        {
          name: '2018-drlogic',
          path: '/2018-drlogic',
          components: {
            workarea3: P2018DrLogicView,
          },
        },
        {
          name: '2018-apap',
          path: '/2018-apap',
          components: {
            workarea3: P2018ApapView,
          },
        },
        {
          name: '2018-presidente',
          path: '/2018-presidente',
          components: {
            workarea3: P2018PresidenteView,
          },
        },
        {
          name: '2018-bpr',
          path: '/2018-bpr',
          components: {
            workarea3: P2018BPRBankView,
          },
        },
      ],
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