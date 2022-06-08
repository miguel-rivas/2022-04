import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultPanelView from '../views/default-panel.vue';

import StargazeWorkareaView from '../views/stargaze-workarea.vue';
import StargazePanelView from '../views/stargaze-panel.vue';

import ResumeWorkareaView from '../views/resume-workarea.vue';
import SoundboardWorkareaView from '../views/soundboard-workarea.vue';

import CanvasRouter from '../router/canvas';
import CssRouter from '../router/css';
import ProjectsRouter from '../router/projects';
import ThreeRouter from '../router/three';
import GalleryRouter from '../router/gallery';
import UiRouter from '../router/ui';
import TimelineRouter from '../router/timeline';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/stargazer',
  },
  {
    name: 'stargazer',
    path: '/stargazer',
    components: {
      workarea: StargazeWorkareaView,
      panel: StargazePanelView,
    },
  },
  {
    name: 'resume',
    path: '/resume',
    components: {
      workarea: ResumeWorkareaView,
      panel: DefaultPanelView,
    },
  },
  {
    name: 'fake-audience',
    path: '/fake-audience',
    components: {
      workarea: SoundboardWorkareaView,
      panel: DefaultPanelView,
    },
  },
  {
    path: '*',
    redirect: '/'
  },

  /* ---------------------- nested ---------------------- */

  CanvasRouter,
  CssRouter,
  ProjectsRouter,
  ThreeRouter,
  GalleryRouter,
  UiRouter,
  TimelineRouter,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;