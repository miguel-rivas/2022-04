<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  section#home
    section.intro.home
      .copywrite
        h1 Mac IT support
        p We provide Mac IT support for nice companies who like to do things differently.
        p Established in 2003, we’re passionate about all things Apple.
        p We have a simple mission: to help our clients to do amazing things with IT.

      img.table-mobile(:src="getZapp('img/drlogic/home/table-mobile.png')")

      .animation-intro
        .office
          .table
          img.hand01.object.back(
            :src="getZapp('img/drlogic/home/hand-01.png')"
          )
          img.hand02.object.back(
            :src="getZapp('img/drlogic/home/hand-02.png')"
          )
          img.hand03.object.front(
            :src="getZapp('img/drlogic/home/hand-03.png')"
          )
          img.hand04.object.back(
            :src="getZapp('img/drlogic/home/hand-04.png')"
          )
          img.leg.object.front(:src="getZapp('img/drlogic/home/leg.png')")
          img.guy.object.front(:src="getZapp('img/drlogic/home/guy.png')")
          img.pc.object(:src="getZapp('img/drlogic/home/computer.png')")
          img.folder.front.object(
            :src="getZapp('img/drlogic/home/folder.png')"
          )
          img.pointer.front.object(
            :src="getZapp('img/drlogic/home/pointer.png')"
          )
          img.head.object.front(:src="getZapp('img/drlogic/home/head.png')")
          img.head-02.object.front(
            :src="getZapp('img/drlogic/home/head-02.png')"
          )

      .lamp-area.left
        .lamp
          .bulb
      .lamp-area.right
        .lamp
          .bulb
      .wireframe

    section.body
      .bend
        .container
          article
            .contain
              img(:src="getZapp('img/drlogic/home/body/it-support.png')")
              h2 Mac IT support
              p We’ll work in partnership with you to become your own IT department, proactively helping you improve your IT as well as solving day-to-day issues.
            a.btn.btn-primary.blue-02(href="about-us.html") Meet our team

          article
            .contain
              img(:src="getZapp('img/drlogic/home/body/it-consulting.png')")
              h2 IT services for business
              p Dr Logic can help your business, by offering impartial advice on everything from phone systems, data backup and storage to email & web hosting, networking and high-speed broadband.
            a.btn.btn-primary.blue-02(href="#") Find out more

          article
            .contain
              img(:src="getZapp('img/drlogic/home/body/it-services.png')")
              h2 IT projects &amp; consulting
              p Whatever Mac IT issue your business is facing, we’ll work with you to find a realistic and affordable solution.
            a.btn.btn-primary.blue-02(href="contact-us.html") Contact Us

    drlogic-call-us(color="olive")
    drlogic-footer
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import drlogicCallUs from "./drlogic-call-us.vue";
import drlogicFooter from "./drlogic-footer.vue";

export default Vue.extend({
  components: { drlogicFooter, drlogicCallUs },
  methods: {
    cursorXY(e) {
      let cx = e.clientX;
      let cy = e.clientY;
      let fobj = ["#home .wireframe"];
      let pointY = -50;
      $(fobj[0]).css({
        bottom: pointY + (cy + cx) * 0.01,
      });
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.cursorXY);
    window.addEventListener("resize", this.cursorXY);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.cursorXY);
    window.removeEventListener("resize", this.cursorXY);
  },
});
</script>