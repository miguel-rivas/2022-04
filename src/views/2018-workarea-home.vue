<template>
  <section>
    <header>
      <nn-row>
        <nn-column size="40%">
          <nn-container>
            <h1>
              Hi, My name is Miguel Rivas.<br />I'm a Frontend Developer living
              in Washington, DC.
            </h1>
            <input type="text" placeholder="Filter Projects By" />
          </nn-container>
        </nn-column>
      </nn-row>
    </header>
    <section class="gallery">
      <template v-for="(item, index) in allDBListVisible">
        <a class="designfront" :key="index">
          <img :src="item.image" />
          <div class="hover">
            <h2>
              {{ item.title }} /<em> {{ item.type }}</em>
              <time>{{ item.turingDate }}</time>
            </h2>
            <ul>
              <template v-for="(tool, toolIndex) in item.tools">
                <li :key="`toolIndex-${index}-${toolIndex}`">{{ tool }}</li>
              </template>
            </ul>
          </div>
        </a>
      </template>
    </section>
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
