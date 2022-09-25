<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(item, itemIndex) in videosDB")
        li.item(:key="`gallery${itemIndex}`")
          nn-row
            nn-column(nn-size="100%")
              iframe(
                :width="item.width",
                :height="item.height",
                :src="`https://www.youtube.com/embed/${item.url}`",
                :title="item.title",
                frameborder="0",
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen
              )
              .nano-shade-box
                toggle-row.toggle-input
                  template(v-slot:header)
                    nn-column(nn-size="100%-35")
                      h2 {{ item.title }}
                  template(v-slot:more)
                    nn-column(nn-size="100%", table-element)
                      ul.skills
                        template(v-for="(skill, skillIndex) in item.skills")
                          li(:key="`gallerySkill${itemIndex}${skillIndex}`") {{ skill }}
                p: small Soundtrack: {{ item.soundtrack.artist }} - {{ item.soundtrack.song }}
</template>

<script>
import Vue from "vue";
import { videos } from "@/db/videos";
import ToggleRow from "@/components/toggle-row.vue";

export default Vue.extend({
  components: { ToggleRow },
  data: () => ({
    videosDB: videos,
  }),
});
</script>