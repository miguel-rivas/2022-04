<template>
  <nn-column size="50" class="main-panel">
    <nn-scroll-area color="royal-purple" :horizontal="false">
      <nn-row>
        <nn-column size="100%">
          <template v-for="nav in navigation">
            <template v-if="!nav.route.includes($route.name)">
              <btn
                :to="{ name: nav.route[0] }"
                :key="nav.route[0]"
                mode="nav"
                color="shamrock"
                size="md"
                :title="nav.tooltip"
                :glyph="nav.icon"
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
                active
              />
            </template>
          </template>
          <template v-for="nav in navigationBuilder">
            <template v-if="!nav.route.includes($route.name)">
              <btn
                :to="{ name: nav.route[0] }"
                :key="nav.route[0]"
                mode="nav"
                color="shamrock"
                :title="nav.tooltip"
                size="md"
                :glyph="nav.icon"
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
                active
              />
            </template>
          </template>
          <hr />
          <btn
            tag="a"
            :href="linkLinkedin"
            mode="nav"
            color="royal-purple"
            size="md"
            title="Linkedin button"
            glyph="linkedin"
            target="_blank"
          />
          <hr />
          <btn
            color="gold-tips"
            size="md"
            mode="nav"
            title="Switch to English"
            text="EN"
            @click="switchLanguage('en')"
            :active="$i18n.locale === 'en'"
          />
          <btn
            color="gold-tips"
            size="md"
            mode="nav"
            title="Switch to Spanish"
            text="ES"
            @click="switchLanguage('es')"
            :active="$i18n.locale === 'es'"
          />
          <btn
            color="gold-tips"
            size="md"
            mode="nav"
            title="Switch to Portuguese"
            text="PT"
            @click="switchLanguage('pt')"
            :active="$i18n.locale === 'pt'"
          />
          <hr />
          <btn
            color="gold-tips"
            size="md"
            mode="nav"
            title="Toggle theme button"
            glyph="brightness"
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
import { linkGithub, linkLinkedin } from "../db/user";
import i18n from "../i18n";
import { playSound } from "../modules/helpers";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: i18n.t("dollhouse.navTitle"),
        icon: "monster",
        route: ["dollhouse"],
      },
      {
        tooltip: "Resume",
        icon: "person",
        route: ["resume"],
      },
      {
        tooltip: i18n.t("projects.navTitle"),
        icon: "duck",
        route: ["projects", "list", "statistics", "github"],
      },
      {
        tooltip: i18n.t("galleries.navTitle"),
        icon: "collections",
        route: ["gallery", "images", "videos", "fake-audience"],
      },
      {
        tooltip: i18n.t("ui.navTitle"),
        icon: "color",
        route: ["ui", "colors", "icons"],
      },
      {
        tooltip: i18n.t("timeline.navTitle"),
        icon: "clock",
        route: [
          "timeline",
          "2014",
          "2014-home",
          "2014-projects",
          "2014-contact",
          "2016",
          "2018",
          "2018-home",
          "2018-presidente",
          "2018-drlogic",
          "2018-apap",
          "2018-bpr",
          "2022",
        ],
      },
    ],
    navigationBuilder: [
      {
        tooltip: i18n.t("canvas.navTitle"),
        icon: "window",
        route: [
          "canvas",
          "locations",
          "avatar",
          "gear",
          "wheel",
          "pixel",
          "stargazer",
        ],
      },
      {
        tooltip: i18n.t("three.navTitle"),
        icon: "move",
        route: [
          "threejs",
          "cube",
          "spirit",
          "car",
          "xwing",
          "drakkar",
          "portfolio2017",
          "audio2",
          "carrousel",
        ],
      },
      {
        tooltip: i18n.t("css.navTitle"),
        icon: "css3",
        route: ["css", "house", "pills", "minivan", "window"],
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