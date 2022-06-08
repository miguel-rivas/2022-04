<template>
  <nn-scroll-area color="royal-purple">
    <nn-container size="900">
      <header>
        <h1>{{ user.middleName }} {{ user.lastName }}</h1>
        <h2 v-html="$t('position')" />
      </header>

      <section class="column left">
        <h3>Contact</h3>

        <address>
          <dl>
            <dt>Website</dt>
            <dd>
              <a :href="user.website" v-html="user.website" />
            </dd>
            <dt>Email</dt>
            <dd>
              <a :href="'mailto:' + user.email" v-html="user.email" />
            </dd>
            <dt>Location</dt>
            <dd>{{ user.location.city }}, {{ user.location.state }}</dd>
            <dt>Phone Number</dt>
            <dd>
              <a :href="'tel:' + user.phone" v-html="user.phone" />
            </dd>
          </dl>
        </address>

        <h3>Skills</h3>

        <ul>
          <template v-for="(skill, pIndex) in skills">
            <li :key="skill + pIndex">
              {{ skill }}
            </li>
          </template>
        </ul>
      </section>

      <section class="column right">
        <h3>Experience</h3>

        <template v-for="(location, index) in locations">
          <article :key="location + index">
            <h4 v-html="$t(`canvas.section.map.modal.${location}.title`)" />
            <h5 v-html="$t(`canvas.section.map.modal.${location}.position`)" />
            <!-- <h6>
              <time v-html="location.date" />
            </h6> -->
            <ul>
              <template
                v-for="(p, pIndex) in $t(
                  `canvas.section.map.modal.${location}.summary`
                )"
              >
                <li :key="location + pIndex" v-html="p" />
              </template>
            </ul>
          </article>
        </template>

        <h3>Education</h3>

        <template v-for="(location, index) in education">
          <article :key="location + index">
            <h4 v-html="$t(`canvas.section.map.modal.${location}.title`)" />
            <h5 v-html="$t(`canvas.section.map.modal.${location}.position`)" />
            <!-- <h6>
              <time v-html="location.date" />
            </h6> -->
            <ul>
              <template
                v-for="(p, pIndex) in $t(
                  `canvas.section.map.modal.${location}.summary`
                )"
              >
                <li :key="location + pIndex" v-html="p" />
              </template>
            </ul>
          </article>
        </template>
      </section>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import { locationsDBList } from "../modules/format-db";
import { user } from "../db/user";
import { tool } from "../enums/tools";

const separator = "------------------------------------------";

export default Vue.extend({
  components: {},
  data: () => ({
    locationsDBList,
    locations: [
      "enovational",
      "plantTherapy",
      "pixel",
      "capital",
      "avante",
      "social",
      "several",
    ],
    education: ["itla"],
    user,
    skills: [
      tool.html,
      tool.pug,
      tool.slim,
      tool.haml,
      separator,
      tool.css,
      tool.scss,
      separator,
      tool.javascript,
      tool.jQuery,
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.react,
      tool.redux,
      tool.svelte,
      tool.angular,
      separator,
      tool.rails,
      separator,
      tool.grunt,
      tool.grunt,
      tool.webpack,
      separator,
      tool.bootstrap,
      separator,
      tool.git,
      separator,
      tool.firebase,
      separator,
      tool.photoshop,
      tool.gimp,
      tool.illustrator,
      tool.inkscape,
      tool.indesign,
      tool.scribus,
      tool.flash,
      tool.blender,
    ],
  }),
});
</script>