<template>
  <section class="contact">
    <div class="form-container">
      <img src="/img/2014/form-header.png" alt="" class="form-header" />
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="topic" cols="30" rows="10" placeholder="Message" />
        <btn color="emerald" text="Send" mode="flat" />
      </form>

      <web-star
        class="st4 left"
        star-radius="55"
        translation="500, 180"
        :style="posObj(-mX * 0.008, mX * 0.005)"
      />
      <web-star
        class="st4 right"
        star-radius="55"
        translation="500, 180"
        :style="posObj(mX * 0.008, mX * 0.005)"
      />
      <web-star
        class="st3 left"
        translation="350, 350"
        :style="posObj(-mX * 0.004, -mY * 0.006)"
      />
      <web-star
        class="st3 right"
        translation="350, 350"
        :style="posObj(mX * 0.004, -mY * 0.006)"
      />
      <web-star
        class="st2 left"
        star-radius="45"
        translation="470, 300"
        :style="posObj(-mY * 0.005, mX * 0.002)"
      />
      <web-star
        class="st2 right"
        star-radius="45"
        translation="470, 300"
        :style="posObj(mY * 0.005, mX * 0.002)"
      />
      <web-star
        class="st5 left"
        translation="400, 30"
        star-radius="60"
        inner-radius="35"
        :style="posObj(-mX * 0.006, mY * 0.005)"
      />
      <web-star
        class="st5 right"
        translation="400, 30"
        star-radius="60"
        inner-radius="35"
        :style="posObj(mX * 0.006, mY * 0.005)"
      />
      <web-star
        class="st1 left"
        translation="350, 200"
        star-radius="40"
        inner-radius="20"
        :style="posObj(-mY * 0.002, mX * 0.003)"
      />
      <web-star
        class="st1 right"
        translation="350, 200"
        star-radius="40"
        inner-radius="20"
        :style="posObj(mY * 0.002, mX * 0.003)"
      />
    </div>
    <div class="bird b1" :style="posObj(mX * -0.005, mY * -0.007)" />
    <div class="bird b2" :style="posObj(mY * -0.003, mX * 0.002)" />
    <div class="bird b3" :style="posObj(mX * 0.009, mY * -0.008)" />
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => ({
    mX: 1,
    mY: 1,
  }),
  methods: {
    moveObjects(event) {
      this.mX = parseInt(event.clientX) || 1;
      this.mY = parseInt(event.clientY) || 1;
    },
    posObj(x, y) {
      return `transform: translate(${x}px, ${y}px)`;
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.moveObjects);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.moveObjects);
  },
});
</script>