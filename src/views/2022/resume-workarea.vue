<template>
  <nn-scroll-area color="royal-purple">
    <nn-container size="900">
      <header>
        <h1>{{ user.middleName }} {{ user.lastName }}</h1>
        <h2 v-html="$t('position')" />
      </header>

      <section class="column left">
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
              >{{ user.media.github.user }}</a>
            </dd>
          </dl>
        </address>

        <h3>{{ $t(`resume.skills`) }}</h3>

        <ul>
          <template v-for="(skill, pIndex) in skills">
            <li :key="skill + pIndex" v-html="skill" />
          </template>
        </ul>
      </section>

      <section class="column right">
        <h3>{{ $t(`resume.experience`) }}</h3>

        <template v-for="(location, index) in locations">
          <article :key="location + index">
            <h4 v-html="$t(`map.modal.${location}.title`)" />
            <h5 v-html="$t(`map.modal.${location}.position`)" />
            <h6>
              <time v-html="dates[location]" />
            </h6>
            <ul>
              <template
                v-for="(p, pIndex) in $t(`map.modal.${location}.summary`)"
              >
                <li :key="location + pIndex" v-html="p" />
              </template>
            </ul>
          </article>
        </template>

        <h3>{{ $t(`resume.education`) }}</h3>

        <template v-for="(location, index) in education">
          <article :key="location + index">
            <h4 v-html="$t(`map.modal.${location}.title`)" />
            <h5 v-html="$t(`map.modal.${location}.position`)" />
            <h6>
              <time v-html="dates[location]" />
            </h6>
            <ul>
              <template
                v-for="(p, pIndex) in $t(`map.modal.${location}.summary`)"
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
import { user } from "@/db/user";
import { tool } from "@/enums/tools";
import { LinkWeb } from "@/classes/project";

const separator = "";

export default Vue.extend({
  data: () => ({
    city: new LinkWeb("matryoshka/map", "App").path,
    locations: [
      "enovational",
      "plantTherapy",
      "pixel",
      "capital",
      "avante",
      // "social",
      "several",
    ],
    dates: {
      enovational: "2018/04/01",
      plantTherapy: "2017/07/01",
      pixel: "2016/01/01",
      capital: "2014/05/01",
      avante: "2013/07/05",
      social: "2013/05/01",
      several: "2013/01/01",
      itla: "2009/09/01",
    },
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
      tool.vue,
      tool.vuex,
      tool.vueRouter,
      tool.svelte,
      tool.react,
      tool.redux,
      tool.angular,
      tool.jQuery,
      separator,
      tool.git,
      separator,
      tool.cypress,
      separator,
      tool.firebase,
      separator,
      tool.rails,
      separator,
      tool.grunt,
      tool.gulp,
      tool.webpack,
      separator,
      tool.bootstrap,
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