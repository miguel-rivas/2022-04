<template>
  <nn-scroll-area nn-color="royal-purple">
    <nn-container nn-size="900">
      <nn-row class="btn-gallery" nn-grid>
        <template v-for="(item, itemIndex) in database">
          <nn-column nn-size="200, 200" :key="itemIndex">
            <button class="nn-btn arcade" @click="playAudio(item)">
              <img :src="getZapp(`img/fakeaudience/${item}.svg`)" />
            </button>
          </nn-column>
        </template>
      </nn-row>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import toggleRow from "@/components/toggle-row.vue";
import { getZapp } from "@/modules/helpers";

export default Vue.extend({
  components: { toggleRow },
  data: () => ({
    database: [
      "applause",
      "laughing_crowd",
      "evil_laugh",
      "aww",
      "boo",
      "fart",
      "burp",
      "angry_cat",
      "crickets",
      "drum_roll",
      "rimshot",
    ],
    sound: {},
    getZapp,
  }),
  beforeDestroy() {
    this.stopAllsounds();
  },
  created() {
    this.database.forEach((item) => {
      this.sound[item] = new Audio(getZapp(`audio/fakeaudience/${item}.mp3`));
    });
  },
  methods: {
    playAudio(file) {
      this.stopAllsounds();
      this.sound[file].play();
    },
    stopAllsounds() {
      Object.values(this.sound).forEach((item) => {
        item.pause();
        item.currentTime = 0;
      });
    },
  },
});
</script>