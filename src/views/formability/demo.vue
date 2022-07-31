<template lang="pug">
section
  .content
    h1 Demo Title
    p: time Demo Date

  figure
    .hq
      .base
        .arm
          .anthena
            img(
              :src="getZapp('img/formability/base_anthena.png')",
              alt="Anthena"
            )
          img(
            :src="getZapp('img/formability/base_arm.png')",
            alt="Robotic Bone"
          )
        img(
          :src="getZapp('img/formability/base.png')",
          alt="Formability Headquarters"
        )

  .clouds
    .cloud.c01: img(
      :src="getZapp('img/formability/cloud-1.png')",
      alt="Picture of the Cloud in the sky"
    )
    .cloud.c02: img(
      :src="getZapp('img/formability/cloud-2.png')",
      alt="Picture of the Cloud in the sky"
    )
    .cloud.c03: img(
      :src="getZapp('img/formability/cloud-1.png')",
      alt="Picture of the Cloud in the sky"
    )
    .cloud.c04: img(
      :src="getZapp('img/formability/cloud-2.png')",
      alt="Picture of the Cloud in the sky"
    )
    .cloud.c05: img(
      :src="getZapp('img/formability/cloud-1.png')",
      alt="Picture of the Cloud in the sky"
    )
    .cloud.c06: img(
      :src="getZapp('img/formability/cloud-2.png')",
      alt="Picture of the Cloud in the sky"
    )
</template>