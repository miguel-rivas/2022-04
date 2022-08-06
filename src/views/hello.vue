<template>
  <nn-scroll-area color="royal-purple" :class="getCity" horizontal="false">
    <title>Hello {{ getName }}</title>
    <aside class="texture"></aside>
    <header>
      <h1>
        Hello<strong>{{ getName }}</strong>
      </h1>
      <img :src="getZapp(`img/2016/cloud.webp`)" class="cloud c01" />
      <img :src="getZapp(`img/2016/cloud.webp`)" class="cloud c02" />
    </header>
    <section class="letter">
      <div class="container">
        <p>hi!</p>
        <template v-for="(paragraph, index) in letter">
          <p :key="index" v-html="paragraph" />
        </template>
      </div>
    </section>
    <section class="projects">
      <img :src="getZapp(`img/2016/cloud.webp`)" class="cloud c03" />
      <div class="city" />
    </section>

    <footer>
      <div class="link">
        <a :href="user.website" target="_blank" class="icon">
          <nn-icon glyph="globe"/>
        </a>
        <a :href="user.codepen" target="_blank" class="icon">
          <nn-icon glyph="codepen"/>
        </a>
        <a :href="user.linkedin" target="_blank" class="icon">
          <nn-icon glyph="linkedin"/>
        </a>
      </div>
    </footer>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { letter, user } from "@/db/hello";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

export default Vue.extend({
  data: () => ({
    letter,
    user,
  }),
  computed: {
    getCity() {
      return urlParams.get("city");
    },
    getName() {
      return urlParams.get("name");
    },
  },
});
</script>