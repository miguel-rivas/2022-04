<template lang="pug">
.spirit-code
  code(v-html="textFormat")
</template>

<script>
import Vue from "vue";
import { pug } from "nano-spirit/module/code-pug";
import { haml } from "nano-spirit/module/code-haml";
import { html } from "nano-spirit/module/code-html";

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: "",
    },
    lang: {
      type: String,
      default: "html",
    },
  },
  computed: {
    textFormat() {
      if (this.lang === "pug") {
        return pug(this.text);
      } else if (this.lang === "haml") {
        return haml(this.text);
      } else if (this.lang === "html") {
        return html(this.text);
      }
    },
  },
});
</script>