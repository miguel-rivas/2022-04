<template>
  <main :class="classes">
    <alert />
    <nn-row class="nano-app">
      <panel-navigation />

      <template v-if="hasPanel">
        <nn-column class="panel" :size="panel ? panelSize[0] : '0'">
          <router-view name="panel" />
        </nn-column>

        <nn-column size="35" class="panel-bar">
          <nn-btn
            class="panel-ctrl"
            title="Toggle panel button"
            glyph="chevron"
            color="charcoal"
            :direction="panel ? 'left' : 'right'"
            @click="toggleValue('panel'), playSound()"
          />
        </nn-column>
      </template>

      <nn-column :size="workareaSize">
        <nn-row class="nano-content">
          <nn-column size="100%" class="nano-navbar" v-if="hasNavbar">
            <router-view name="navbar" />
          </nn-column>
          <nn-column size="100%" class="nano-workarea">
            <router-view name="workarea" />
          </nn-column>
        </nn-row>
      </nn-column>
    </nn-row>
  </main>
</template>

<script>
import Vue from "vue";
import PanelNavigation from "./components/panel-navigation.vue";
import Alert from "./components/alert.vue";
import { mapGetters, mapMutations } from "vuex";
import { playSound } from "./modules/helpers";

export default Vue.extend({
  data: () => ({
    playSound,
  }),
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
      return [this.sectionName, this.theme ? "nn-light" : "nn-dark"];
    },
    hasPanel() {
      return this.$route.matched[0].components.panel !== undefined;
    },
    hasNavbar(){
      return this.$route.matched[0].components.navbar !== undefined;
    },
    workareaSize() {
      if (this.panel && this.hasPanel) {
        return this.panelSize[1];
      } else if(this.hasPanel) {
        return "100%-50-35";
      } else {
        return "100%-50";
      }
    },
  },
  created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const currentRoute = urlParams.get("route");
    if (currentRoute) {
      this.$router.push(`/${currentRoute}`);
    }
  },
  methods: {
    ...mapMutations(["toggleValue"]),
  },
});
</script>