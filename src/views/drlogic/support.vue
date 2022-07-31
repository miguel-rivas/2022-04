<template lang="pug">
nn-scroll-area(color="royal-purple")
  section#services
    section.intro
      .container
        h1 Dedicated Mac IT Support for Businesses
        p We supply dedicated Mac IT support and with your account manager, we'll provide on-site support or training to keep your business running smoothly.

      .animation-intro
        .relative-box
          img.base(:src="getZapp('img/drlogic/services/services-01.png')")
          img.front(:src="getZapp('img/drlogic/services/services-02.png')")
          img.man-globe.globe(:src="getZapp('img/drlogic/services/globe.png')")
          img.woman-globe.globe(
            :src="getZapp('img/drlogic/services/globe.png')"
          )
          span.dot

    section.body
      .bend
        section#contract
          .container
            .copywrite
              h2 How does it work?
              p By working with Dr Logic on a contract basis, we get to know your business and proactively manage your IT for you. You’ll have a dedicated account manager who will get to know your set-up and your team. They’ll make regular visits to your office to make sure everything is working as it should and to provide on-site support or training. Twice a year, we carry out client review meetings to discuss your IT set up and make recommendations on key areas you might want to consider upgrading.

              button#tips.btn.btn-primary.green What’s included?

              .highlight
                p We charge a fixed monthly fee for each person in your company, which then gives you unlimited support 9am to 6pm, Monday to Friday. This covers all the user’s computers, iPhones, iPads, and includes market-leading anti-virus protection, documentation management and domain name records.

          template(v-for="(item, itemIndex) in products")
            section.service(:key="`sec${itemIndex}`")
              .container
                .row
                  .col-md-6.img
                    img(:src="getZapp(`img/drlogic/services/${item.img}.png`)")
                  .col-md-6.text
                    h3 {{ item.title }}
                    template(v-for="(pa, paIndex) in item.body")
                      p(:key="paIndex") {{ pa }}

          section.infogram
            article.textDesktop
              .txt-box
                h3 {{ infogram[0].title }}
                p {{ infogram[0].body }}

            .container
              template(v-for="(item, itemIndex) in infogram")
                article(:class="`sec${itemIndex}`", :key="`sec${itemIndex}`")
                  .image-box
                    span.number(:class="`n${itemIndex}`") {{  itemIndex }}.
                    img(:src="getZapp(`img/drlogic/services/${item.img}.png`)")
                  .txt-box
                    h3 {{ item.title }}
                    p {{ item.body }}
    drlogic-call-us(color="orange")
    drlogic-footer
</template>

<script>
import Vue from "vue";
import drlogicCallUs from "./drlogic-call-us.vue";
import drlogicFooter from "./drlogic-footer.vue";

export default Vue.extend({
  components: { drlogicFooter, drlogicCallUs },
  data: () => ({
    products: [
      {
        title: "Dedicated Account Manager",
        img: "contract-service-01",
        body: [
          "Your account manager normally carries out your site visits and attends planning meetings. They’ll get to know you, your staff and your set up and you’ll have a single point of contact who senior personnel can liaise with.",
        ],
      },
      {
        title: "Support, monitoring & maintenance",
        img: "contract-service-02",
        body: [
          "We believe that being on site regularly is an essential part of managing your IT. We talk to your staff and get to hear about niggles that might not otherwise get raised. But, most day-to-day support issues can be resolved over the phone, or by remote session.",
          "We use remote software to monitor your computers and servers 24/7. This automatically alerts us if there are any issues, such as disk space, or harmful software is downloaded. To keep your systems optimal, we run software and operating system updates, check storage and networking equipment (hard drives, servers, routers) and make sure that backups are running.",
        ],
      },
      {
        title: "Planning",
        img: "contract-service-03",
        body: [
          "By working together, we’ll keep up to speed with your business plans. We can then help you anticipate what investment might be needed, new hardware or software, or staff training. We also support you with business continuity & disaster recovery planning.",
        ],
      },
      {
        title: "Client Portal",
        img: "contract-service-04",
        body: [
          "The Dr Logic portal gives an overview of all the support requests from your organisation: incidents, issues, sales, invoices etc. giving you a company-wide view of what’s happening, real-time. You’ll also be able to access IT Glue which we use to document your set-up: hardware, software, subscriptions and serial numbers. And finally, you can view monthly reports to see where we’ve spent our time on support.",
        ],
      },
    ],

    infogram: [
      {
        title: "Getting started",
        body: "We follow a three-step process to start working with new clients.",
        img: "start-contract",
      },
      {
        title: "Discovery",
        body: "We’ll look at your current IT setup, talk through your requirements and discuss whether we think anything needs to be fixed or improved.",
        img: "contract-info-01",
      },
      {
        title: "Foundation",
        body: "We work with you to fix any issues raised during discovery. We then Install remote monitoring software and ensure everything is running as it should.",
        img: "contract-info-02",
      },
      {
        title: "Go Live",
        body: "Once foundation is complete - we’re ready to go.",
        img: "contract-info-03",
        link: "Contact us to start",
      },
    ],
  }),
});
</script>