<template>
  <nn-container>
    <nav>
      <p>Portfolio 2014</p>
      <ul>
        <li>
          <router-link to="2014-home">Home</router-link>
        </li>
        <li>
          <router-link to="2014-projects">Projects</router-link>
        </li>
        <li>
          <router-link to="2014-contact">Contact</router-link>
        </li>
        <li>
          <select class="nn-input" v-model="theme">
            <template v-for="(theme, themeIndex) in themes">
              <option :key="themeIndex" :value="theme.name">
                {{ theme.text }}
              </option>
            </template>
          </select>
        </li>
      </ul>
    </nav>
  </nn-container>
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({
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