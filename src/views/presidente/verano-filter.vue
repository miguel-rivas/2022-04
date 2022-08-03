<template>
  <nn-scroll-area color="royal-purple">
    <main>
      <img :src="getZapp('img/presidente/verano/logo.png')" class="logo" />
      <h1>¿CUÁL es tu edad?</h1>
      <p>para acceder debes de ser mayor de 18 años</p>
      <div id="door_area">
        <div class="base">
          <div class="front">
            <div class="panel">
              <input type="text" class="text_box" />
            </div>
            <a href="javascript:void(0)" class="btn_send">Entrar</a>
          </div>
          <div class="top"></div>
        </div>
      </div>
    </main>

    <footer>
      © 2015. TODOS LOS DERECHOS RESERVADOS. CERVEZA PRESIDENTE. EL CONSUMO DE
      ALCOHOL PERJUDICA LA SALUD.
    </footer>
  </nn-scroll-area>
</template>