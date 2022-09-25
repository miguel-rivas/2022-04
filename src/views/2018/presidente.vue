<template>
  <nn-scroll-area color="royal-purple">
    <section>
      <header>
        <nn-row>
          <nn-column nn-size="50%">
            <nn-container>
              <img :src="getZapp('img/2018/logo/carnaval.webp')" class="logo" />
              <h1>Event Landing Page</h1>
              <btn text="Go to Website" color="green-pea" />
            </nn-container>
          </nn-column>
        </nn-row>
      </header>
      <section class="content">
        <nn-container nn-size="600">
          <section class="info">
            <h2>Brand Overview</h2>
            <p>
              Presidente Beer is a symbol of Dominican quality. An authentic
              expression of freshness, fun and youth. An emblem of popular
              culture that has remained relevant in Dominican society for over
              80 years.
            </p>
            <p>
              Among Dominicans, enjoying a “Presidente Cold Beer“ is like
              watching a baseball game. President beer's brand is hip, vibrant
              and full of energy.
            </p>
          </section>
          <section class="info">
            <h2>My Role<small>Front-end Developer at Capital DBG</small></h2>
            <p>I was provided initially with a photoshop design mockup.</p>
            <ul>
              <li>Defined project structure and boilerplates.</li>
              <li>Set the environment to work with GruntJs.</li>
              <li>
                Optimized and resized all the images to the minimum width &
                height.
              </li>
              <li>Built an icon set aligned with the brand’s design system.</li>
              <li>
                Used HTML, Sass and JavaScript for the front-end development.
              </li>
              <li>
                Designed missing elements like OG image (Facebook preview) and
                loading.
              </li>
              <li>Defined metadata.</li>
            </ul>
            <div class="skills_box">
              <span>HTML</span><span>Sass</span><span>jQuery</span
              ><span>ColorBox</span><span>GruntJs</span><span>PHP</span>
            </div>
          </section>
        </nn-container>
        <img :src="getZapp('img/2018/beer.webp')" class="beer big" />
        <img :src="getZapp('img/2018/beer.webp')" class="beer small" />
      </section>
      <section class="footer">
        <article class="website">
          <h3>pageviews</h3>
          <p>116,072</p>
        </article>
        <a href="https://youtu.be/4C5gvqLIR6k" target="_blank" class="venobox">
          <img :src="getZapp('img/2018/videos/carnaval.webp')" class="video" />
        </a>

        <template v-for="(item, index) in infographic">
          <article class="snetwork" :key="index">
            <nn-container nn-size="600">
              <nn-row>
                <nn-column nn-size="100">
                  <nn-icon :nn-glyph="item.icon" />
                </nn-column>

                <nn-column nn-size="50%-75" v-if="item.engagement">
                  <h3>Engagement</h3>
                  <p>{{ item.engagement }}</p>
                </nn-column>

                <nn-column nn-size="50%-25" v-if="item.accounts">
                  <h3>Accounts</h3>
                  <p>{{ item.accounts }}</p>
                </nn-column>

                <nn-column nn-size="50%-75" v-if="item.interactions">
                  <h3>Interactions</h3>
                  <p>{{ item.interactions }}</p>
                </nn-column>
              </nn-row>
            </nn-container>
          </article>
        </template>
      </section>
      <section class="gallery">
        <h1>OTHER PROJECTS</h1>
        <a target="_blank" class="pronosticos_ux">
          <img :src="getZapp('img/preview/3d/presidente-carnaval.webp')" />
          <div class="hover">
            <p>GO TO CARNAVAL PRESIDENTE 2015</p>
          </div>
        </a>
        <a target="_blank" class="presidente_filter">
          <img :src="getZapp('img/preview/3d/filtro_carnaval.webp')" />
          <div class="hover">
            <p>GO TO CARNAVAL PRESIDENTE 2015'S FILTER</p>
          </div>
        </a>
        <a target="_blank" class="coro_app">
          <img :src="getZapp('img/preview/3d/coroapp.webp')" />
          <div class="hover">
            <p>GO TO DESTAPA EL CORO’S BETA TEST</p>
          </div>
        </a>
        <a target="_blank" class="coro_flow">
          <img :src="getZapp('img/preview/3d/userflow.webp')" />
          <div class="hover">
            <p>SEE DESTAPA EL CORO’S USER FLOW</p>
          </div>
        </a>
        <a target="_blank" class="photo_app">
          <img :src="getZapp('img/preview/3d/photo.webp')" />
          <div class="hover">
            <p>GO TO PHOTO ASSIGMENT’S APP</p>
          </div>
        </a>
        <a target="_blank" class="pronosticos_ux">
          <img :src="getZapp('img/preview/3d/pronosticos.webp')" />
          <div class="hover">
            <p>SEE PRONOSTICO’S WIREFRAME</p>
          </div>
        </a>
        <a target="_blank" class="presidente_loader">
          <img :src="getZapp('img/preview/3d/presidente-loader.webp')" />
          <div class="hover">
            <p>SEE PRESIDENTE’S LOADER</p>
          </div>
        </a>
        <a target="_blank" class="presidente_filter">
          <img :src="getZapp('img/preview/3d/filter.webp')" />
          <div class="hover">
            <p>SEE PRESIDENTE’S FILTER</p>
          </div>
        </a>
      </section>
    </section>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    infographic: [
      {
        icon: "facebook",
        engagement: "462,687",
        accounts: "7,492,584",
      },
      {
        icon: "twitter",
        engagement: "37,716",
        accounts: "137,398,592",
      },
      {
        icon: "instagram",
        interactions: "95,821",
      },
    ],
  }),
});
</script>
