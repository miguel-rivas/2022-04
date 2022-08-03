<template>
  <div id="box_app">
    <nn-scroll-area color="royal-purple">
      <img :src="getZapp(`img/presidente/destapa/logo.png`)" class="logo" />

      <div id="pt1"></div>
      <div id="pt2"></div>
      <div id="pt3"></div>
      <div id="pt4"></div>

      <!-- **************************** box_01 ************************** -->

      <div id="box_01" class="box">
        <a href="#" class="btn" id="btn_01">ENTRAR</a>
      </div>

      <!-- **************************** box_02 ************************** -->

      <div id="box_02" class="box NDP">
        Acepto los permisos de la aplicaci&oacute;n
        <input type="checkbox" name="option2" id="btn_01" />
      </div>

      <!-- **************************** box_03 ************************** -->

      <div id="box_03" class="box NDP">
        Dale like para continuar<br />
        <a href="#" class="btn" id="btn_01">Like</a>
      </div>

      <!-- **************************** box_04 ************************** -->

      <div id="box_04" class="box NDP">
        <br />
        <div class="txt_head">
          Destapa el coro para el festival presidente,<br />
          premios instant&aacute;neos y participar para<br />
          meets and greets y el gran premio final.
        </div>
        <br />
        <a href="#" class="btn btn_n02" id="btn_01"
          >&#191;C&Oacute;MO PARTICIPAR?</a
        ><br />
        <a href="#" class="btn btn_n02" id="btn_03">ACCEDER</a>
      </div>

      <!-- **************************** box_05 ************************** -->

      <div id="box_05" class="box NDP">
        <a href="#" class="btn" id="btn_01">FACEBOOK</a><br />
        <a href="#" class="btn" id="btn_02">C&Eacute;DULA</a><br />
        <a href="#" class="btn" id="btn_03">CREAR USUARIO</a>
      </div>

      <!-- **************************** box_06 ************************** -->

      <div id="box_06" class="box NDP">
        <div class="txt_head txt_head3">INTRODUCE TUS DATOS</div>
        <br /><br />
        <div style="margin: auto; display: table">
          <div
            style="
              width: 210px;
              height: 260px;
              display: table-cell;
              text-align: left;
            "
          >
            NOMBRE COMPLETO<br />
            <input class="txt" id="tt_01" TYPE="text" tabindex="1" /><br />
            <br />
            CORREO ELECTR&Oacute;NICO<br />
            <input class="txt" id="tt_03" TYPE="text" tabindex="2" /><br />
            <br />
            CONTRASE&Ntilde;A<br />
            <input class="txt" id="tt_06" TYPE="text" tabindex="3" /><br />
            <br />
            VERIFICAR CONTRASE&Ntilde;A<br />
            <input class="txt" id="tt_07" TYPE="text" tabindex="4" />
          </div>

          <div
            style="
              width: 210px;
              height: 260px;
              display: table-cell;
              text-align: left;
            "
          >
            C&Eacute;DULA<br />
            <input class="txt" id="tt_02" TYPE="text" tabindex="5" /><br />
            <br />
            TEL&Eacute;FONO<br />
            <input class="txt" id="tt_04" TYPE="text" tabindex="6" /><br />
            <br />
            C&Eacute;LULAR<br />
            <input class="txt" id="tt_05" TYPE="text" tabindex="7" /><br />
            <br />
            <a href="#" class="btn" id="btn_01">ACEPTAR</a>
          </div>
        </div>
      </div>

      <!-- **************************** box_07 ************************** -->

      <div id="box_07" class="box NDP">
        <div class="txt_head">INSERTA<br />EL C&Oacute;DIGO</div>

        <input class="txt" id="tt_00" TYPE="text" /><a
          href="#"
          class="btn"
          id="btn_00"
          >+</a
        ><br />
        <br />
        <nn-scroll-area color="green-pea" id="fixSize">
          <input class="txt" id="tt_01" TYPE="text" tabindex="1" READONLY />
          <input
            class="txt winCode"
            id="tt_02"
            TYPE="text"
            tabindex="2"
            READONLY
          />
          <br /><br />
          <input
            class="txt winCode"
            id="tt_03"
            TYPE="text"
            tabindex="3"
            READONLY
          />
          <input class="txt" id="tt_04" TYPE="text" tabindex="4" READONLY />
          <br /><br />
          <input class="txt" id="tt_05" TYPE="text" tabindex="5" READONLY />
          <input
            class="txt winCode"
            id="tt_06"
            TYPE="text"
            tabindex="6"
            READONLY
          />
          <br /><br />
          <input class="txt" id="tt_07" TYPE="text" tabindex="7" READONLY />
          <input
            class="txt winCode"
            id="tt_08"
            TYPE="text"
            tabindex="8"
            READONLY
          />
          <br /><br />
          <input
            class="txt winCode"
            id="tt_09"
            TYPE="text"
            tabindex="9"
            READONLY
          />
          <input class="txt" id="tt_10" TYPE="text" tabindex="10" READONLY />
        </nn-scroll-area>
        <a href="#" class="btn btn_n02" id="btn_01">GUARDAR CAMBIOS</a>
        <br />
        <a href="#" class="btn btn_n01" id="btn_02"
          >&#191;C&oacute;mo participar?</a
        >
        <a href="#" class="btn btn_n01" id="btn_03">Conoce los premios</a>
        <a href="#" class="btn btn_n01" id="btn_04">Invita a tus amigos</a>
        <br /><br />
        <div class="txt_sub">XX C&oacute;digos registrados</div>
      </div>

      <!-- **************************** box_08 ************************** -->

      <div id="box_08" class="box NDP">
        <div id="pt5"></div>
        <div class="txt_head txt_head2">CONOCE<br />LOS PREMIOS</div>
        <br />
        Durante el Festival Presidente<br />
        tendremos grandes premios<br />
        para el coro, &#161;con&oacute;celos!
        <br /><br />
        <img :src="getZapp(`img/presidente/destapa/btn_02.png`)" />
        <img :src="getZapp(`img/presidente/destapa/btn_03.png`)" />
        <img :src="getZapp(`img/presidente/destapa/btn_01.png`)" />
        <br /><br />
        <a href="#" class="btn" id="btn_01">Volver</a>
      </div>

      <!-- **************************** box_09 ************************** -->

      <div id="box_09" class="box NDP">
        <div style="width: 450px; text-align: left; margin: auto">
          <div class="txt_head txt_head2">&#161;FELICIDADES!<br />GANASTE</div>
          <div class="preview">Un Par de Bocinas</div>
          &#161;Celebra con el coro!<br />
          <a href="#" style="float: left" class="btn btn_n02" id="btn_01"
            >COMPARTIR</a
          >
          <a href="#" style="float: right" class="btn btn_n02" id="btn_02"
            >CONTINUAR</a
          >
        </div>
      </div>

      <!-- **************************** box_10 ************************** -->

      <div id="box_10" class="box NDP">
        <div class="txt_head txt_head3">
          SELECCIONA D&Oacute;NDE CANJEARAS TU PREMIO:
        </div>
        <br /><br />
        <div style="width: 600px; margin: auto">
          <div class="al_box">
            Santo Domingo:<br />
            <a href="#" class="btn btn_n01" id="btn_01">Moviemax Piantini</a
            ><br />
            <a href="#" class="btn btn_n01" id="btn_02"
              >Nacional 27 de Febrero</a
            ><br />
            <a href="#" class="btn btn_n01" id="btn_03">Jumbo Luper&oacute;n</a
            ><br />
          </div>
          <div class="al_box">
            Santiago:<br />
            <a href="#" class="btn btn_n01" id="btn_04">Moviemax Plaza Int.</a>
          </div>
          <div class="al_box">
            La Romana:<br />
            <a href="#" class="btn btn_n01" id="btn_05">Jumbo Romana</a>
          </div>
          <div class="al_box">
            San Pedro:<br />
            <a href="#" class="btn btn_n01" id="btn_06">Jumbo San Pedro</a>
          </div>
        </div>
      </div>

      <!-- **************************** pop_01 ************************** -->

      <div id="pop_01" class="pop NDP">
        <br /><br /><br /><br /><br /><br />
        <div class="txt_head txt_head2">INSTRUCCIONES</div>
        <br /><br />
        1) &#161;Abre una Cerveza Presidente y destapa el coro!
        <br /><br />
        2) Ingresa el c&oacute;digo que encontrar&aacute;s en el interior<br />
        de la tapa de tu Cerveza Presidente
        <br /><br />
        3) Destapa premios instant&aacute;neos o participa para<br />
        Meet and Greets y el Gran Premio Final.
        <br /><br />
        4) &#161;Guarda tu tapa! Esta ser&aacute; necesaria para reclamar<br />
        el premio.
        <br /><br />
        5) Sigue destapando el coro, &#161;mientras m&aacute;s c&oacute;digos<br />
        ingreses m&aacute;s oportunidades tienes de ganar Meet<br />
        and Greets y el Gran Premio Final!
        <br /><br />
        <a href="#" class="btn2" id="btn_01">ACEPTAR</a>
      </div>

      <!-- **************************** pop_02 ************************** -->

      <div id="pop_02" class="pop NDP">
        <br /><br /><br /><br /><br /><br />
        <div class="txt_head txt_head2">Acceder</div>
        <br /><br />
        <input
          class="txt2"
          id="tt_01"
          type="text"
          tabindex="1"
          placeholder="C&Eacute;DULA"
        /><br />
        <input
          class="txt2"
          id="tt_02"
          type="text"
          tabindex="2"
          placeholder="CONTRASE&Ntilde;A"
        /><br />
        <a href="#" class="btn2" id="btn_01">ENTRAR</a><br /><br />
        <a href="#" class="btn3" id="btn_02"
          >&#191;OLVIDASTE TU CONTRASE&Ntilde;A?</a
        ><br />
        <a href="#" class="btn3" id="btn_03">&#191;NO TIENES USUARIO?</a>
      </div>

      <!-- **************************** pop_03 ************************** -->

      <div id="pop_03" class="pop NDP">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div class="txt_head txt_head2">&#161;Guarda tu Tapa!</div>
        <br />
        &#161;Este C&oacute;digo Est&aacute; Participando Para Met and Greets y
        el Gran Premio Final!
        <br />
        Mientras m&aacute;s c&oacute;digos ingreses, m&aacute;s oportunidades
        tienes de ganar
        <br /><br />
        <a href="#" class="btn2" id="btn_01">CONTINUAR</a>
      </div>

      <!-- **************************** pop_04 ************************** -->

      <div id="pop_04" class="pop NDP">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div style="width: 690px; text-align: left; margin: auto">
          <div class="txt_head">
            Vive todo el Festival<br />
            desde la misma tarima
          </div>
          <br />
          &#8226; Disfruta de la &uacute;ltima experiencia VIP del Festival:<br />
          &#8226; Ve acompa&ntilde;ado de un amigo cada d&iacute;a.<br />
          &#8226; Descansa en un hotel all inclusive durante todo el evento.<br />
          &#8226; &#161;Llega con estilo al Festival! Te llevaremos desde y
          hacia el hotel<br />
          durante los tres d&iacute;as.<br />
          &#8226; Asesor&iacute;a de Vestuario y maquillaje para ti y tus
          acompa&ntilde;antes.<br />
          <br /><br />
          <a href="#" class="btn2" id="btn_01">CONTINUAR</a>
        </div>
      </div>

      <!-- **************************** pop_05 ************************** -->

      <div id="pop_05" class="pop NDP">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        Debes llevar tu c&eacute;dula y tu tapa ganadora<br />
        al centro de canje que seleccionaste.
        <br /><br />
        <a href="#" class="btn2" id="btn_01">VOLVER</a>
      </div>

      <!-- **************************** pop_07 ************************** -->

      <div id="pop_07" class="pop NDP">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div class="txt_head txt_head2">Procesando C&oacute;digo</div>
        <br /><br />
        <a href="#" class="btn2" id="btn_01">CONTINUAR</a>
      </div>

      <!-- **************************** pop_08 ************************** -->

      <div id="pop_08" class="pop NDP">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div class="txt_head txt_head2">C&oacute;digo Validado</div>
        <br /><br />
        <a href="#" class="btn2" id="btn_01">CONTINUAR</a>
      </div>

      <!-- **************************** pop_09 ************************** -->

      <div id="pop_09" class="pop NDP">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div class="txt_head txt_head2">C&oacute;digo No V&aacute;lido</div>
        <br /><br />
        <a href="#" class="btn2" id="btn_01">CONTINUAR</a>
      </div>
    </nn-scroll-area>
  </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";

export default Vue.extend({
  mounted() {
    /* ------------------- INTRO ------------------- */

    $("#pt1, #pt2, #pt3, #pt4").slideDown("slow");

    $("#box_01 #btn_01").click(function () {
      /* Entrar */
      $("#box_01").fadeOut("fast");
      $("#box_02").fadeIn("slow");
      /* Background Box_01 */
      $("#pt1, #pt2, #pt3, #pt4").hide("slow");
    });

    $("#box_02 #btn_01").click(function () {
      /* Acepto los permisos de la aplicacion */
      $("#box_02").fadeOut("fast");
      $("#box_03").fadeIn("slow");
      /* Background Box_02 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $("#pt1").css({ top: 20, left: "70vw", transform: "rotate(150deg)" });
      $("#pt3").css({ top: 20, right: "70vw", transform: "rotate(-150deg)" });
      $("#pt1, #pt3").fadeIn(1000);
    });

    $("#box_03 #btn_01").click(function () {
      /* Like */
      $("#box_03").fadeOut("fast");
      $("#box_04").fadeIn("slow");
      /* Background Box_03 */
      //$('#pt1, #pt2, #pt3, #pt4').hide(0);
      //$('#pt1').animate({top: 320}, 0).animate({left: 590}, 0).rotate(15);
      $("#pt1").css({ top: 320, left: "70vw", transform: "rotate(-15deg)" });
      $("#pt3").css({ top: 320, right: "70vw", transform: "rotate(15deg)" });

      //$('#pt3').animate({top: 320}, 0).animate({right: 590}, 0).rotate(-15);
      $("#pt2").css({ top: -250, right: "70vw" });
      $("#pt4").css({ top: -250, left: "70vw" });
      $("#pt1, #pt2, #pt3, #pt4").fadeIn("slow");
      $(".logo").animate({ marginTop: "20px" }, 1000);
    });

    $("#box_04 #btn_01").click(function () {
      /* Como Participar */
      $("#pop_01").fadeIn("slow");
    });

    $("#box_04 #btn_02").click(function () {
      $("#pop_02").fadeIn("slow");
    });

    $("#box_05 #btn_02").click(function () {
      /* Cedula */
      $("#pop_02").fadeIn("slow");
    });

    $("#box_06 #btn_01").click(function () {
      /* Aceptar */
      $("#box_06").fadeOut("fast");
      $("#box_07").fadeIn("slow");
      /* Background Box_07 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $(".logo")
        .animate({ marginTop: "20px" }, 500)
        .animate({ marginBottom: "0px" }, 500);
    });

    $("#box_07 #btn_00").click(function () {
      /* Agregar */
      $("#pop_07").fadeIn("slow");
    });

    $("#pop_07 #btn_01").click(function () {
      /* Continuar */
      $("#pop_07").fadeOut("slow");
      $("#pop_08").fadeIn("slow");
    });

    $("#pop_08 #btn_01").click(function () {
      /* Continuar */
      $("#pop_08").fadeOut("slow");
    });

    $("#box_07 #btn_01").click(function () {
      /* Guardar Cambios */
      $("#pop_03").fadeIn("slow");
    });

    $("#box_07 #btn_02").click(function () {
      /* Como participar */
      $("#pop_01").fadeIn("slow");
    });

    $("#box_07 #btn_03").click(function () {
      /* Conoce los premios */
      $(".box, .pop").fadeOut("fast");
      $("#box_08").fadeIn("slow");
      /* Background Box_08 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $(".logo").animate({ marginTop: "0px" }, 1000);
    });

    $("#box_08 #pt5").click(function () {
      /* gran premio final */
      $("#pop_04").fadeIn("slow");
    });

    $("#box_08 #btn_01").click(function () {
      /* Volver */
      $("#box_08").fadeOut("fast");
      $("#box_07").fadeIn("slow");
      /* Background Box_07 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $(".logo")
        .animate({ marginTop: "20px" }, 500)
        .animate({ marginBottom: "0px" }, 500);
    });

    $("#box_09 #btn_02").click(function () {
      /* Volver */
      $("#box_09").fadeOut("fast");
      $("#box_10").fadeIn("slow");
      /* Background Box_07 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $(".logo")
        .animate({ marginTop: "20px" }, 500)
        .animate({ marginBottom: "0px" }, 500);
    });

    $("#box_10 .btn").click(function () {
      /* Localidades */
      $("#pop_05").fadeIn("slow");
    });

    $("#pop_05 #btn_01").click(function () {
      /* Continuar */
      $(".box, .pop").fadeOut("fast");
      $("#box_07").fadeIn("slow");
      /* Background Box_07 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $(".logo")
        .animate({ marginTop: "20px" }, 500)
        .animate({ marginBottom: "0px" }, 500);
    });

    $("#pop_01 #btn_01").click(function () {
      /* Como participar */
      $("#pop_01").fadeOut("slow");
    });

    $("#pop_02 #btn_01").click(function () {
      /* Entrar */
      $(".box, .pop").fadeOut("fast");
      $("#box_07").fadeIn("slow");
      /* Background Box_07 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $(".logo")
        .animate({ marginTop: "20px" }, 500)
        .animate({ marginBottom: "0px" }, 500);
    });

    $("#pop_02 #btn_03, #box_04 #btn_03").click(function () {
      /* Crea tu perfil */
      $(".box, .pop").fadeOut("fast");
      $("#box_06").fadeIn("slow");
      /* Background Box_06 */
      $("#pt1, #pt2").hide(0);
      $("#pt3")
        .hide(0)
        .css({ top: -70, right: "70vw", transform: "rotate(260deg)" });
      $("#pt4")
        .hide(0)
        .css({ top: 290, left: "70vw", transform: "rotate(260deg)" });
      $("#pt4, #pt3").fadeIn("slow");
      $(".logo").animate({ marginTop: "20px" }, 1000);
    });

    $("#pop_03 #btn_01").click(function () {
      /* Continuar */
      $("#pop_03").fadeOut("slow");
    });

    $("#pop_04 #btn_01").click(function () {
      /* Como participar */
      $("#pop_04").fadeOut("slow");
    });

    $(".winCode").click(function () {
      /* Codigo Ganador */
      $(".box, .pop").fadeOut("fast");
      $(".logo").animate({ marginTop: "0px" }, 500);
      /*$('.logo').animate({ 'marginLeft': '400px'}, 500);*/
      $("#box_09").fadeIn("slow");
      /* Background Box_09 */
      $("#pt1, #pt2, #pt3, #pt4").hide(0);
      $("#pt2").css({ top: 400, right: -150, transform: "rotate(50deg)" });
      $("#pt4").css({ top: 400, left: -150, transform: "rotate(-50deg)" });
      $("#pt2, #pt4").fadeIn("slow");
    });
  },
});
</script>