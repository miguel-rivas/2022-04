<template lang="pug">
nn-scroll-area(nn-no-horizontal="false", nn-color="royal-purple")
  header#hero
    img.logo(:src="getZapp(`img/voxel/logo-event.png`)", alt="Logo")
    img.info(:src="getZapp(`img/voxel/info.png`)", alt="Info")
    button.btn Ver Más Detalles
    .fx-cover
</template>