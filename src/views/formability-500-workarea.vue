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
            :src="getZapp('img/formability/toolbox-wood.png')"
            width="650"
            class="preview"
            alt="Toolbox"
          />
        </div>
        <div class="column">
          <h1>An error occurred</h1>
          <p>
            We’ve sent up the signal to our team and we’re on a mission to fix
            whatever’s broken.
          </p>
          <a class="btn blue">Return to Dashboard</a>
        </div>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>