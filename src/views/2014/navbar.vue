<template>
  <navbar title="Portfolio 2014" :links="links">
    <li>
      <select class="nn-input" v-model="theme">
        <template v-for="(theme, themeIndex) in themes">
          <option :key="themeIndex" :value="theme.name">
            {{ theme.text }}
          </option>
        </template>
      </select>
    </li>
  </navbar>
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "2014-home",
        caption: "Home",
      },
      {
        route: "2014-projects",
        caption: "Projects",
      },
      {
        route: "2014-contact",
        caption: "Contact",
      },
    ],
    themes: [
      {
        icon: "leaf",
        text: "Tree Clock",
        name: "clock",
      },
      {
        icon: "teapot",
        text: "Underwater",
        name: "underwater",
      },
      {
        icon: "fire",
        text: "Dragon",
        name: "dragon",
      },
      {
        icon: "brightness",
        text: "Sunset",
        name: "sunset",
      },
      {
        icon: "fire",
        text: "Dragon Night",
        name: "dragon-night",
      },
      {
        icon: "moon",
        text: "Night",
        name: "night",
      },
    ],
    theme: undefined,
  }),
  methods: {
    ...mapMutations(["setTheme2014"]),
  },
  created() {
    this.theme = this.$store.getters.getTheme2014;
  },
  watch: {
    theme: function (e) {
      this.$store.commit("setTheme", {
        name: "theme2014",
        value: e,
      });
    },
  },
});
</script>