<template>
  <nn-scroll-area color="royal-purple">
    <section>
      <header>
        <nn-container size="1450">
          <nn-row>
            <nn-column size="40%">
              <h1>
                <strong>Hi!</strong>
                My Name is Miguel Rivas.
                <br />
                I'm a Frontend Developer living in Washington, DC.
              </h1>
              <input type="text" placeholder="Search Projects" />
            </nn-column>
          </nn-row>
        </nn-container>
        <three-obj mesh="studio_planet_05" />
      </header>
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
import ThreeObj from "../../components/three-obj.vue";
import { db2018 } from "../../db/projects-2018";

export default Vue.extend({
  components: { ThreeObj },
  data: () => ({
    db2018,
  }),
});
</script>