<template>
  <nn-scroll-area color="royal-purple">
    <section>
      <section class="gallery">
        <template v-for="(item, index) in db2018">
          <a :class="item.bgColor" :key="index">
            <img :src="getZapp(`img/preview/3d/${item.preview}.webp`)" />
            <div class="hover">
              <h2>
                {{ item.title }} /<em> {{ item.type }}</em>
                <time>{{ item.date }}</time>
              </h2>
              <ul>
                <template v-for="(tool, toolIndex) in item.summary">
                  <li :key="`toolIndex-${index}-${toolIndex}`">{{ tool }}</li>
                </template>
              </ul>
            </div>
          </a>
        </template>
      </section>
    </section>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { db2018 } from "@/db/projects-2018";

export default Vue.extend({
  data: () => ({
    db2018,
  }),
});
</script>