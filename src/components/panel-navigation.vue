<template>
  <nn-column size="50" class="main-panel">
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
        </nn-column>
      </nn-row>
    </nn-scroll-area>
    <nn-row>
      <nn-column size="100%">
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
  </nn-column>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { linkGithub, linkLinkedin } from "@/db/user";
import i18n from "../i18n";
import { playSound } from "@/modules/helpers";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: "Portfolio 2022",
        icon: "monster",
        route: ["2022-home", "2022-projects", "2022-statistics", "2022-resume"],
      },
      {
        divider: true,
      },
      {
        tooltip: "Apap",
        icon: "person",
        route: ["mineros"],
      },
      {
        tooltip: "Formability",
        icon: "robot",
        route: [
          "formability-demo",
          "formability-401",
          "formability-404",
          "formability-500",
        ],
      },
      {
        tooltip: "Canvas",
        icon: "move",
        route: [
          "map",
          "dollhouse",
          "game",
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
        icon: "category",
        route: ["house", "window", "minivan", "pills"],
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
      {
        tooltip: i18n.t("fake-audience.title"),
        icon: "moon",
        route: ["soundboard"],
      },
      {
        tooltip: i18n.t("ui.title"),
        icon: "color",
        route: ["ui", "colors", "icons"],
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