<template>
  <nn-scroll-area color="royal-purple" :class="theme">
    <section class="home">
      <div class="monitor">
        <nn-container>
          <h1 v-html="contentDB[contentIndex].header" />
          <template v-if="contentDB[contentIndex].content">
            <p v-html="contentDB[contentIndex].content" />
          </template>

          <button class="scrn_btn prev" @click="movePage(-1)">
            <nn-icon direction="left" glyph="angle-down" />
          </button>
          <button class="scrn_btn next" @click="movePage(1)">
            <nn-icon direction="right" glyph="angle-down" />
          </button>

          <web-gear
            side-perforation-radius="5"
            side-perforation-distance="32"
            side-perforation-amount="7"
            width="180"
            className="rtr g1"
          />
          <web-gear
            axis-radius="10"
            side-perforation-radius="8"
            side-perforation-amount="3"
            width="160"
            class="rtr g2"
          />
          <web-gear
            teeth-amount="25"
            axis-radius="15"
            side-perforation-radius="8"
            side-perforation-amount="0"
            width="52"
            class="rtl g3"
          />
          <web-gear teeth-amount="25" width="100" class="rtl g4" />
          <web-gear
            teeth-amount="30"
            axis-radius="8"
            side-perforation-radius="3"
            side-perforation-distance="35"
            side-perforation-amount="10"
            width="180"
            class="rtr g5"
          />
          <web-gear
            axis-radius="3"
            side-perforation-radius="8"
            side-perforation-amount="5"
            width="165"
            class="rtl g6"
          />
        </nn-container>
        <div class="screen-container">
          <div class="bone">
            <web-gear
              teeth-amount="25"
              axis-radius="15"
              side-perforation-radius="8"
              side-perforation-amount="0"
              width="52"
            />
            <div class="screen" />
          </div>
        </div>
      </div>
    </section>

    <div class="bk-ornament" />
    <footer>
      <div class="clouds" />
      <div class="city" />
      <div class="mountains" />
    </footer>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
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
  methods: {
    movePage(movement) {
      if (this.contentIndex + movement > this.contentDB.length - 1) {
        this.contentIndex = 0;
      } else if (this.contentIndex + movement < 0) {
        this.contentIndex = this.contentDB.length - 1;
      } else {
        this.contentIndex += movement;
      }
    },
  },
  computed: {
    ...mapGetters({
      theme: "getTheme2014",
    }),
  },
});
</script>
