<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  section#other-services
    section.intro
      .container
        h1 Vital IT services for business

        .row
          .column
            p When business grow, their needs change. Unless you’re a tech aficionado, chances are you might not be up to speed on the latest developments in business technology. That’s where Dr Logic can help; we’ve done the research, so you don’t have to.
            p We’ve been working with like-minded creative businesses for over 12 years, so we have first-hand experience about what works well for different organisations. Why not get in touch for some impartial advice?

      .animation-intro
        .relative-box
          img.head-mobile(
            :src="getZapp('img/drlogic/o-services/animation.png')",
            width="40"
          )
          img.e01(
            :src="getZapp('img/drlogic/o-services/intro-02.png')",
            width="40"
          ) 
          img.e02(
            :src="getZapp('img/drlogic/o-services/intro-03.png')",
            width="110"
          ) 
          img.e03(
            :src="getZapp('img/drlogic/o-services/intro-04.png')",
            width="70"
          ) 
          img.e04(
            :src="getZapp('img/drlogic/o-services/intro-05.png')",
            width="170"
          ) 
          img.e05(
            :src="getZapp('img/drlogic/o-services/intro-06.png')",
            width="220"
          ) 
          img.e06(
            :src="getZapp('img/drlogic/o-services/intro-07.png')",
            width="130"
          ) 
          img.e07(
            :src="getZapp('img/drlogic/o-services/intro-08.png')",
            width="70"
          ) 
          img.e08(
            :src="getZapp('img/drlogic/o-services/intro-09.png')",
            width="150"
          ) 

    section.body
      .bend
        .container
          .copywrite

          section.strategy
            .row
              .col-sm-4
                img(:src="getZapp('img/drlogic/o-services/meeting.png')")
              .col-sm-8
                h3 Consulting without complexity
                p If the mere mention of consultancy fills you with dread, Dr Logic guarantees a pain-free consultation. Talk to us about your issue and your budget and we’ll look at your business with you and provide tailored advice on the right IT solutions. We specialise in working with SME’s in creative industries and have a raft of experience in many sectors including PR, Architects, Engineering, Finance, Design and Advertising. No nasty surprises, no unrealistic recommendations. Just common sense from the Doctor.

        section.diagram
          .container
            h3 What can Dr Logic do for you?
            p Dr Logic can help your business, by offering impartial advice on a whole range of IT and support services. We work with trusted partners, but can also recommend and implement solutions from across the marketplace to meet your needs.

            .diagram-contain
              img.logo(:src="getZapp('img/drlogic//o-services/diagram/logo.png')")
              img.broadband(:src="getZapp('img/drlogic//o-services/diagram/broadband.png')")
              img.devices(:src="getZapp('img/drlogic//o-services/diagram/devices.png')")
              img.email(:src="getZapp('img/drlogic//o-services/diagram/email.png')")
              img.hosting(:src="getZapp('img/drlogic//o-services/diagram/hosting.png')")
              img.networking(:src="getZapp('img/drlogic//o-services/diagram/networking.png')")
              img.software(:src="getZapp('img/drlogic//o-services/diagram/software.png')")
              img.storage(:src="getZapp('img/drlogic//o-services/diagram/storage.png')")
              img.wireless(:src="getZapp('img/drlogic//o-services/diagram/wireless.png')")
              img.backup(:src="getZapp('img/drlogic//o-services/diagram/backup.png')")

    drlogic-call-us(color="olive")
    drlogic-footer
</template>

<script>
import Vue from "vue";
import drlogicCallUs from "./drlogic-call-us.vue";
import drlogicFooter from "./drlogic-footer.vue";

export default Vue.extend({
  components: { drlogicFooter, drlogicCallUs },
});
</script>