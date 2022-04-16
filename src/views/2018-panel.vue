<template>
  <div class="capsule">
    <nn-row class="row-block">
      <nn-column size="100%">
        <legend>Navigation</legend>
        <nn-row>
          <nn-column size="100%">
            <ul class="summary">
              <template v-for="(route, routeIndex) in navigation">
                <li :key="routeIndex">
                  <nn-row>
                    <nn-column size="35">
                      <btn
                        :to="route.path"
                        color="cobalt-blue"
                        :glyph="route.icon"
                      />
                    </nn-column>
                    <nn-column size="100%-35">
                      <btn
                        :to="route.path"
                        color="mariner"
                        :text="route.text"
                      />
                    </nn-column>
                  </nn-row>
                </li>
              </template>
            </ul>
          </nn-column>
        </nn-row>
      </nn-column>
    </nn-row>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    navigation: [
      {
        icon: "collections",
        text: "Home",
        path: "2018-home",
      },
      {
        icon: "save",
        text: "DrLogic",
        path: "2018-drlogic",
      },
      {
        icon: "beer",
        text: "Presidente",
        path: "2018-presidente",
      },
      {
        icon: "coin-dollar",
        text: "Apap",
        path: "2018-apap",
      },
      {
        icon: "coin-dollar",
        text: "BPR Bank",
        path: "2018-bpr",
      },
    ],
  }),
});
</script>