<template>
  <aside class="modal" :class="{ 'hidden-modal': modal.hidden }">
    <div class="modal-bk" v-on:click.self="closeModal">
      <div
        class="modal-body"
        :style="{ width: `${width}px`, maxWidth: `100%` }"
      >
        <div class="modal-header">
          <nn-row>
            <nn-column nn-size="100%-35">
              <slot name="header" />
            </nn-column>
            <nn-column nn-size="35">
              <btn color="persian-red" glyph="times" @click="closeModal" />
            </nn-column>
          </nn-row>
        </div>
        <nn-scroll-area color="royal-purple">
          <slot name="body" />
        </nn-scroll-area>
        <div class="modal-footer">
          <btn color="gold-tips" :text="ctaCaption" @click="closeModal" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    width: {
      type: Number,
      default: 800,
    },
    ctaCaption: {
      type: String,
      default: "Close Modal",
    },
  },
  data: () => ({
    modal: {},
  }),
  mounted() {
    this.modal = this.$store.getters.getModal;
  },
  methods: {
    closeModal() {
      this.modal.hidden = true;
    },
  },
});
</script>