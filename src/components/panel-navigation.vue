<template>
  <nn-column nn-size="50" class="mr-primary-navbar">
    <nn-scroll-area nn-color="royal-purple" nn-no-horizontal>
      <nn-row>
        <nn-column nn-size="100%">
          <template v-for="(nav, navIndex) in navigation">
            <template v-if="nav.divider">
              <hr :key="`navIndex-${navIndex}`" />
            </template>
            <template v-else-if="!nav.route.includes($route.name)">
              <btn
                :to="{ name: nav.route[0] }"
                :key="nav.route[0]"
                nn-mode="nav"
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
                nn-mode="nav"
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
            nn-mode="nav"
            title="Toggle theme"
            :glyph="theme ? 'sun-o' : 'moon-o'"
            @click="toggleValue('theme'), playSound()"
            :active="theme"
          />
          <btn
            color="gold-tips"
            size="md"
            nn-mode="nav"
            title="Toggle radio"
            glyph="music"
            @click="
              radio = !radio;
              playSound();
            "
            :active="radio"
          />
          <btn
            color="gold-tips"
            size="md"
            nn-mode="nav"
            title="Toggle Fullscreen"
            :glyph="fullscreen ? 'compress' : 'expand'"
            @click="toggleValue('fullscreen'), playSound()"
            :active="fullscreen"
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
import musicBox from "@/db/musicBox";

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
          // "family",
          // "weather",
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
    musicBox,
    radio: false,
    audio: {
      media: undefined,
      event: undefined,
      counter: -1,
      db: {},
    },
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
      fullscreen: "getFullscreen",
    }),
  },
  created() {
    this.musicBox.sort(() => (Math.random() > 0.5 ? 1 : -1));
  },
  methods: {
    ...mapMutations(["toggleValue"]),
    audioStart() {
      this.audio.counter++;
      if (this.audio.counter >= this.musicBox.length) {
        this.audio.counter = 0;
      }
      const currentTrack = this.musicBox[this.audio.counter];
      if (this.audio.db[currentTrack] === undefined) {
        this.audio.db[currentTrack] = new Audio(
          this.getZapp(`audio/weather/${currentTrack}.mp3`)
        );
        this.audio.db[currentTrack].addEventListener("ended", this.audioStart);
      }
      this.audio.db[currentTrack].play();
    },
    audioStop() {
      const currentTrack = this.musicBox[this.audio.counter];
      this.audio.db[currentTrack].pause();
      this.audio.db[currentTrack].currentTime = 0;
      this.audio.counter--;
    },
  },
  watch: {
    radio: function () {
      if (this.radio) {
        this.audioStart();
      } else {
        this.audioStop();
      }
    },
  },
});
</script>