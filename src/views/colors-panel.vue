<template lang="pug">
.capsule
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('ui.section.colors.panel.buttons.legend') }}
      nn-row
        nn-column(size="100%")
          ul.buttons
            template(v-for="(color, colorIndex) in gColorsDB")
              li(v-bind:key="colorIndex")
                btn(
                  tag="span",
                  :color="color.spinalCase",
                  :text="color.spinalCase"
                )
</template>

<script>
import Vue from "vue";
import { gColorsDB } from "../db/colors";

export default Vue.extend({
  data: () => ({
    gColorsDB,
  }),
});
</script>