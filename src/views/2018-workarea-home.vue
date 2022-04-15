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
    <section class="new">
      <nn-row grid>
        <template v-for="(item, index) in allDBListWithImages">
          <nn-column size="1/4" :key="index" class="d-view" :class="item.types ? bkColor[item.types] : 'red'">
            <img :src="item.image" />
            <div class="hover">
              <h2>
                {{ item.title }} /<em> {{ $t(item.types) }}</em>&nbsp;
                <time>{{ item.turingDate }}</time>
              </h2>
              <ul>
                <template v-for="(tool, toolIndex) in item.tools">
                  <li :key="`toolIndex-${index}-${toolIndex}`">{{ tool }}</li>
                </template>
              </ul>
            </div>
          </nn-column>
        </template>
      </nn-row>
    </section>
    <!-- <section class="gallery">
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
    </section> -->
  </section>
</template>

<script>
import Vue from "vue";
import { allDBListWithImages } from "../modules/format-db";

export default Vue.extend({
  data: () => ({
    allDBListWithImages,
    bkColor: {
      "enum.projectsType.app": "blue",
      "enum.projectsType.prototype": "blue",
      "enum.projectsType.landingPage": "blue",

      "enum.projectsType.module": "red",
      "": "red",

      "enum.projectsType.animation3D": "aqua",
      "enum.projectsType.motionGraphics": "aqua",

      "enum.projectsType.document": "yellow",
      "enum.projectsType.socialMedia": "yellow",
      "enum.projectsType.graphicDesign": "yellow",

      "enum.projectsType.userFlow": "yellow",
      "enum.projectsType.wireFrame": "yellow",
      "enum.projectsType.location": "aqua",
    }
  }),
});
</script>

<style lang="scss" scoped>
section.new {
  perspective: 2000px;
}
.d-view {
  overflow: hidden;
  position: relative;
  height: 22vw;
  &.yellow {
    background-color: hsl(49deg 92% 54%);
    }
  &.red {
    background-color: hsl(0deg 100% 65%);
  }
  &.aqua {
    background-color: hsl(154deg 93% 47%);
    }
  &.blue {
    background-color: hsl(198deg 75% 52%);
  }
  img {
    width: 170%;
    transition: all ease 300ms;
    transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg);
    position: absolute;
    transform-style: preserve-3d;
    bottom: 0;
    right: -60%;
    filter: drop-shadow(-8px 9px 11px rgba(0, 0, 0, 0.41));
  }

  > .hover {
    transition: 300ms ease opacity;
    background-color: inherit;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 1rem;

    h2 {
      font-size: 26px;
      color: #000;
      padding: 30px 5px 12px 40px;
      margin: 0;
      text-transform: uppercase;

      em {
        font-size: 80%;
        font-style: normal;
      }
      time {
        font-weight: 300;
        font-size: 65%;
        display: inline;
      }
    }

    ul {
      font-size: 16px;
      list-style: none;
      padding-left: 65px;
      margin: 0;

      li {
        background-color: #000;
        padding: 2px;
        color: #fff;
        margin: 3px;
        text-transform: uppercase;
      }
    }
  }

  &:hover {
    > img {
      opacity: 0.5;
      transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg) translateX(-20px)
        translateY(10px);
    }
    > .hover {
      opacity: 0.8;
    }
  }
}
</style>