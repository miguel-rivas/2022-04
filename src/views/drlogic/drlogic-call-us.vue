<template lang="pug">
section.call-us(:class="color")
  .container
    .row
      .col-md-6
        h2 Need some Mac help?
        p Please drop us a line or pick up the phone and invite us round for a coffee.
        p We’re always happy to chat.
        a.btn.btn-default.white(href="#") Contact Us
        small
          | or Get in Touch With Us
          a.phone(href="#") 020 3642 6540
      .col-md-6
        img.preview(:src="getZapp('img/drlogic/mac-help.png')")
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "",
    },
  },
});
</script>