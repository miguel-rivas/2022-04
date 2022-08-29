<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(resource, resourceIndex) in db")
        li.item(:key="resourceIndex")
          nn-row
            nn-column.preview(size="100%, 250")
              nn-icon(:glyph="db.icono")
            nn-column(size="100%")
              nn-btn(:href="db.url", :text="db.titulo", color="royal-purple")
</template>

<script>
import Vue from "vue";
import { resources } from "@/db/resources";

export default Vue.extend({
  data: () => ({
    db: resources,
  }),
});
</script>