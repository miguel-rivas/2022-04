<template>
  <nn-scroll-area color="royal-purple">
    <section id="mainSite">
      <header>
        <img
          :src="getZapp('img/presidente/retrobrindis/logo.png')"
          alt="logo brindis"
        />
      </header>

      <section id="conectarFB" class="active">
        <h1 class="rotZ">
          durante 80 años, hemos brindado con orgullo<br />por los logros de
          nuestro país.
        </h1>
        <hr class="rotZ" />
        <p class="rotZ">si pudieras transportarte al pasado,</p>
        <p class="rotZ">¿por cuál de estos logros brindarías?</p>
        <button class="btn_next">
          <img
            width="250"
            :src="getZapp('img/presidente/retrobrindis/facebook.png')"
            alt="conectar"
          />
        </button>
      </section>

      <section id="chooseSex">
        <hr class="rotZ" />
        <h1 class="rotZ">
          ¡brinda por los logros<br />que marcaron una época pasada!
        </h1>
        <hr class="rotZ" />
        <span class="hlight">selecciona tu género</span>
        <br />
        <button class="btn_next">
          <img :src="getZapp('img/presidente/retrobrindis/male.png')" />
        </button>
        <button class="btn_next">
          <img :src="getZapp('img/presidente/retrobrindis/female.png')" />
        </button>
      </section>

      <section id="chooseYear">
        <h1 class="rotZ">
          ¡brinda por los logros que marcaron una época pasada!
        </h1>
        <span class="hlight2 rotZ">escoge un logro</span>

        <div class="options">
          <hr />

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1935.png')" />
            </div>
            <span>1935</span>
            <p>lanzamiento de la presidente</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1944.png')" />
            </div>
            <span>1944</span>
            <p>Centenario de la Independencia Nacional</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1946.png')" />
            </div>
            <span>1946</span>
            <p>El Verdadero Sabor se exporta</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1958.png')" />
            </div>
            <span>1958</span>
            <p>Aparecen los Six Packs de Presidente</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1969.png')" />
            </div>
            <span>1969</span>
            <p>La fría se disfruta a color en la TV dominicana</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1970.png')" />
            </div>
            <span>1970</span>
            <p>Presidente llega a Estados Unidos</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1971.png')" />
            </div>
            <span>1971</span>
            <p>Ganamos la primera Serie del Caribe</p>
          </a>

          <a href="#" class="a1973 btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1973.png')" />
            </div>
            <span>1973</span>
            <p>
              Presidente gana reconocimiento en las olimpíadas cerveceras de NY
            </p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/1997.png')" />
            </div>
            <span>1997</span>
            <p>¡Llega el Festival Presidente de Música Latina!</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/2005.png')" />
            </div>
            <span>2005</span>
            <p>Llega la Suave con Caracter</p>
          </a>

          <a href="#" class="btn_next">
            <div>
              <img :src="getZapp('img/presidente/retrobrindis/2013.png')" />
            </div>
            <span>2013</span>
            <p>¡Ganamos el Clásico Mundial de béisbol!</p>
          </a>

          <hr />
        </div>
      </section>

      <section id="uploadPicture">
        <h1 class="rotZ">
          ¡brinda por los logros que marcaron una época pasada!
        </h1>
        <hr class="rotZ" />

        <h2>1944</h2>
        <p>Celebración del Centenario de la Independencia</p>
        <hr />

        <div class="leftColumn mergeBox">
          <img
            class="marco"
            :src="getZapp('img/presidente/retrobrindis/male_pic.png')"
          />
          <!-- <img
            class="profile"
            :src="getZapp('img/presidente/retrobrindis/profile.jpg')"
          /> -->
        </div>
        <div class="rightColumn">
          <p>Sube una foto en formato JPEG o PNG</p>
          <p>que no exceda los 3MB de tamaño.</p>
          <hr />
          <button class="btn_next">
            <span class="icon upload"></span>subir foto
          </button>
          <button class="btn_next">
            <span class="icon facebook"></span>buscar en mi facebook
          </button>
        </div>

        <hr />
      </section>

      <section id="setPicture">
        <h1 class="rotZ">
          ¡brinda por los logros que marcaron una época pasada!
        </h1>
        <hr class="rotZ" />

        <h2>1944</h2>
        <p>Celebración del Centenario de la Independencia</p>
        <hr />

        <div class="leftColumn mergeBox">
          <img
            class="marco"
            :src="getZapp('img/presidente/retrobrindis/male_pic.png')"
          />
        </div>
        <div class="rightColumn">
          <p>Edita tu foto hasta que ajuste</p>
          <p>en el espacio.</p>
          <hr />
          <button class="btnController btn_zoom_in">
            <nn-icon glyph="plus" />
          </button>
          <button class="btnController btn_zoom_out">
            <nn-icon glyph="minus" />
          </button>
          <button class="btnController btn_rotate_left">
            <nn-icon glyph="rotate-left" />
          </button>
          <button class="btnController btn_rotate_right">
            <nn-icon glyph="rotate-left" flip />
          </button>
          <hr />
          <button class="btnController btn_left">
            <nn-icon glyph="arrow-chevron" direction="left" />
          </button>
          <button class="btnController btn_up">
            <nn-icon glyph="arrow-chevron" direction="up" />
          </button>
          <button class="btnController btn_down">
            <nn-icon glyph="arrow-chevron" direction="down" />
          </button>
          <button class="btnController btn_right">
            <nn-icon glyph="arrow-chevron" direction="right" />
          </button>
          <hr />
          <button class="btn_next">
            <nn-icon glyph="check" /> Guardar imagen
          </button>
        </div>

        <hr />
      </section>

      <section id="sharePicture">
        <h1 class="rotZ">
          ¡brinda por los logros que marcaron una época pasada!
        </h1>
        <hr class="rotZ" />

        <h2>1944</h2>
        <p>Celebración del Centenario de la Independencia</p>
        <hr />

        <div class="leftColumn mergeBox">
          <p class="fecha">1946</p>
          <div class="logo_brindis"></div>
          <img
            class="postal_marco"
            :src="getZapp('img/presidente/retrobrindis/postal_marco.jpg')"
          />
          <div class="postal"></div>
        </div>
        <div class="rightColumn">
          <p>Haz completado el retrobrindis,</p>
          <p>¡Ahora compártelo con el coro!</p>
          <hr />
          <button class="btn_facebook">
            <nn-icon glyph="facebook" /> compartir
          </button>
          <button class="btn_twitter">
            <nn-icon glyph="twitter" /> twittear
          </button>
        </div>

        <hr />
      </section>

      <footer>
        © 2015. TODOS LOS DERECHOS RESERVADOS CERVEZA PRESIDENTE.<br />
        un producto de cervecería nacional dominicana.
        <a
          ><img
            alt="logo cervecería"
            :src="getZapp('img/presidente/retrobrindis/logo_cerveceria.png')"
        /></a>
        <em>El Consumo de Alcohol Perjudica La Salud.</em>
        website by capital dbg
      </footer>
    </section>
  </nn-scroll-area>
</template>

<script>
import Vue from "vue";
import $ from "jquery";

export default Vue.extend({
  mounted() {
    $(".btn_next").click(function () {
      var obj = $("#mainSite").find("section.active");
      obj.removeClass("active");
      obj.next().addClass("active");
    });
  },
});
</script>