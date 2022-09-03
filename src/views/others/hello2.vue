<template lang="pug">
nn-scroll-area(color="royal-purple", horizontal="false")
  header
    img.flyObj.spaceship(:src="getZapp('img/hello2/spaceship.png')")
    h1
      | Hello
      strong {{ params.name || "human" }}

  main
    section.planets
      .glow_01.flyObj

      img.flyObj.saturn(:src="getZapp('img/hello2/saturn.png')")
      .glow_03.flyObj.rtl
        .base
          span.point_01
          span.point_02
          span.point_03

    section.letter
      .glow_02.flyObj.rtr

      .textbox
        p hi!
        template(v-for="(paragraph, index) in letter")
          p(:key="index", v-html="paragraph")

      img.flyObj.uranus.rtr(:src="getZapp('img/hello2/uranus.png')")

    section.projects
      h2
        | Some
        strong Projects

      button.drlogic
        img(:src="getZapp('img/hello2/dr-logic.png')")

      button.timeline
        img(:src="getZapp('img/hello2/evolution.png')")

      button.presidente
        img(:src="getZapp('img/hello2/presidente.png')")

      img.flyObj.comet.comet_01(:src="getZapp('img/hello2/comet_01.png')")
      img.flyObj.comet.comet_02(:src="getZapp('img/hello2/comet_02.png')")
      img.flyObj.comet.comet_03(:src="getZapp('img/hello2/comet_03.png')")
      img.flyObj.glow_04.rtr(:src="getZapp('img/hello2/glow_01.png')")
      .sun.rtl

    footer
      .textbox.t03
        .link
          a.icon: nn-icon(glyph="globe")
          a.icon: nn-icon(glyph="codepen")
          a.icon: nn-icon(glyph="linkedin")
        a.mail
          | jmiguelrivassantos@gmail.com
</template>

<script>
import Vue from "vue";
import { letter } from "@/db/hello";
import { mapGetters } from "vuex";

export default Vue.extend({
  data: () => ({
    letter
  }),
  computed: {
    ...mapGetters({
      params: "getParams",
    }),
  },
});
</script>