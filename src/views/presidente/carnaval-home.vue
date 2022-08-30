<template lang="pug">
nn-scroll-area(color="royal-purple")
  #wsite
    section#home.box
      .all_content
        #menu
          a.social_networks#twitter(href="#"): nn-icon(glyph="twitter")
          a.social_networks#facebook(href="#"): nn-icon(glyph="facebook")
          a.social_networks#instagram(href="#"): nn-icon(glyph="instagram")
          a.social_networks#youtube(href="#"): nn-icon(glyph="youtube-play")
          .links
            a(href='#primer_carnaval') CARNAVAL PRESIDENTE 2015
            a(href='#destinos') DESTINOS
            a(href='#') GENERADOR DE TICKETS
            a(href='#galeria') GALER&Iacute;A

        .content
          h1.h_content Descubre <br/>el Carnaval Presidente
          p.h_content En algún lugar de República Dominicana, conviven la frescura y la creatividad. Estamos buscando coristas dispuestos a vivir la fantasía del Carnaval, como la primera vez.

    section#primer_carnaval.box
      .all_content
        .content
          h1.h_content Carnaval Presidente 2015
          p.h_content
        #videoframe
          iframe(src="//www.youtube.com/embed/Wpto16vJdeA" frameborder="0" allowfullscreen)
          

    mixin slideShow(ciudad, title, slidesNumber, position)
      .sub_box4(id = ciudad, class = position)
        .bomba
          h3= title
          .btn2 CON&Oacute;CE M&Aacute;S
          img.icon(:src="getZapp('img/presidente/icon.png')")
        .color_cover

    section#destinos.box
      .content
        +slideShow("stodgo", "Santo Domingo", 6, "leftbox")
        +slideShow("santiago", "Santiago", 5, "leftbox")
        +slideShow("vega", "La Vega", 6, "rightbox")
        +slideShow("bonao", "Bonao", 4, "rightbox")

        #btn_descubre Descubre el Carnaval


    section#galeria.box
      .content
        h1.h_content Galería
        a#fil_prensa.filter.selected PRENSA
        br
        a#all.filter_2.selected_3
          | TODOS
          img(:src="getZapp('img/presidente/arrow.png')")
        a#fil_santiago.filter_2
          | SANTIAGO
          img(:src="getZapp('img/presidente/arrow.png')")
        a#fil_vega.filter_2
          | LA VEGA
          img(:src="getZapp('img/presidente/arrow.png')")

      .content_2
        template(v-for="counter in [1,2,3,5,6,7,8]")
          a.gallery_carnaval.prensa(:key="counter")
            img(:src="getZapp(`img/presidente/gallery/rueda_prensa_pv/prensa (${counter}).jpg`)" height="220")

    footer#footer.box
      .content
        | © 2015. TODOS LOS DERECHOS RESERVADOS. CERVEZA PRESIDENTE. EL CONSUMO DE ALCOHOL PERJUDICA LA SALUD.
        .fright WEBSITE BY CAPITAL DBG

</template>