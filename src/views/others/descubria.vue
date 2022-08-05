<template lang="pug">
nn-scroll-area(color="royal-purple", :class="theme")
  nav.hour(@click="openMenu = !openMenu", :class="{on: openMenu}")
    button.clock: img(:src="getZapp('img/descubria/clock.png')")
    ul
      li: button(@click="theme = 'night'"): img(:src="getZapp('img/descubria/night.png')")
      li: button(@click="theme = 'sunset'"): img(:src="getZapp('img/descubria/sunset.png')")
      li: button(@click="theme = 'day'"): img(:src="getZapp('img/descubria/day.png')")

  .city
    .sky_section
      .planes.p01
      .planes.p02
      .planes.p03

    a.informatica
    a.aeropuerto
    a.arte
    a.banco
    a.bomberos
    a.cocinita
    a.construccion
    a.farmacia
    a.supermercado
    a.teatro
    a.base
      .city_gate

    .gate_section
      .gate
      .car

  .ground
</template>

<script>
import Vue from "vue";
import $ from "jquery";

export default Vue.extend({
  data: () => ({
    theme: 'night',
    openMenu: false,
  }),
  methods: {
    cursorXY(e) {
      let cx = e.clientX;
      let cy = e.clientY;
      let fobj = [".planes.p01", ".planes.p02", ".planes.p03"];

      $(fobj[0]).css({ left: cx * 0.04, top: 0 + cy * -0.05 });
      $(fobj[1]).css({ right: cx * -0.02, top: 0 + cy * 0.07 });
      $(fobj[2]).css({ right: cx * 0.02, top: 0 - cy * 0.03 });
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