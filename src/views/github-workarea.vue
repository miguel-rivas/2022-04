<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <ul class="img-gallery">
        <template v-for="(item, itemIndex) in database">
          <li v-bind:key="itemIndex" class="item icon-item">
            <nn-row>
              <nn-column size="100%, 150">
                <nn-icon glyph="github" />
              </nn-column>
              <nn-column size="100%">
                <br />
                <div class="nano-shade-box">
                  <toggle-row class="toggle-input">
                    <template v-slot:header>
                      <nn-column size="100%-35">
                        <h2 v-html="item.title" />
                      </nn-column>
                    </template>
                    <template v-slot:more>
                      <nn-column size="100%" table-element>
                        <ul class="skills">
                          <template>
                            <template
                              v-for="(summary, summaryIndex) in item.summary"
                            >
                              <li
                                v-bind:key="`summaryIndex-${summaryIndex}`"
                                v-html="summary"
                              />
                            </template>
                          </template>
                        </ul>
                      </nn-column>
                    </template>
                  </toggle-row>

                  <p>
                    <small v-html="item.description" />
                  </p>

                  <ul class="navigation">
                    <li>
                      <btn
                        size="md"
                        color="royal-purple"
                        text="Visit"
                        tag="a"
                        target="_blank"
                        :href="item.link"
                      />
                    </li>
                  </ul>
                </div>
              </nn-column>
            </nn-row>
          </li>
        </template>
      </ul>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import toggleRow from "../components/toggle-row.vue";
import { githubDB } from "../db/github";

export default Vue.extend({
  components: { toggleRow },
  data: () => ({
    database: githubDB,
  }),
});
</script>