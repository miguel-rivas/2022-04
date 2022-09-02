<template>
  <nn-column size="50" class="mr-primary-navbar">
    <nn-scroll-area color="royal-purple" :horizontal="false">
      <nn-row>
        <nn-column size="100%">
          <template v-for="(nav, navIndex) in navigation">
            <template v-if="nav.divider">
              <hr :key="`navIndex-${navIndex}`" />
            </template>
            <template v-else-if="!nav.route.includes($route.name)">
              <btn
                :to="{ name: nav.route[0] }"
                :key="nav.route[0]"
                mode="nav"
                color="shamrock"
                size="md"
                :title="nav.tooltip"
                :glyph="nav.icon"
                :text="nav.title"
              />
            </template>
            <template v-else>
              <btn
                :key="nav.route[0]"
                mode="nav"
                color="shamrock"
                size="md"
                :title="nav.tooltip"
                @click="toggleValue('panel'), playSound()"
                :glyph="nav.icon"
                :text="nav.title"
                active
              />
            </template>
          </template>
          <btn
            color="gold-tips"
            size="md"
            mode="nav"
            title="Toggle theme button"
            :glyph="theme ? 'sun-o' : 'moon-o'"
            @click="toggleValue('theme'), playSound()"
            :active="theme"
          />
        </nn-column>
      </nn-row>
    </nn-scroll-area>
  </nn-column>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { linkGithub, linkLinkedin } from "@/db/user";
import { playSound } from "@/modules/helpers";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: "Portfolio 2022",
        icon: "spirit",
        route: [
          "map",
          "2022-projects",
          "2022-statistics",
          "2022-resume",
          "2022-images",
          "2022-videos",
        ],
      },
      {
        divider: true,
      },
      {
        tooltip: "DrLogic",
        icon: "desktop",
        route: [
          "drlogic-home",
          "drlogic-404",
          "drlogic-contact",
          "drlogic-team",
          "drlogic-testimonials",
          "drlogic-services",
          "drlogic-support",
        ],
      },
      {
        tooltip: "Presidente",
        icon: "beer",
        route: [
          "presidente-carnaval-filter",
          "presidente-carnaval-home",
          "presidente-carnaval-loader",
          "presidente-verano-loader",
          "presidente-verano-filter",
          "presidente-destapa",
          "presidente-retrobrindis",
        ],
      },
      {
        tooltip: "Formability",
        icon: "shield",
        route: [
          "formability-demo",
          "formability-401",
          "formability-404",
          "formability-500",
        ],
      },
      {
        tooltip: "Nano Grid",
        icon: "cube",
        route: ["nanogrid-home", "nanogrid-documentation", "nanogrid-tests"],
      },
      {
        tooltip: "Popkern",
        icon: "paint-brush",
        route: [
          // "popkern-home",
          "popkern-icons",
          "popkern-colors",
          "popkern-links",
          "popkern-ruler",
        ],
      },
      {
        tooltip: "Pixel Perfect Tree",
        icon: "diamond",
        route: ["pixelpt-404", "pixelpt-500"],
      },
      {
        divider: true,
      },
      {
        tooltip: "Canvas",
        icon: "gamepad",
        route: [
          "game",
          "dollhouse",
          "avatar",
          "gear",
          "wheel",
          "pixel",
          "cube",
          "spirit",
          "drakkar",
          "car",
          "xwing",
          "portfolio2017",
          "audio2",
        ],
      },
      {
        tooltip: "CSS",
        icon: "css3",
        route: ["window", "minivan", "pills", "house"],
      },
      {
        tooltip: "Others",
        icon: "cubes",
        route: [
          "mineros",
          "descubria",
          "capital",
          "html",
          "css-study",
          "voxel",
          "flat",
          "evolution",
          "stargazer",
          "soundboard",
          "journey",
          "tetravex",
          "hello",
          "hello2",
        ],
      },
      {
        tooltip: "Portfolio 2014",
        title: "14",
        route: ["2014-home", "2014-projects", "2014-contact"],
      },
      {
        tooltip: "Portfolio 2016",
        title: "16",
        route: ["2016-home"],
      },
      {
        tooltip: "Portfolio 2018",
        title: "18",
        route: [
          "2018-home",
          "2018-presidente",
          "2018-drlogic",
          "2018-bpr",
          "2018-apap",
        ],
      },
      {
        divider: true,
      },
    ],
    playSound,
    linkGithub,
    linkLinkedin,
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
  },
  methods: {
    switchLanguage(lang) {
      playSound();
      this.$i18n.locale = lang;
    },
    ...mapMutations(["toggleValue"]),
  },
});
</script>