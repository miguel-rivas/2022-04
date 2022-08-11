<template lang="pug">
nn-scroll-area(color="royal-purple", :class="`theme-${currentVersion}`")
  #texture
  header CSS
    #vs
      #sel {{ mainVars[currentVersion].text }}
      button#op1(@click="filter_vs('all')") *
      button#op2(@click="filter_vs('1')") 1
      button#op3(@click="filter_vs('2')") 2.1
      button#op4(@click="filter_vs('3')") 3
      input#query(
        type="text",
        placeholder="-- filterBy --",
        autocomplete="off"
      )

  main
    article.info(v-for="data in properties", v-if="is_check(data.version)")
      toggle-row(breakpoint="lg", :table-element="false", :btn-round="true")
        template(v-slot:header)
          nn-column(size="35")
            nn-btn(
              color="denim",
              round,
              glyph="plus",
              @click="addToArray(`${data.version} : ${data.dependency} ${data.name}`)"
            )
          nn-column(size="100%-35*2")
            p.nn-label {{ data.version }}: {{ data.dependency }} {{ data.name }}

        template(v-slot:more)
          nn-column(size="100%")
            .more
              ul
                li(v-if="data.initial") Initial : {{ data.initial }}
                li(v-if="data.values.length") Values :
                  em(v-for="values in data.values") {{ values }}
                li(v-if="data.inherit") Inherit : {{ data.inherit }}
                li(v-if="data.complement.length") complement :
                  em(v-for="complement in data.complement") {{ complement }}
                li(v-if="data.applyTo") Apply To : {{ data.applyTo }}
                li(v-if="data.description") {{ data.description }}

  aside.studylist(:class="{ show_list: openStudy }")
    button.btn(@click="openStudy = !openStudy")
      nn-icon(glyph="list-alt")
      | {{ !openStudy ? 'Open' : 'Close' }} Study List
    button.btn(@click="clearStudyList()")
      nn-icon(glyph="trash-o")
      | Wipe the board
    .board
      ul
        li(v-for="(item, index) in study", :class="{ doneLi: item.check }")
          button(@click="checkList(index)") {{ item.data }}
</template>

<script>
import Vue from "vue";
import { properties, mainVars } from "@/db/css-study";
import toggleRow from "@/components/toggle-row.vue";
import Swal from "sweetalert2";

export default Vue.extend({
  components: { toggleRow },
  data: () => ({
    currentVersion: "all",
    properties,
    study: new Set(),
    openStudy: false,
    mainVars,
  }),
  methods: {
    filter_vs(new_vs) {
      this.currentVersion = new_vs;
    },
    is_check(check) {
      var ans = 0;
      ans =
        mainVars[this.currentVersion].text === check ||
        mainVars[this.currentVersion].text === "*"
          ? 1
          : 0;
      return ans;
    },
    addToArray(a) {
      let obj = { data: a, check: 0 };
      this.study.add(obj);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to study list",
        showConfirmButton: false,
        timer: 800,
      });
    },
    checkList(a) {
      this.study[a].check = !this.study[a].check;
    },

    clearStudyList() {
      this.study = new Set();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The Board is Clean",
        showConfirmButton: false,
        timer: 800,
      });
    },
  },
});
</script>