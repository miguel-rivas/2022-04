<template>
  <div class="capsule">
    <nn-row class="row-block">
      <nn-column size="100%">
        <legend>Theme</legend>
        <nn-row>
          <nn-column size="100%">
            <ul class="summary">
              <template v-for="(theme, themeIndex) in themes">
                <li :key="themeIndex">
                  <nn-row>
                    <nn-column size="35">
                      <btn
                        color="burn-orange"
                        :glyph="theme.icon"
                        @click="
                          $store.commit('toggleTheme', {
                            name: 'theme2016',
                            value: theme.name,
                            alt: '',
                          })
                        "
                      />
                    </nn-column>
                    <nn-column size="100%-35">
                      <btn
                        color="gold-tips"
                        :text="theme.text"
                        @click="
                          $store.commit('toggleTheme', {
                            name: 'theme2016',
                            value: theme.name,
                            alt: '',
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
    themes: [
      {
        icon: "monster",
        text: "Dig",
        name: "earthquake",
      },
    ],
  }),
  methods: {
    ...mapMutations(["toggleTheme"]),
  },
});
</script>