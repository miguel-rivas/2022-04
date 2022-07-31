<template>
  <li class="table" role="table">
    <div role="rowgroup" class="table-body">
      <toggle-row>
        <template v-slot:header>
          <template v-if="!allDBObj[project].filter.includes('group')">
            <nn-column
              table-element
              size="100%-35"
              v-html="allDBObj[project].title"
            />
          </template>
          <template v-else>
            <nn-column table-element size="100%-35" v-html="'Summary'" />
          </template>
        </template>
        <template v-slot:more>
          <nn-column table-element size="100%" v-if="allDBObj[project]">
            <h2 v-html="allDBObj[project].client" />
            <h3
              v-if="!allDBObj[project].filter.includes('group')"
              v-html="$t(allDBObj[project].types)"
            />
            <h4>
              <time v-html="allDBObj[project].turingDate" />
            </h4>
            <ul class="skills">
              <template>
                <template
                  v-for="(projectTool, projectToolIndex) in allDBObj[project]
                    .tools"
                >
                  <li
                    :key="`projectToolIndex-${projectToolIndex}`"
                    v-html="projectTool"
                  />
                </template>
              </template>
            </ul>
            <ul v-if="allDBObj[project].links.length" class="navigation">
              <template
                v-for="(projectLink, projectLinkIndex) in allDBObj[project]
                  .links"
              >
                <li :key="`projectLinkIndex-${projectLinkIndex}`">
                  <btn
                    tag="a"
                    size="md"
                    color="royal-purple"
                    target="_blank"
                    :href="projectLink.path"
                    :text="projectLink.text"
                  />
                </li>
              </template>
            </ul>
          </nn-column>
          <nn-column table-element size="100%" v-if="hasSlots">
            <slot />
          </nn-column>
        </template>
      </toggle-row>
    </div>
  </li>
</template>

<script>
import Vue from "vue";
import toggleRow from "./toggle-row.vue";
import { allDBObj } from "@/modules/format-db";

export default Vue.extend({
  components: { toggleRow },
  props: {
    project: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    hasSlots: undefined,
    allDBObj,
  }),
  mounted() {
    this.hasSlots = this.$slots.default?.length;
  },
});
</script>