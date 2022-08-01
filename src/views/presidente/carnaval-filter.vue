<template lang="pug">
nn-scroll-area(color="royal-purple")
  #filtro
  #logo
  #formulario
    .fix
      input#edad(type="text", v-model="edad")
      button#entrar(@click="validateAge()") ENTRAR
  footer#footer © 2015 - EL CONSUMO DE ALCOHOL PERJUDICA LA SALUD
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    data: () => ({
    edad: "",
  }),
  methods: {
    validateAge(){
      if (+this.edad > 17) {
        this.$router.push({ name: 'presidente-carnaval-home' });
      }
    }
  },
});
</script>