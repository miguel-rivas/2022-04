<template lang="pug">
.spirit-code
  code(v-html="textFormat")
</template>

<script>
import Vue from "vue";

function spirit(word, klaso) {
  return `<span class='sp-${klaso}'>${word}</span>`;
}

function spiritBegin(klaso) {
  return `<span class='sp-${klaso}'>`;
}

function spiritEnd() {
  return `</span>`;
}

function pugFormat(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/(\=\")/g, spirit("&#61;&#34;", "quote") + spiritBegin("value"))
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "quote"))
    .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("attr"))

    .replace(/\(/g, spirit("(", "tag") + spiritBegin("attr"))
    .replace(/\)/g, spiritEnd() + spirit(")", "tag"));
}

function hamlFormat(text) {
  return text
    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(
      /(\:&nbsp;\")/g,
      spirit(":&nbsp;&#34;", "quote") + spiritBegin("value")
    )
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "quote"))
    .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("attr"))

    .replace(/\{/g, spirit("{", "tag") + spiritBegin("attr"))
    .replace(/\}/g, spiritEnd() + spirit("}", "tag"));
}

function htmlFormat(text) {
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\//g, "&#47;")

    .replace(/\n/g, "<br>")
    .replace(/\s/g, "&nbsp;")

    .replace(/(\=\")/g, spirit("&#61;&#34;", "quote") + spiritBegin("value"))
    .replace(/(\")/g, spiritEnd() + spirit("&#34;", "quote"))
    .replace(/(?<=&lt;[a-z]{1,})&nbsp;/g, "&nbsp;" + spiritBegin("attr"))

    .replace(/(?<=&lt;)&#47;/g, spirit("&#47;", "tag"))
    .replace(/&lt;/g, spirit("&lt;", "tag"))
    .replace(/&#47;(?=&gt;)/g, spiritEnd() + spirit("&#47;", "tag"))
    .replace(/&gt;/g, spiritEnd() + spirit("&gt;", "tag"));
}

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
        return pugFormat(this.text);
      } else if (this.lang === "haml") {
        return hamlFormat(this.text);
      } else {
        return htmlFormat(this.text);
      }
    },
  },
});
</script>