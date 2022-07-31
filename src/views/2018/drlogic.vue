<template>
  <section>
    <header>
      <nn-row breakpoint="md">
        <nn-column size="40%">
          <nn-container>
            <img :src="getZapp('img/2018/logo/drlogic.webp')" />
            <h1>Website Redesign</h1>
            <a
              href="https://player.vimeo.com/video/207152756"
              target="_blank"
              class="venobox"
            >
              <img
                :src="getZapp('img/2018/videos/drlogic.webp')"
                class="video"
              />
            </a>
            <btn text="Go to DrLogic" color="denim" />
          </nn-container>
        </nn-column>
      </nn-row>
    </header>
    <section class="content">
      <section class="info">
        <nn-container size="600">
          <h2>Brand Overview</h2>
          <p>
            In 1986, Dr Logic got his hands on his first Mac and so began a
            lifelong obsession with Apple. In 2003 he started Dr Logic and over
            time, gathered together like-minded techies who wanted to do cool
            stuff with IT.
          </p>
          <p>
            Dr Logic has built a reputation for helping creative companies with
            all things Mac-related. And for being that little bit different.
            We’re based in Clerkenwell and we support companies across London.
          </p>
        </nn-container>
      </section>
      <section class="preview">
        <img :src="getZapp('img/preview/3d/drlogic-home.webp')" />
        <img
          :src="getZapp('img/preview/3d/drlogic-about.webp')"
          class="keep_mobile"
        />
        <img :src="getZapp('img/preview/3d/drlogic-portfolio.webp')" />
        <img
          :src="getZapp('img/preview/3d/drlogic-contact.webp')"
          class="keep_mobile"
        />
        <img
          :src="getZapp('img/preview/3d/drlogic-404.webp')"
          class="keep_mobile"
        />
      </section>
      <section class="info">
        <nn-container size="600">
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
              preview), page 404, loading and terms and conditions’s document.
            </li>
            <li>
              Implemented alongside the lead developer a new way to defined
              metadata for every project.
            </li>
            <li>Defined metadata.</li>
          </ul>
          <div class="skills_box">
            <span>Haml</span><span>Sass</span><span>jQuery</span
            ><span>Bootstrap</span><span>Git</span><span>Rails</span>
          </div>
        </nn-container>
      </section>
    </section>
    <section class="footer">
      <blockquote cite="https://www.linkedin.com/in/miguel-rivas-b576bb74/">
        <p>
          Miguel worked on the development of our company website during 2016
          Developing the animation in the page headers for the main site pages.
          He also worked on the design of a charges calculator and some
          additional site logos.
        </p>
        <p>
          Miguel has an eye for detail and completes work to a high standard. He
          has a thorough understanding of client requirements and is able to
          interpret and execute these efficiently and effectively.
        </p>
        <small>Jennie Elliott<span>Marketing Manager at DrLogic</span></small>
      </blockquote>
    </section>
    <section class="gallery">
      <a class="mint">
        <img :src="getZapp('img/preview/3d/drlogic-home.webp')" />
        <div class="hover">
          <p>GO TO DRLOGIC'S HOME PAGE</p>
        </div>
      </a>
      <a class="purple">
        <img :src="getZapp('img/preview/3d/drlogic-404.webp')" />
        <div class="hover">
          <p>GO TO DRLOGIC'S PAGE 404</p>
        </div>
      </a>
      <a class="orange">
        <img :src="getZapp('img/preview/3d/drlogic-contact.webp')" />
        <div class="hover">
          <p>GO TO DRLOGIC'S CONTACT PAGE</p>
        </div>
      </a>
      <a class="salmon">
        <img :src="getZapp('img/preview/3d/drlogic-about.webp')" />
        <div class="hover">
          <p>GO TO DRLOGIC'S ABOUT US PAGE</p>
        </div>
      </a>
      <a class="blue">
        <img :src="getZapp('img/preview/3d/terms.webp')" />
        <div class="hover">
          <p>SEE DRLOGIC'S TERMS</p>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({}),
});
</script>
