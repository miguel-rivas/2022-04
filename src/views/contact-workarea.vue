<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <h1>Contact</h1>
      <div class="nn-box">
        <template v-for="(item, itemIndex) in database">
          <nn-row :key="`itemIndex-${itemIndex}`">
            <nn-column size="100%">
              <btn
                size="md"
                :color="item.color"
                :text="item.title"
                tag="a"
                target="_blank"
                :href="item.link"
              />
            </nn-column>
          </nn-row>
        </template>
      </div>

      <footer class="nn-shade">
        <nn-crayon color="sunglow">
          <a :href="`mailto:${user.email}`">{{ user.email }}</a>
        </nn-crayon>
      </footer>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import toggleRow from "@/components/toggle-row.vue";
import { linksDB } from "@/db/links";
import { user } from "@/db/user";

export default Vue.extend({
  components: { toggleRow },
  data: () => ({
    database: linksDB,
    user,
  }),
});
</script>