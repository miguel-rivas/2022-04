<template>
  <div class="gallery" v-if="database.length > 0">
    <nn-container nn-size="1450" nn-spacing="4">
      <template v-for="(project, projectIndex) in database">
        <article :key="projectIndex" class="nn-box">
          <nn-row :nn-spacing="100" nn-breakpoint="lg">
            <nn-column nn-size="60%">
              <template>
                <img
                  width="1050"
                  height="551"
                  :src="project.image && project.image.src"
                  :alt="`${project.client} ${project.turingDate}`"
                />
              </template>
            </nn-column>
            <nn-column nn-size="40%">
              <nn-scroll-area color="royal-purple">
                <h1 v-html="project.title" />
                <h2
                  v-if="project.title !== project.client"
                  v-html="project.client"
                />
                <h3>
                  <time v-html="project.turingDate" />
                </h3>
                <ul class="list">
                  <template v-for="(li, liIndex) in project.list">
                    <li :key="liIndex">
                      {{ li }}
                    </li>
                  </template>
                </ul>
                <ul class="skills">
                  <template v-for="(li, liIndex) in project.tools">
                    <li :key="liIndex">
                      {{ li }}
                    </li>
                  </template>
                </ul>

                <ul
                  class="summary"
                  v-if="project.children && project.children.length > 0"
                >
                  <summary-row
                    v-for="(project2, projectIndex2) in project.children"
                    :key="`projectIndex2-${projectIndex2}`"
                    :project="project2.id"
                  >
                    <ul
                      class="summary"
                      v-if="
                        allDBObj[project2.id].children &&
                        allDBObj[project2.id].children.length > 0
                      "
                    >
                      <summary-row
                        v-for="(project3, projectIndex3) in allDBObj[
                          project2.id
                        ].children"
                        :key="`projectIndex3-${projectIndex3}`"
                        :project="project3.id"
                      >
                        <ul
                          class="summary"
                          v-if="
                            allDBObj[project3.id].children &&
                            allDBObj[project3.id].children.length > 0
                          "
                        >
                          <summary-row
                            v-for="(project4, projectIndex4) in allDBObj[
                              project3.id
                            ].children"
                            :key="`projectIndex4-${projectIndex4}`"
                            :project="project4.id"
                          >
                          </summary-row>
                        </ul>
                      </summary-row>
                    </ul>
                  </summary-row>
                </ul>
              </nn-scroll-area>
            </nn-column>
          </nn-row>
        </article>
      </template>
    </nn-container>
  </div>
  <div v-else class="loading">
    <nn-icon nn-glyph="duck" />
    <p v-html="'Loading Projects'" />
  </div>
</template>

<script>
import Vue from "vue";
import summaryRow from "./summary.vue";
import { getNewID } from "@/modules/helpers";
import { allDBObj } from "@/modules/format-db";

export default Vue.extend({
  components: { summaryRow },
  props: {
    db: {
      type: Array,
    },
  },
  data: () => ({
    allDBObj,
    getNewID,
  }),
  computed: {
    database() {
      return this.db;
    },
  },
});
</script>