<template>
  <nn-scroll-area color="royal-purple" :class="params.city" horizontal="false">
    <aside class="texture"></aside>
    <header>
      <h1>
        Hello<strong>{{ params.name }}</strong>
      </h1>
      <img :src="getZapp(`img/2016/cloud.webp`)" class="cloud c01" />
      <img :src="getZapp(`img/2016/cloud.webp`)" class="cloud c02" />
    </header>
    <section class="letter">
      <nn-container size="600">
        <p>hi!</p>
        <template v-for="(paragraph, index) in letter">
          <p :key="index" v-html="paragraph" />
        </template>
      </nn-container>
    </section>
    <section class="projects">
      <img :src="getZapp(`img/2016/cloud.webp`)" class="cloud c03" />
      <div class="city" />
    </section>

    <footer>
      <div class="link">
        <a :href="`https://${user.website}`" target="_blank" class="icon">
          <nn-icon glyph="globe" />
        </a>
        <a
          :href="`https://codepen.io/${user.media.codepen.user}`"
          target="_blank"
          class="icon"
        >
          <nn-icon glyph="codepen" />
        </a>
        <a
          :href="`https://www.linkedin.com/in/${user.media.linkedin.user}`"
          target="_blank"
          class="icon"
        >
          <nn-icon glyph="linkedin" />
        </a>
      </div>
    </footer>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { letter } from "@/db/hello";
import { user } from "@/db/user";
import { mapGetters } from "vuex";

export default Vue.extend({
  data: () => ({
    letter,
    user,
  }),
  computed: {
    ...mapGetters({
      params: "getParams",
    }),
  },
});
</script>