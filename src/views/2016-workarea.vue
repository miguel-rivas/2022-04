<template>
  <div class="nested-app p2016" :class="[theme]">
    <aside class="texture" />
    <nn-scroll-area horizontal="false" color="royal-purple">
      <header>
        <h1>Hello<strong></strong></h1>
        <img :src="getZapp('img/2016/cloud.webp')" class="cloud c01" />
        <img :src="getZapp('img/2016/cloud.webp')" class="cloud c02" />
      </header>
      <section id="aboutme" class="letter">
        <div class="container">
          <p>hi!</p>
          <h2>
            My name is Miguel Rivas,
            <small>I'm a Frontend Developer living in Las Vegas, NV</small>
          </h2>
          <p>
            I'm a big fan of children's books with outstanding design and
            illustrations. One of my favorites is "Black Book of Colors" which
            tries to explain colors to blind people.
          </p>
          <p>
            Usually, I work with PUG (HTML), SASS (CSS), and the Adobe Suite
            (Illustrator, Photoshop, Indesign, Flash and Premiere). I also love
            Git and have been known to roll up my sleeves and work with basic
            Ruby on Rails and PHP to push the project forward.
          </p>
        </div>
      </section>
      <section class="projects">
        <img :src="getZapp('img/2016/cloud.webp')" class="cloud c03" />
        <div class="city">
          <div class="giant"></div>
          <div class="mountains"></div>
        </div>
      </section>
      <section class="ground">
        <div class="grass">
          <div class="gallery" id="projects">
            <template v-for="(item, itemIndex) in projects">
              <img
                width="200"
                height="200"
                :src="getZapp(`img/preview/square/${item}.webp`)"
                :key="`nav-${itemIndex}`"
              />
            </template>
          </div>
          <img :src="getZapp('img/2016/ribbon.webp')" class="ribbon" />
        </div>
        <img
          :src="getZapp('img/2016/landing_earth_ornament_top.webp')"
          class="top"
        />
        <div class="body"></div>
        <div class="bottom">
          <div class="pattern_02"></div>
          <div class="pattern_01"></div>
        </div>
      </section>
      <section class="references">
        <img
          :src="getZapp('img/2016/landing_wall ornament big.webp')"
          class="ornament_01"
        />
        <img
          :src="getZapp('img/2016/landing_wall ornament small.webp')"
          class="ornament_02"
        />
        <div class="content">
          <h2 id="references">References</h2>
          <template v-for="(item, itemIndex) in references">
            <article :key="`nav-${itemIndex}`">
              <img :src="getZapp(`img/2016/${item.img}.webp`)" class="preview" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </template>
        </div>
      </section>
    </nn-scroll-area>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    projects: [
      "apap",
      "book",
      "bprbank",
      "car",
      "drlogic",
      "drlogic_404",
      "flatcss",
      "pills",
      "ppt_404",
      "ppt_500",
      "ptf-01",
      "ptf-02",
      "ptf-03",
      "ptf-04",
      "ptf-05",
      "ptf-06",
      "ptf-07",
      "ptf-08",
      "ptf-09",
      "ptf-10",
      "ptf-11",
      "ptf-carnaval",
      "ptf-html-love",
      "ptf-loader",
      "ptf-photo-presidente",
      "ptf-svg",
      "ptf-tetravex",
      "ptf-verano",
      "tips",
      "videos",
    ],
    references: [
      {
        img: "rene",
        title: "René Olivo",
        description: "Digital Director Capital DBG",
      },
      {
        img: "josue",
        title: "Josue Abreu",
        description: "CEO/Co-founder at Pixel Perfect Tree",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme2016",
    }),
  },
});
</script>