<template>
  <nn-scroll-area color="royal-purple">
    <nn-container size="900">
      <div class="title">
        <h1>Fake Audience</h1>
        <p>
          For those people who are alone in this pandemic and just want someone
          who laugh at their jokes.
        </p>
      </div>
      <nn-row class="btn-gallery" grid>
        <template v-for="(item, itemIndex) in database">
          <nn-column size="200, 200" :key="itemIndex">
            <button class="btn arcade" @click="playAudio(item)">
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
import toggleRow from "../components/toggle-row.vue";
import { getZapp } from "../modules/helpers";

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
  created() {
    this.database.forEach((item) => {
      this.sound[item] = new Audio(getZapp(`audio/fakeaudience/${item}.mp3`));
    });
  },
  methods: {
    playAudio(file) {
      Object.values(this.sound).forEach(item => {
        item.pause();
        item.currentTime = 0;
      })
      this.sound[file].play();
    },
  },
});
</script>