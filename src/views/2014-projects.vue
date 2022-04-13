<template>
  <section class="projects">
    <nn-scroll-area color="burn-orange">
      <nn-container width="1450" class="gallery">
        <template v-for="(entry, entryIndex) in allDBListVisible">
          <article class="nano-box" :key="entryIndex">
            <nn-row spacing="4" breakpoint="lg">
              <nn-column size="3/5">
                <img :src="entry.image" :alt="entry.header + ' preview'" />
              </nn-column>
              <nn-column size="2/5">
                <h2 v-html="entry.clients[0]" />
                <h3 v-html="entry.title" />
                <h4 v-html="$t(entry.types)" />
                <h5>
                  <time v-html="entry.turingDate" />
                </h5>
                <ul class="skills" v-if="entry.tools.length > 0">
                  <template v-for="(li, liIndex) in entry.tools">
                    <li :key="liIndex">{{li}}</li>
                  </template>
                </ul>
              </nn-column>
            </nn-row>
          </article>
        </template>
      </nn-container>
    </nn-scroll-area>
  </section>
</template>

<script>
import Vue from "vue";
import { allDBListVisible } from "../modules/format-db";

export default Vue.extend({
  data: () => ({
    allDBListVisible,
  }),
});
</script>