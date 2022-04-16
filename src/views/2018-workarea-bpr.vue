<template>
  <section>
    <header>
      <nn-row>
        <nn-column size="40%">
          <nn-container>
            <img :src="getZapp('img/2018/logo/bpr.png')" />
            <h1>Website Development</h1>
            <btn text="Go to BPR Bank" color="denim" />
          </nn-container>
        </nn-column>
      </nn-row>
    </header>
    <section class="content">
      <nn-container size="600">
        <section class="info">
          <h2>Brand Overview</h2>
          <p>
            BPR Bank S.A. is an International License Bank established under the
            Laws and Regulations of the Republica de Panama, with its
            headquarters located at Costa Del Este Financial Park, 100FP Tower,
            Office 33A, Costa del Este Boulevard, City and District of Panama.
          </p>
        </section>
        <section class="info">
          <h2>My Role<small>Web Designer at Pixel Perfect Tree</small></h2>
          <p>I was provided with a design mockup photoshop file initially.</p>
          <ul>
            <li>Defined project structure and boilerplates.</li>
            <li>
              Installed the missing gems for <em>bootstrap</em> and
              <em>rail-sass</em>.
            </li>
            <li>
              Optimized and resized all the images to the minimum width &
              height.
            </li>
            <li>Used Haml, Sass and jQuery for the front-end development.</li>
            <li>
              Designed and implemented missing elements like OG image (Facebook
              preview), CMS login and loading.
            </li>
            <li>Defined metadata.</li>
          </ul>
          <div class="skills_box">
            <span>Haml</span>
            <span>Sass</span>
            <span>jQuery</span>
            <span>Bootstrap</span>
            <span>Git</span>
            <span>Rails</span>
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
