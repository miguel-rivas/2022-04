<template>
  <navbar title="Portfolio 2016" :links="links">
    <li>
      <nn-btn
        nn-text="Dig"
        nn-color="gold-tips"
        :nn-active="theme === 'earthquake'"
        @click="
          $store.commit('toggleTheme', {
            name: 'theme2016',
            value: 'earthquake',
          })
        "
      />
    </li>
  </navbar>
</template>

<script>
import Vue from "vue";
import navbar from "@/components/navbar.vue";
import { mapMutations, mapGetters } from "vuex";

export default Vue.extend({
  components: { navbar },
  data: () => ({
    links: [
      {
        route: "2016-home",
        caption: "Home",
      },
    ],
  }),
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