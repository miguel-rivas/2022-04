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
            :src="getZapp('img/formability/top-secret-image.png')"
            width="650"
            class="preview"
            alt="Stamp"
          />
        </div>
        <div class="column">
          <h1>You don’t have permission to view this page.</h1>
          <p>You may need to contact your organization’s admin.</p>
          <a class="btn blue">Return to Dashboard</a>
        </div>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>