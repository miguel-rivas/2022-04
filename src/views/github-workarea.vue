<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <template v-for="(item, itemIndex) in database">
        <nn-row :key="`itemIndex-${itemIndex}`">
          <nn-column size="100%">
            <btn
              size="md"
              :color="item.color"
              :text="item.title"
              tag="a"
              :glyph="item.glyph"
              target="_blank"
              :href="item.link"
            />
          </nn-column>
        </nn-row>
      </template>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import toggleRow from "../components/toggle-row.vue";
import { linksDB } from "../db/github";

export default Vue.extend({
  components: { toggleRow },
  data: () => ({
    database: linksDB,
  }),
});
</script>