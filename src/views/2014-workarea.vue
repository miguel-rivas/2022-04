<template>
  <div class="nested-app p2014" :class="[theme2, sectionName]">
    <router-view name="workarea3" />

    <div class="bk-ornament" />
    <footer>
      <div class="clouds" />
      <div class="city" />
      <div class="mountains" />
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    selection: {},
    contentIndex: 0,
    contentDB: [
      {
        header: `Hi! My name is Miguel Rivas`,
        content: `I'm a Frontend Developer living in Santo Domingo.`,
      },
      {
        header: `Why Me?`,
        content: `I work with HTML/JADE/HAML, CSS/SASS/LESS, and the Adobe Suite (Illustrator, Photoshop, Indesign, Flash and Premiere). I also love git and have been known to roll up my sleeves and work with basic Ruby on Rails and PHP.`,
      },
      {
        header: `Experience in the area`,
        content: `I've work as Front-End Developer for <strong>Cerveza Presidente</strong> in the web app <strong>Destapa El Coro</strong> and in the page of <strong>Carnaval Presidente 2015</strong>. also I worked with other brand as Orange, Pepsi and Outback.`,
      },
    ],
  }),
  computed: {
    ...mapGetters({
      theme2: "getTheme2",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
  },
  created() {
    if (this.$route.name !== '2014-home') {
      this.$router.push({ name: '2014-home' });
    }
  },
});
</script>