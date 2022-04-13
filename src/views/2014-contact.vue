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
        :x="-mX * 0.008"
        :y="mX * 0.005"
        class="st4 left"
        translation="500, 180"
      />
      <web-star
        :x="mX * 0.008"
        :y="mX * 0.005"
        class="st4 right"
        translation="500, 180"
      />

      <web-star
        :x="-mX * 0.004"
        :y="-mY * 0.006"
        class="st3 left"
        translation="350, 350"
      />
      <web-star
        :x="mX * 0.004"
        :y="-mY * 0.006"
        class="st3 right"
        translation="350, 350"
      />

      <web-star
        :x="-mY * 0.005"
        :y="mX * 0.002"
        class="st2 left"
        translation="470, 300"
      />
      <web-star
        :x="mY * 0.005"
        :y="mX * 0.002"
        class="st2 right"
        translation="470, 300"
      />

      <web-star
        :x="-mX * 0.006"
        :y="mY * 0.005"
        class="st5 left"
        translation="400, 30"
        star-radius="70"
        inner-radius="35"
      />
      <web-star
        :x="mX * 0.006"
        :y="mY * 0.005"
        class="st5 right"
        translation="400, 30"
        star-radius="70"
        inner-radius="35"
      />
      <web-star
        :x="-mY * 0.002"
        :y="mX * 0.003"
        class="st1 left"
        translation="350, 200"
        star-radius="40"
        inner-radius="20"
      />
      <web-star
        :x="mY * 0.002"
        :y="mX * 0.003"
        class="st1 right"
        translation="350, 200"
        star-radius="40"
        inner-radius="20"
      />
    </div>
    <div
      class="bird b1"
      :style="`transform: translate(${mX * -0.005}px, ${mY * -0.007}px)`"
    />
    <div
      class="bird b2"
      :style="`transform: translate(${mY * -0.003}px, ${mX * 0.002}px)`"
    />
    <div
      class="bird b3"
      :style="`transform: translate(${mX * 0.009}px, ${mY * -0.008}px)`"
    />
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
  },
  mounted() {
    window.addEventListener("mousemove", this.moveObjects);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.moveObjects);
  },
});
</script>