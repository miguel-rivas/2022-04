<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-row.row-block
    nn-column(size="100%")
      legend {{$t(panelTitle)}}
      nn-row
        nn-column(size="100%")
          ul.summary
            template(v-for="(route, routeIndex) in links")
              li(v-bind:key="routeIndex")
                nn-row
                  nn-column(size="35")
                    btn(
                      tag="span",
                      mode="flat"
                      :color="route.name.includes($route.name) ? 'green-pea' : 'charcoal'",
                      :glyph="route.icon",
                      :to="route.name[0]"
                    )
                  nn-column(size="100%-35")
                    btn(
                      tag="span",
                      color="gravel"
                      mode="flat"
                      :active="route.name.includes($route.name)",
                      :text="$t(route.text)",
                      :to="route.name[0]"
                    )
  router-view(name="panel2")
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    panelTitle: {
      type: String,
      default: "",
    },
    links: {
      type: Array,
      default: () => ([]),
    }
  },
});
</script>