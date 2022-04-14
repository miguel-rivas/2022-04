<template>
  <div class="capsule">
    <nn-row class="row-block">
      <nn-column size="100%">
        <legend>Navigation</legend>
        <nn-row>
          <nn-column size="100%">
            <ul class="summary">
              <template v-for="(route, routeIndex) in navigation">
                <li v-bind:key="routeIndex">
                  <nn-row>
                    <nn-column size="35">
                      <btn
                        :to="route.path"
                        color="cobalt-blue"
                        :glyph="route.icon"
                      />
                    </nn-column>
                    <nn-column size="100%-35">
                      <btn
                        :to="route.path"
                        color="mariner"
                        :text="route.text"
                      />
                    </nn-column>
                  </nn-row>
                </li>
              </template>
            </ul>
          </nn-column>
        </nn-row>
      </nn-column>
    </nn-row>

    <nn-row class="row-block">
      <nn-column size="100%">
        <legend>Theme</legend>
        <nn-row>
          <nn-column size="100%">
            <ul class="summary">
              <template v-for="(theme, themeIndex) in themes">
                <li v-bind:key="themeIndex">
                  <nn-row>
                    <nn-column size="35">
                      <btn
                        color="burn-orange"
                        :glyph="theme.icon"
                        @click="
                          $store.commit('setTheme', {
                            name: 'theme2014',
                            value: theme.name,
                          })
                        "
                      />
                    </nn-column>
                    <nn-column size="100%-35">
                      <btn
                        color="gold-tips"
                        :text="theme.text"
                        @click="
                          $store.commit('setTheme', {
                            name: 'theme2014',
                            value: theme.name,
                          })
                        "
                      />
                    </nn-column>
                  </nn-row>
                </li>
              </template>
            </ul>
          </nn-column>
        </nn-row>
      </nn-column>
    </nn-row>
  </div>
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({
    navigation: [
      {
        icon: "avo",
        text: "Home",
        path: "2014-home",
      },
      {
        icon: "duck",
        text: "Projects",
        path: "2014-projects",
      },
      {
        icon: "paper-plane",
        text: "Contact",
        path: "2014-contact",
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
  }),
  methods: {
    ...mapMutations(["setTheme2014"]),
  },
});
</script>