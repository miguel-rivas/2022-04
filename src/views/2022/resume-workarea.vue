<template>
  <nn-scroll-area nn-color="royal-purple">
    <nn-container nn-size="900">
      <header>
        <h1>{{ user.middleName }} {{ user.lastName }}</h1>
        <h2 v-html="user.title" />
      </header>

      <nn-row nn-breakpoint="md">
        <nn-column nn-size="35%">
          <h3>Contact</h3>

          <address>
            <dl>
              <dt>Website</dt>
              <dd>
                <a :href="'https://' + user.website">
                  {{ user.website }}
                </a>
              </dd>
              <dt>Email</dt>
              <dd>
                <a :href="'mailto:' + user.email">
                  {{ user.email }}
                </a>
              </dd>
              <dt>Location</dt>
              <dd>
                <a
                  href="https://www.google.com/maps/@38.9107121,-77.0471487,16z"
                  target="_blank"
                >
                  {{ user.location.city }},
                  {{ user.location.state }}
                </a>
              </dd>
              <dt>Phone Number</dt>
              <dd>
                <a :href="'tel:' + user.phoneLink">{{ user.phone }}</a>
              </dd>
              <dt>Github</dt>
              <dd>
                <a
                  :href="`https://github.com/${user.media.github.user}`"
                  target="_blank"
                  >{{ user.media.github.user }}</a
                >
              </dd>
            </dl>
          </address>

          <h3>Skills</h3>

          <ul>
            <template v-for="(skill, pIndex) in skills">
              <li :key="skill + pIndex" v-html="skill" />
            </template>
          </ul>
        </nn-column>

        <nn-column nn-size="65%">
          <h3 class="sr-only">Experience</h3>

          <template v-for="(location, index) in locations">
            <article :key="location + index">
              <h3 v-html="location.title" />
              <h4>
                {{ location.jobTitle }}
                <time
                  :class="`date${location.date.split('/')[0]}`"
                  v-html="location.date.split('/')[0]"
                />
              </h4>
              <ul>
                <template v-for="(p, pIndex) in location.list">
                  <li :key="location + pIndex" v-html="p" />
                </template>
              </ul>
              <nn-icon nn-glyph="circle-o" />
            </article>
          </template>
        </nn-column>
      </nn-row>
    </nn-container>
    <footer class="nn-shade">
      <nn-btn
        nn-mode="flat"
        nn-color="gold-tips"
        nn-text="Download Resume"
        @click="printPage()"
      />
    </footer>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { user } from "@/db/user";
import { tool } from "@/enums/tools";
import { LinkWeb } from "@/classes/project";
import { resumeDBList } from "@/modules/format-db";

// const separator = "";

export default Vue.extend({
  data: () => ({
    city: new LinkWeb("matryoshka/map", "App").path,
    locations: resumeDBList,
    user,
    skills: [
      tool.html,
      tool.pug,
      // tool.slim,
      // tool.haml,
      // separator,
      tool.css,
      tool.scss,
      // separator,
      tool.javascript,
      tool.vue,
      // tool.vuex,
      // tool.vueRouter,
      tool.svelte,
      tool.react,
      // tool.redux,
      // tool.angular,
      // tool.jQuery,
      // separator,
      tool.git,
      // separator,
      tool.cypress,
      tool.storybook,
      // separator,
      tool.firebase,
      // separator,
      // tool.rails,
      // separator,
      tool.grunt,
      tool.gulp,
      tool.webpack,
      // separator,
      tool.bootstrap,
      // separator,
      tool.figma,
      tool.photoshop,
      tool.gimp,
      tool.illustrator,
      tool.inkscape,
      // tool.indesign,
      // tool.scribus,
      tool.flash,
      tool.blender,
    ],
  }),
  methods: {
    printPage() {
      window.print();
    },
  },
});
</script>