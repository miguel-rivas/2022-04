<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(item, itemIndex) in videosDB")
        li.item(:key="`gallery${itemIndex}`")
          nn-row(vertical)
            nn-column
              video(:width="item.width", :height="item.height", controls)
                source(:src="item.url", type="video/mp4")
                | Your browser does not support the video tag.
            nn-column
              .nano-shade-box
                toggle-row.toggle-input(breakpoint="lg")
                  template(v-slot:header)
                    nn-column(size="100%-35")
                      h2 {{ item.title }}
                  template(v-slot:more)
                    nn-column(size="100%", table-element)
                      ul.skills
                        template(v-for="(skill, skillIndex) in item.skills")
                          li(:key="`gallerySkill${itemIndex}${skillIndex}`") {{ skill }}
                p: small Soundtrack: {{ item.soundtrack.artist }} - {{ item.soundtrack.song }}
</template>

<script>
import Vue from "vue";
import { videos } from "../db/videos";
import ToggleRow from "../components/toggle-row.vue";

export default Vue.extend({
  components: { ToggleRow },
  data: () => ({
    videosDB: videos,
  }),
});
</script>