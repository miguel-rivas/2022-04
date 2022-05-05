<template>
  <main class="vue-theme" :class="classes">
    <alert />
    <nn-row class="nano-app">
      <panel-navigation />

      <nn-column class="panel" :size="panel ? panelSize[0] : '0'">
        <router-view name="panel" />
      </nn-column>

      <nn-column size="0" class="panel-bar">
        <btn
          class="panel-ctrl"
          title="Toggle panel button"
          glyph="chevron"
          :direction="panel ? 'left' : 'right'"
          @click="toggleValue('panel'), playSound()"
        />
      </nn-column>

      <nn-column :size="panel ? panelSize[1] : '100%-50'" class="workarea">
        <router-view name="workarea" />
      </nn-column>
    </nn-row>
  </main>
</template>

<script>
import Vue from "vue";
import PanelNavigation from "./components/panel-navigation.vue";
import Alert from "./components/alert.vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,
    Alert,
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
      panel: "getPanelVisibility",
      panelSize: "getPanelSize",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
    classes() {
      return [this.sectionName, this.theme ? "nano-light" : "nano-dark"];
    },
  },
  created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const currentRoute = urlParams.get("route") || "stargazer";
    this.$router.push(`/${currentRoute}`);
  },
  methods: {
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