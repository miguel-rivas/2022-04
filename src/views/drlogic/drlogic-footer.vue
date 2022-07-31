<template lang="pug">
footer
  .social-networks
    nn-icon(glyph="twitter")
    nn-icon(glyph="facebook")
    nn-icon(glyph="linkedin")
  .bend
    address
      .container
        a.mail(href="#") support@drlogic.com
        a.phone(href="#") 020 3642 6540
        p Exmouth House 3-11 Pine Street London EC1R 0JH
        hr
        .lenker
          img.image-resposive.logo.exponentiale(
            :src="getZapp('img/drlogic/logos/footer/exponentiale.png')"
          )
          img.image-resposive.logo.apple(
            :src="getZapp('img/drlogic/logos/footer/apple.png')"
          )
          img.image-resposive.logo.google(
            :src="getZapp('img/drlogic/logos/footer/google.png')"
          )
          img.image-resposive.logo.casper(
            :src="getZapp('img/drlogic/logos/footer/casper.png')"
          )
          img.image-resposive.logo.meraki(
            :src="getZapp('img/drlogic/logos/footer/meraki.png')"
          )
        hr
        small © Copyright 2016 Dr Logic. All rights reserved.
        small Dr Logic is a registered trademark of Doctor Logic Ltd.
        small Registered in England and Wales. Company no. 4947299. VAT no. 848448189.

        a.terms(href="#")
          p Terms &amp; Conditions&nbsp;
          nn-icon(glyph="book")
</template>