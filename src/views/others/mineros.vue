<template lang="pug">
nn-scroll-area(color="royal-purple")
  mixin controls
    .controls
      button.skin.icon.active
      button.hair.icon
      button.eyes.icon
      button.nose.icon
      button.mouth.icon
      button.baby.icon
      hr
    .ageControls
      button.male.icon.child
      button.male.icon.teen
      button.female.icon.adult
      button.male.icon.old

  mixin hair
    .hair
      strong peinado
      a: img(:src="getZapp(`img/apap/characters/hair_01.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_02.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_03.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_04.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_05.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_06.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_07.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_08.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_09.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_10.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_11.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_12.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_13.png`)")
      a: img(:src="getZapp(`img/apap/characters/hair_14.png`)")

  mixin nose
    .nose
      strong nariz
      a: img(:src="getZapp(`img/apap/characters/nose_01.png`)")
      a: img(:src="getZapp(`img/apap/characters/nose_02.png`)")
      a: img(:src="getZapp(`img/apap/characters/nose_03.png`)")

  mixin mouth
    .mouth
      strong boca
      a: img(:src="getZapp(`img/apap/characters/mouth_01.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_02.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_03.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_04.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_05.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_06.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_07.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_08.png`)")
      a: img(:src="getZapp(`img/apap/characters/mouth_09.png`)")

  mixin eyes
    .eyes
      strong ojos
      a: img(:src="getZapp(`img/apap/characters/eyes_01.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_02.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_03.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_04.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_05.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_06.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_07.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_08.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_09.png`)")
      a: img(:src="getZapp(`img/apap/characters/eyes_10.png`)")

  mixin skins-tools
    .skin.active
      strong color de piel
      a: img(:src="getZapp(`img/apap/color_01.png`)")
      a: img(:src="getZapp(`img/apap/color_02.png`)")
      a: img(:src="getZapp(`img/apap/color_03.png`)")

  mixin tools-tools
    .baby
      strong accesorios
      a: img(:src="getZapp(`img/apap/characters/tool_01.png`)")
      a: img(:src="getZapp(`img/apap/characters/tool_02.png`)")
      a: img(:src="getZapp(`img/apap/characters/tool_03.png`)")

  mixin tools
    .box.tools
      p Personaliza tus mineros
      .tabPanel
        .tabs
          +skins-tools
          +hair
          +eyes
          +nose
          +mouth
          +tools-tools
        +controls
      button.btn.cancel Cancelar
      button.btn.add Agregar

  section#home.active
    .info
      h1 ¡Mineriza a toda tu familia!
      small registra tus datos para usar la aplicación
      button.btn.next Comenzar
    img(:src="getZapp(`img/apap/portada.png`)", alt="portada")

  section#form
    p Registra tus datos para usar la aplicación
    form
      label
        span nombre:
        input(type="text")
      label
        span apellido:
        input(type="text")
      label
        span cédula:
        input(type="text")
      label
        span teléfono:
        input(type="text")
      label
        span e-mail:
        input(type="text")
      input.btn.next(type="button", value="Registrar")

  section#choose
    p Agregar minero
    small Seleccionalos haciendo click
    .characters
      button.male.icon
      button.pet.icon
    button.btn Continuar

  section.edit.male.old
    .box.avatar
      img.hair
      img.eyes
      img.nose
      img.mouth
      img.skin.active(:src="getZapp(`img/apap/characters/skin_old_01.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_old_02.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_old_03.png`)")
    +tools

  section.edit.female.adult
    .box.avatar
      img.hair
      img.eyes
      img.nose
      img.mouth
      img.baby
      img.skin.active(:src="getZapp(`img/apap/characters/skin_adult_01.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_adult_02.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_adult_03.png`)")
    +tools

  section.edit.male.teen
    .box.avatar
      img.hair
      img.eyes
      img.nose
      img.mouth
      img.skin.active(:src="getZapp(`img/apap/characters/skin_teen_01.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_teen_02.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_teen_03.png`)")
    +tools

  section.edit.male.child
    .box.avatar
      img.hair
      img.eyes
      img.nose
      img.mouth
      img.skin.active(:src="getZapp(`img/apap/characters/skin_child_01.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_child_02.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_child_03.png`)")
    +tools

  section.edit.pet.child
    .box.avatar
      img.skin.active(:src="getZapp(`img/apap/characters/skin_pet_01.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_pet_02.png`)")
      img.skin(:src="getZapp(`img/apap/characters/skin_pet_03.png`)")
    .box.tools
      p Personaliza tus mineros
      .tabPanel
        .tabs
          .skin.active
            strong mascotas
            a.active: img(:src="getZapp(`img/apap/pet_skin_01_pv.png`)")
            a: img(:src="getZapp(`img/apap/pet_skin_02_pv.png`)")
            a: img(:src="getZapp(`img/apap/pet_skin_03_pv.png`)")

      button.btn.cancel Cancelar
      button.btn.add Agregar

  section#preview
    p Selecciona el fondo de tu preferencia

    .desktop
      button.icon.triangle-left
      .compos
        img.active(:src="getZapp(`img/apap/background/bk_01.png`)")
        img(:src="getZapp(`img/apap/background/bk_02.png`)")
        img(:src="getZapp(`img/apap/background/bk_03.png`)")
      button.icon.triangle-right

    .mobile
      a.active: img(:src="getZapp(`img/apap/background/bk_01_pv.png`)")
      a: img(:src="getZapp(`img/apap/background/bk_02_pv.png`)")
      a: img(:src="getZapp(`img/apap/background/bk_03_pv.png`)")

    .controls
      button.btn.back Volver
      button.btn.next Finalizar

  section#share
    .box
      img(:src="getZapp(`img/apap/family.png`)", alt="portada")
    .box
      p ¡Comparte tu familia minerizada y participa para ganar premios!
      small o descarga la imagen como fondo de pantalla
      button.btn.back Editar
      button.btn Comparte
      button.btn Descarga
</template>

<script>
import Vue from "vue";
import $ from "jquery";

export default Vue.extend({
  data: () => ({}),
  mounted() {
    const app = {
      init: function () {
        this.cacheDom();
        this.bind();
      },

      cacheDom: function () {
        this.$window = $(window);
        this.$main = $(".mr-workarea");

        this.actualBk = 1;
        this.maxBk = this.$main.find("#preview .mobile a").length;

        this.$nextScreenBtn = this.$main.find(".next");
        this.$editScreenBtn = this.$main.find(".back");

        this.$chooseScreen = this.$main.find("#choose");
        this.$seePreviewBtn = this.$chooseScreen.find(".btn");

        this.$chooseGenderBtn = this.$chooseScreen.find(".characters button");
        this.$chooseAttrBtn = this.$main.find(".tabPanel .controls button");
        this.$chooseAgeBtn = this.$main.find(".ageControls button");
        this.$chooseSkinBtn = this.$main.find(".tools .skin a");
        this.$chooseOtherBtn = this.$main.find(".tools img").not(".skin img");

        this.$choosePetBtn = this.$main.find("section.pet .tools .skin a");

        this.$chooseBkArrowsBtn = this.$main.find("#preview");
        this.$chooseBkLeftBtn = this.$chooseBkArrowsBtn.find(
          "button.triangle-left"
        );
        this.$chooseBkRightBtn = this.$chooseBkArrowsBtn.find(
          "button.triangle-right"
        );

        this.$chooseBkMobileBtn = this.$main.find("#preview .mobile a");

        this.$goBackChooseBtn = this.$main.find("button.add, button.cancel");

        this.characters = [];
      },

      bind: function () {
        this.loading();

        this.$nextScreenBtn.on("click", this.nextScreen.bind(this));
        this.$editScreenBtn.on("click", this.editScreen.bind(this));
        this.$seePreviewBtn.on("click", this.seePreview.bind(this));

        this.$chooseGenderBtn.on("click", this.chooseGender.bind(this));
        this.$chooseAttrBtn.on("click", this.chooseAttr.bind(this));
        this.$chooseAgeBtn.on("click", this.chooseAge.bind(this));
        this.$chooseSkinBtn.on("click", this.chooseSkin.bind(this));
        this.$chooseOtherBtn.on("click", this.chooseOther.bind(this));

        this.$choosePetBtn.on("click", this.chooseSkin.bind(this));
        this.$choosePetBtn.on("click", this.chooseSkin.bind(this));

        this.$chooseBkRightBtn.on(
          "click",
          function () {
            this.navBackground(1);
          }.bind(this)
        );
        this.$chooseBkLeftBtn.on(
          "click",
          function () {
            this.navBackground(-1);
          }.bind(this)
        );

        this.$chooseBkMobileBtn.on("click", this.chooseBkMobile.bind(this));

        this.$goBackChooseBtn.on("click", this.goBackChoose.bind(this));
      },

      // ------------------ Extra Functions // Navigation

      loading: function () {
        $(".mr-workarea #home img")
          .animate({ bottom: 0 }, 1000)
          .parent()
          .find(".info")
          .fadeIn(1000);
      },

      hideScreen: function () {
        return this.$main.find("section.active").removeClass("active");
      },

      nextScreen: function () {
        this.hideScreen().next().addClass("active");
      },

      editScreen: function () {
        this.hideScreen().parent().find("#choose").addClass("active");
      },

      seePreview: function () {
        this.hideScreen().parent().find("#preview").addClass("active");
      },

      chooseGender: function (event) {
        const genderId = event.currentTarget.className.split(" ")[0];

        const object = ".edit." + genderId + ".child";

        this.hideScreen().parent().find(object).addClass("active");

        this.resetCharacters();
      },

      chooseAttr: function (event) {
        const obj = $(event.currentTarget);

        const sectionName = obj.attr("class").split(" ")[0];

        const section = obj
          .parent()
          .parent()
          .find("." + sectionName);

        section.addClass("active").siblings().removeClass("active");

        obj.addClass("active").siblings().removeClass("active");
      },

      chooseAge: function (event) {
        this.resetCharacters();
        const obj = $(event.currentTarget);

        const age = obj.attr("class").split(" ")[2],
          sex = obj.attr("class").split(" ")[0];

        $(".edit." + age + "." + sex)
          .addClass("active")
          .siblings()
          .removeClass("active");
      },

      chooseSkin: function (event) {
        const obj = $(event.currentTarget);
        const index = obj.index();

        $(
          document.querySelectorAll(".edit.active .box.avatar > .skin")[
            index - 1
          ]
        )
          .addClass("active")
          .siblings()
          .removeClass("active");

        obj.addClass("active").siblings().removeClass("active");
      },

      chooseOther: function (event) {
        const obj = $(event.currentTarget);

        const url = obj.attr("src"),
          name = obj.parent().parent().attr("class").split(" ")[0],
          active = obj.parent();

        $(".avatar")
          .find("." + name)
          .attr("src", url);

        active.addClass("active").siblings().removeClass("active");
      },

      // ------------------ Extra Functions // Navigation

      goBackChoose: function () {
        const obj = $(event.currentTarget);
        obj.parent().parent().removeClass("active");

        this.$chooseScreen.addClass("active");
      },

      navBackground: function (number) {
        const index = $("#preview .compos img.active").index();
        const obj = document.querySelectorAll("#preview .compos img");
        if (obj[index + number]) {
          obj[index].className = "";
          obj[index + number].className = "active";
        }
      },

      resetCharacters: function () {
        document
          .querySelectorAll("section.edit .avatar img:not(.skin)")
          .forEach((item) => {
            item.src = "";
          });

        document
          .querySelectorAll("section.edit .tools .tabs a")
          .forEach((item) => {
            item.className = "";
          });
      },

      chooseBkMobile: function (event) {
        const obj = $(event.currentTarget);

        obj.addClass("active").siblings().removeClass("active");
      },
    };

    app.init();
  },
});
</script>