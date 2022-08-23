<template>
  <nn-container>
    <nav>
      <p>{{ title }}</p>
      <nn-btn
        :glyph="openMenu ? 'close' : 'bars'"
        mode="ghost"
        :color="openMenu ? 'persian-red' : 'shamrock'"
        class="menu-toggle"
        :class="{ 'open-menu': openMenu }"
        @click="toggleMenu()"
      />
      <ul ref="menu">
        <template v-for="(link, linkIndex) in links">
          <li :key="linkIndex" @click="openMenu = false">
            <router-link :to="link.route">{{ link.caption }}</router-link>
          </li>
        </template>
        <slot />
      </ul>
    </nav>
  </nn-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      default: "",
      type: String,
    },
    links: {
      default: [],
      type: Array,
    },
  },
  data: () => ({
    openMenu: false,
  }),
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
});
</script>