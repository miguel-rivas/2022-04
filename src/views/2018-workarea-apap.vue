<template>
  <section>
    <header>
      <nn-row>
        <nn-column size="40%">
          <nn-container>
            <img :src="getZapp('img/2018/logo/apap.png')" width="60" />
            <h1>Single Page Application</h1>
            <a
              href="https://player.vimeo.com/video/211801157"
              target="_blank"
              class="venobox"
            >
              <img :src="getZapp('img/2018/videos/apap.jpg')" class="video" />
            </a>
            <btn text="Go to the App" color="denim" />
          </nn-container>
        </nn-column>
      </nn-row>
    </header>
    <section class="content">
      <nn-container size="600">
        <section class="info">
          <h2>Brand Overview</h2>
          <p>
            The Popular Association of Savings and Loans (APAP) is a private
            financial institution, of a mutualist nature, created under the Law
            No. 5897, of May 14, 1962, with the objective of promoting savings
            for the financing of the purchase, construction and/or improvement
            of the family home.
          </p>
          <p>
            Beyond its traditional leadership in financing affordable and
            middle-class housing, and as part of its diversification strategy,
            APAP has extended its support to the most important productive
            sectors of the country, consolidating its participation in the
            Dominican financial system.
          </p>
        </section>
        <section class="info">
          <h2>My Role<small>Front-end Developer at Capital DBG</small></h2>
          <p>I was provided with a design mockup photoshop file initially.</p>
          <ul>
            <li>Defined project structure and boilerplates.</li>
            <li>
              Optimized and resized all the images to the minimum width &
              height.
            </li>
            <li>Built an icon set aligning with the brand’s design system.</li>
            <li>Used Jade, Sass and jQuery for the front-end development.</li>
            <li>Designed missing elements like loading.</li>
            <li>Defined metadata.</li>
          </ul>
          <div class="skills_box">
            <span>Jade</span><span>Sass</span><span>jQuery</span>
          </div>
        </section>
      </nn-container>
    </section>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({}),
});
</script>
