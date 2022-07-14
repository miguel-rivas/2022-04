import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import ColorsWorkareaView from '../views/colors-workarea.vue';
import IconsWorkareaView from '../views/icons-workarea.vue';

export default {
  name: 'ui',
  path: '/ui',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "colors"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: "ui.navTitle"
        },
        links: {
          default: () => ([
            {
              text: "ui.section.colors.title",
              name: ["colors"],
              icon: "color",
            },
            {
              text: "ui.section.icons.title",
              name: ["icons"],
              icon: "category",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: 'colors',
      path: '/colors',
      components: {
        workarea2: ColorsWorkareaView,
      },
    },
    {
      name: 'icons',
      path: '/icons',
      components: {
        workarea2: IconsWorkareaView,
      },
    },
  ],
};