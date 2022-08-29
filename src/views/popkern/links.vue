<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(resource, resourceIndex) in db")
        li.icon-item.item(:key="resourceIndex")
          nn-row
            nn-column.preview(size="100%, 250")
              nn-icon(:glyph="resource.icono")
            nn-column(size="100%")
              btn(:href="resource.url", tag="a" :text="resource.titulo", color="royal-purple", target="_blank")
              p.nn-label(v-html="resource.descripcion")
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