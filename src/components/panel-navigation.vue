<template>
  <nn-column size="50" class="main-panel">
    <nn-scroll-area color="royal-purple" :horizontal="false">
      <nn-container>
        <nn-row vertical>
          <nn-column>
            <template v-for="nav in navigation">
              <template v-if="!nav.route.includes($route.name)">
                <btn
                  :to="{ name: nav.route[0] }"
                  :key="nav.route[0]"
                  mode="transparent"
                  color="shamrock"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.tooltip"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  :key="nav.route[0]"
                  mode="transparent"
                  color="shamrock"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.tooltip"
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
                  mode="transparent"
                  color="shamrock"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.tooltip"
                  size="md"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  :key="nav.route[0]"
                  mode="transparent"
                  color="shamrock"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.tooltip"
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
              mode="transparent"
              color="royal-purple"
              size="md"
              title="Linkedin button"
              v-nano-tooltip.right="'Linkedin'"
              glyph="linkedin"
              target="_blank"
            />
            <hr />
            <btn
              color="gold-tips"
              size="md"
              mode="transparent"
              title="Switch to english"
              v-nano-tooltip.right="'English'"
              text="EN"
              @click="switchLanguage('en')"
              :active="$i18n.locale === 'en'"
            />
            <btn
              color="gold-tips"
              size="md"
              mode="transparent"
              title="Switch to spanish"
              v-nano-tooltip.right="'Español'"
              text="ES"
              @click="switchLanguage('es')"
              :active="$i18n.locale === 'es'"
            />
            <btn
              color="gold-tips"
              size="md"
              mode="transparent"
              title="Switch to portuguese"
              v-nano-tooltip.right="'Português'"
              text="PT"
              @click="switchLanguage('pt')"
              :active="$i18n.locale === 'pt'"
            />
            <hr />
            <btn
              color="gold-tips"
              size="md"
              mode="transparent"
              title="Toggle theme button"
              v-nano-tooltip.right="$t('toggleTheme')"
              glyph="brightness"
              @click="toggleValue('theme'), playSound()"
              :active="theme"
            />
          </nn-column>
        </nn-row>
      </nn-container>
    </nn-scroll-area>
  </nn-column>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { linkGithub, linkLinkedin } from "../db/user";
import i18n from "../i18n";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: i18n.t("stargaze.navTitle"),
        icon: "monster",
        route: ["stargazer"],
      },
      {
        tooltip: i18n.t("projects.navTitle"),
        icon: "duck",
        route: ["projects", "list", "statistics", "github"],
      },
      {
        tooltip: i18n.t("galleries.navTitle"),
        icon: "collections",
        route: ["gallery", "images", "videos"],
      },
      {
        tooltip: i18n.t("ui.navTitle"),
        icon: "color",
        route: ["ui", "colors", "icons", "grid", "grid-gallery"],
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
        route: ["canvas", "locations", "avatar", "gear", "wheel", "pixel"],
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
      this.playSound();
      this.$i18n.locale = lang;
    },
    ...mapMutations(["toggleValue"]),
    playSound() {
      let context = new AudioContext();
      let newSound = context.createOscillator();
      let newGain = context.createGain();
      newSound.connect(newGain);
      newSound.frequency.value = 300;
      newGain.connect(context.destination);
      newSound.start(0);
      newGain.gain.exponentialRampToValueAtTime(
        0.00000001,
        context.currentTime + 0.5
      );
    },
  },
});
</script>