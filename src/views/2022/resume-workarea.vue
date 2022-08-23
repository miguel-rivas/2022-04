<template>
  <nn-scroll-area color="royal-purple">
    <nn-container size="900">
      <header>
        <h1>{{ user.middleName }} {{ user.lastName }}</h1>
        <h2 v-html="$t('position')" />
      </header>

      <nn-row breakpoint="md">
        <nn-column size="35%">
          <h3>{{ $t(`resume.contact`) }}</h3>

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
                <a :href="city" target="_blank">
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

          <h3>{{ $t(`resume.skills`) }}</h3>

          <ul>
            <template v-for="(skill, pIndex) in skills">
              <li :key="skill + pIndex" v-html="skill" />
            </template>
          </ul>
        </nn-column>

        <nn-column size="65%">
          <h3 class="sr-only">{{ $t(`resume.experience`) }}</h3>

          <template v-for="(location, index) in locations">
            <article :key="location + index">
              <h3 v-html="location.title" />
              <h4>
                {{ location.position }}
              <time :class="`date${location.date.split('/')[0]}`" v-html="location.date.split('/')[0]" />
              </h4>
              <ul>
                <template v-for="(p, pIndex) in location.summary">
                  <li :key="location + pIndex" v-html="p" />
                </template>
              </ul>
              <nn-icon glyph="circle-o" />
            </article>
          </template>
        </nn-column>
      </nn-row>
    </nn-container>
    <footer class="nn-shade">
      <nn-btn color="gold-tips" text="Download Resume" @click="printPage()" />
    </footer>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { user } from "@/db/user";
import { tool } from "@/enums/tools";
import { LinkWeb } from "@/classes/project";

const separator = "";

export default Vue.extend({
  data: () => ({
    city: new LinkWeb("matryoshka/map", "App").path,
    locations: [
      {
        title: "Enovational",
        date: "2018/04/01",
        position: "Frontend Developer",
        summary: [
          `Build government apps with ${tool.html}/${tool.slim}, ${tool.sass}, ${tool.bootstrap} and ${tool.jQuery}/${tool.vue} on a ${tool.rails} environment with ${tool.webpack}.`,
          `Make sure applications are following conventions and extending them according to the complexity of the project and frameworks being used.`,
          `Collaborate with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers and Business Analysts to improve usability.`,
        ],
      },
      {
        title: "Plant Therapy",
        date: "2017/07/01",
        position: "Graphic Web Designer",
        summary: [
          `Build prototypes and landing pages with ${tool.pug}, ${tool.sass}, ${tool.jQuery} and ${tool.miva}.`,
          `Maintain and optimize the website.`,
          `Create wireframes and users flow with ${tool.illustrator}.`,
        ],
      },
      {
        title: "Pixel Perfect Tree",
        date: "2016/01/01",
        position: "Frontend Developer",
        summary: [
          `Design and develop applications with ${tool.haml}, ${tool.sass}, ${tool.bootstrap}, ${tool.jQuery}/${tool.react} on a ${tool.rails} environment with ${tool.webpack}.`,
          `Collaborate with Full Stack Developers and Project Managers to improve usability.`,
        ],
      },
      {
        title: "Capital",
        date: "2014/05/01",
        position: "Frontend Developer",
        summary: [
          `Build applications with ${tool.pug}, ${tool.sass}, ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
          `Create wireframes and users flow with ${tool.illustrator}.`,
          `Collaborate with Backend Developers, Designers and Project Managers to improve usability.`,
          `Animate ad banners for websites with ${tool.flash}.`,
          `Create motion graphics for social media with ${tool.flash}.`,
        ],
      },
      {
        title: "Avante Marketing",
        date: "2013/07/05",
        position: "Web Designer",
        summary: [
          `Design and build applications with ${tool.html}, ${tool.css}, ${tool.jQuery} on a ${tool.php} environment.`,
        ],
      },
      {
        title: "Social Network",
        date: "2013/05/01",
        position: "Web Designer",
        summary: [
          `Design applications UI with ${tool.illustrator}.`,
          `Design social media assets with ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
        ],
      },
      {
        title: "Studio Several",
        date: "2013/01/01",
        position: "Graphic Designer",
        summary: [
          `Retouch pictures with ${tool.photoshop}`,
          `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
        ],
      },
      {
        title: "Instituto Tecnologico de las Americas",
        date: "2009/09/01",
        position: "Asociates of Art, Multimedia",
        summary: [
          "Digital Illustration",
          "Visual Communication",
          "Bitmap Graphics",
          "Vector Graphics",
          "Desktop Publishing",
          "Digital Video",
          "Website Creation",
          "Flash Animation with Action Script",
          "3D Graphics & Animation",
          "Digital Audio",
          "Branding",
        ],
      },
    ],
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