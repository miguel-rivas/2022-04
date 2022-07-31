<template lang="pug">
nn-scroll-area(color="royal-purple")
  section#contact
    section.intro
      .container
        h1 Get in touch for Mac support

        .row
          .col-md-6
            p There’s no such thing as a typical client, so we don’t offer a one-size-fits-all IT solution. Much of what we do has evolved around the needs of our clients and by getting to know how they like to work with us.
          .col-md-6
            p To find out how we can help you improve the way your business operates and to take the aches and pains out of IT support, please drop Dr Logic a line or pick up the phone.

      .animation-intro
        img.plane.p01(
          :src="getZapp('img/drlogic/contact/plane1.png')",
          width="100"
        )
        img.plane.p02(
          :src="getZapp('img/drlogic/contact/plane2.png')",
          width="100"
        )
        img.plane.p03(
          :src="getZapp('img/drlogic/contact/plane3.png')",
          width="100"
        )
        img.plane.p04(
          :src="getZapp('img/drlogic/contact/plane4.png')",
          width="100"
        )
        img.plane.p05(
          :src="getZapp('img/drlogic/contact/plane5.png')",
          width="100"
        )
        img.plane.p06(
          :src="getZapp('img/drlogic/contact/plane6.png')",
          width="100"
        )

    section#main.body
      .bend
        .container
          .row
            .col-md-6
              address
                p
                  a.smooth.phone(href="#")
                    span 020 3642 6540
                    img(:src="getZapp('img/drlogic/contact/phone.png')")

                p
                  a.smooth.mail(href="#")
                    img(:src="getZapp('img/drlogic/contact/mail.png')")
                    span hello@drlogic.com

                p
                  a.smooth(href="#")
                    img(:src="getZapp('img/drlogic/contact/sign.png')")
                    strong London
                    small Exmouth House, 3-11 Pine Street London EC1R 0JH

            .col-md-6
              form(data-toggle="validator", role="form")
                legend Send us a message

                .form-group
                  nn-icon(glyph="person")
                  input.form-control(
                    type="text",
                    placeholder="Full name*",
                    required="required",
                    data-error="Fill this field"
                  )

                .form-group
                  nn-icon(glyph="home")
                  input.form-control(
                    type="text",
                    placeholder="Company Name*",
                    required="required",
                    data-error="Fill this field"
                  )

                .form-group
                  nn-icon(glyph="paper-plane")
                  input.form-control(
                    type="email",
                    placeholder="Email Address*",
                    required="required",
                    data-error="Fill this field"
                  )

                .form-group
                  nn-icon(glyph="paper-plane")
                  input.form-control(
                    type="tel",
                    placeholder="Phone Number",
                    data-error="Fill this field"
                  )

                .form-group.txt-area
                  nn-icon(glyph="leaf")
                  textarea.form-control(
                    placeholder="Your Message*",
                    required="required",
                    data-error="Fill this field"
                  )

                button.btn.btn-primary.orange(type="Submit") Submit

    section#location
      h2 Where to find us
      section#map
        aside.overlay
          img(:src="getZapp('img/drlogic/map-logo.png')", width="60")
          br
          span.point

    drlogic-footer
</template>

<script>
import Vue from "vue";
import drlogicFooter from "./drlogic-footer.vue";

export default Vue.extend({
  components: { drlogicFooter },
});
</script>