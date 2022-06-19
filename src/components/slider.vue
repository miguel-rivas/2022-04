<template lang="pug">
nn-row
  nn-column(size="100%", v-if="label")
    label(:for="$attrs.id", v-html="label")
  nn-column(size="100%")
    nn-row(group)
      nn-column(size="100%-60")
        input(
          :class="'nn-range ' + inputColor",
          v-bind="$attrs",
          type="range",
          v-model="val",
          @change="updateValue()"
        )
      nn-column(size="60")
        input.nn-input(
          type="number",
          :min="$attrs.min",
          :max="$attrs.max",
          v-model="val",
          @change="updateValue()"
        )
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "cobalt-blue",
    },
    value: {
      type: Number,
    },
    label: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    val: 0,
  }),
  computed: {
    inputColor(){
      return "nn-" + this.color;
    }
  },
  methods: {
    updateValue() {
      this.$emit("update-value", this.val);
    },
  },
  created() {
    this.val = this.value;
  },
});
</script>