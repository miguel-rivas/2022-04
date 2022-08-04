<template>
  <nn-scroll-area color="royal-purple" :class="theme">
    <section class="projects">
      <nn-container width="1450" class="gallery">
        <template v-for="(entry, entryIndex) in allDBListWithImages">
          <article class="nn-box" :key="entryIndex">
            <nn-row spacing="4" breakpoint="lg">
              <nn-column size="3/5">
                <img :src="entry.image.src" :alt="entry.header + ' preview'" />
              </nn-column>
              <nn-column size="2/5">
                <h2 v-html="entry.clients" />
                <h3 v-html="entry.title" />
                <h4 v-html="$t(entry.types)" />
                <h5>
                  <time v-html="entry.turingDate" />
                </h5>
                <ul class="skills" v-if="entry.tools.length > 0">
                  <template v-for="(li, liIndex) in entry.tools">
                    <li :key="liIndex">{{ li }}</li>
                  </template>
                </ul>
              </nn-column>
            </nn-row>
          </article>
        </template>
      </nn-container>
    </section>
    <div class="bk-ornament" />
    <footer>
      <div class="clouds" />
      <div class="city" />
      <div class="mountains" />
    </footer>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { allDBListWithImages } from "@/modules/format-db";
import { mapGetters } from "vuex";

export default Vue.extend({
  data: () => ({
    allDBListWithImages,
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme2014",
    }),
  },
});
</script>