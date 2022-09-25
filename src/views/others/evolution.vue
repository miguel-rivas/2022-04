<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  .evolution
    #texture
    #bk

    nav#menu
      a(href="#beginning") &lt;
      | --
      a(href="#Beginning60s") 1960
      | --
      a(href="#Beginning80s") 1980
      | --
      a(href="#Beginning90s") 1990
      | --
      a(href="#Beginning2000s") 2000
      | --
      a(href="#Beginning2010s") 2010
      | --
      a(href="#end") &gt;

    template(v-for="(item, itemIndex) in news")
      article(
        :key="itemIndex",
        :id="item.article.id",
        :class="item.article.classes"
      )
        h1(v-if="item.h1", v-html="item.h1")
        h2(v-if="item.h2", v-html="item.h2")
        h3(v-if="item.h3", v-html="item.h3")
        template(v-for="(p, pIndex) in item.p")
          p(v-html="p", :key="pIndex")
        img.significante(
          v-if="item.img",
          :id="item.img.id",
          :src="getZapp(`img/evolution/03_${item.img.id}.png`)",
          :style="item.img.style",
          :class="item.img.frontPos ? 'front' : 'back'",
          :data-stellar-ratio="item.img.ratio"
        )
        svg-border(v-if="item.article.classes.includes('beginning')")
        mountain(v-if="item.article.classes.includes('header')")
</template>

<script>
import Vue from "vue";
import { news } from "@/db/evolution";
import svgBorder from "@/svg/border";
import mountain from "@/svg/mountain";

export default Vue.extend({
  components: { svgBorder, mountain },
  data: () => ({
    news: news,
  }),
  mounted() {
    let npag = news.length;
    document
      .querySelectorAll(".evolution, #bk, #texture")
      .forEach((item) => (item.style.width = `${100 * npag}vw`));
  },
});
</script>