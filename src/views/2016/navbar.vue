<template>
  <nn-container>
    <nav>
      <p>Portfolio 2016</p>
      <ul>
        <li>
          <router-link to="2016-home">Home</router-link>
        </li>
        <li>
          <nn-btn
            text="Dig"
            color="gold-tips"
            :active="theme === 'earthquake'"
            @click="
              $store.commit('toggleTheme', {
                name: 'theme2016',
                value: 'earthquake',
              })
            "
          />
        </li>
      </ul>
    </nav>
  </nn-container>
</template>

<script>
import Vue from "vue";
import { mapMutations, mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      theme: "getTheme2016",
    }),
  },
  methods: {
    ...mapMutations(["setTheme2016"]),
  },
});
</script>