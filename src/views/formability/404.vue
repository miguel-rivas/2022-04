<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <header>
        <img
          :src="getZapp('img/formability/logo-formability-white.svg')"
          alt="Logo Formability"
          width="130"
        />
      </header>

      <div class="grid">
        <div class="column">
          <img
            :src="getZapp('img/formability/search-image.png')"
            width="650"
            class="preview"
            alt="Lupa"
          />
        </div>
        <div class="column">
          <h1>We can’t find the page you’re looking for.</h1>
          <p>
            Either the page you are looking for no longer exists or its name has
            been changed.
          </p>
          <a class="btn blue">Return to Dashboard</a>
        </div>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>