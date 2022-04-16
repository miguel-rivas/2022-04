<template lang="pug">
nn-scroll-area(color="royal-purple")
  nn-container(size="900")
    .builder-container
      nn-row(
        :group="selection.group",
        :integrated="computedIntegrated",
        :spacing="computedSpacing",
        :breakpoint="computedBreakpoint",
        :vertical="computedvertical"
      )
        template(v-for="(column, index) in selection.columns")
          nn-column(
            :key="index",
            :size="getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).computedSize"
          )
            span.fake-btn(
              :style="`border-color: ${createColor(index, selection.columns.length)}`"
            )
              | {{ getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnClass }}
              template(
                v-if="getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnClass && getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnStyle"
              ) &nbsp;-&nbsp;
              | {{ getColumnSize({ width: column.width, height: column.height, widthSubtraction: column.subtraction, absoluteHeight: column.absoluteHeight, absoluteWidth: column.absoluteWidth }).columnStyle }}

    hr

    nn-row
      nn-column(size="1/1")
        spirit(:text="htmlVue")
        textarea(ref="textareaHtml").vue-code {{ htmlVue }}
      nn-column(size="1/1")
        btn(glyph="html", :text="$t('ui.section.gridBuilder.workarea.html')", color="shamrock", @click="copyCode('textareaHtml')")

    br

    nn-row
      nn-column(size="1/1")
        spirit(:text="hamlVue", lang="haml")
        textarea(ref="textareaHaml").vue-code {{ hamlVue }}
      nn-column(size="1/1")
        btn(glyph="haml", :text="$t('ui.section.gridBuilder.workarea.haml')", color="shamrock", @click="copyCode('textareaHaml')")

    br

    nn-row
      nn-column(size="1/1")
        spirit(:text="pugVue", lang="pug")
        textarea(ref="textareaHaml").vue-code {{ pugVue }}
      nn-column(size="1/1")
        btn(glyph="pug", :text="$t('ui.section.gridBuilder.workarea.pug')", color="shamrock", @click="copyCode('textareaPug')")
</template>

<script>
import Vue from "vue";
import GridMixin from "../mixins/grid";
import spirit from "../components/spirit.vue";

export default Vue.extend({
  components: { spirit },
  mixins: [GridMixin],
  computed: {
    htmlVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        const columnSize = this.getColumnSize({
          width: column.width,
          height: column.height,
          widthSubtraction: column.subtraction,
          absoluteHeight: column.absoluteHeight,
          absoluteWidth: column.absoluteWidth,
        });
        columns += `  <nn-column size="${
          columnSize.computedSize
        }">\n    <btn text="${columnSize.columnClass}${
          columnSize.columnClass && columnSize.columnStyle ? " - " : ""
        }${columnSize.columnStyle}"/>\n  </nn-column>\n`;
      });
      let row = `<nn-row${this.selection.group ? " nano-group" : ""}${
        this.computedvertical ? " vertical" : ""
      }${this.computedIntegrated ? " integrated" : ""}${
        this.computedBreakpoint !== ""
          ? ' breakpoint="' + this.computedBreakpoint + '"'
          : ""
      }${
        this.computedSpacing ? ' spacing="' + this.computedSpacing + '"' : ""
      }>\n${columns}</nn-row>`;
      return row;
    },
    pugVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        const columnSize = this.getColumnSize({
          width: column.width,
          height: column.height,
          widthSubtraction: column.subtraction,
          absoluteHeight: column.absoluteHeight,
          absoluteWidth: column.absoluteWidth,
        });
        columns += `  nn-column(size="${
          columnSize.computedSize
        }")\n    btn(text="${columnSize.columnClass}${
          columnSize.columnClass && columnSize.columnStyle ? " - " : ""
        }${columnSize.columnStyle}")\n`;
      });
      let row = `nn-row(${this.selection.group ? "nano-group," : ""}${
        this.computedvertical ? "vertical," : ""
      }${this.computedIntegrated ? "integrated," : ""}${
        this.computedBreakpoint !== ""
          ? 'breakpoint="' + this.computedBreakpoint + '",'
          : ""
      }${
        this.computedSpacing ? 'spacing="' + this.computedSpacing + '"' : ""
      })\n${columns}`;
      return row;
    },
    hamlVue() {
      let columns = "";
      this.selection.columns.forEach((column) => {
        const columnSize = this.getColumnSize({
          width: column.width,
          height: column.height,
          widthSubtraction: column.subtraction,
          absoluteHeight: column.absoluteHeight,
          absoluteWidth: column.absoluteWidth,
        });
        columns += `  %nn-column{size: "${
          columnSize.computedSize
        }"}\n    %btn{text: "${columnSize.columnClass}${
          columnSize.columnClass && columnSize.columnStyle ? " - " : ""
        }${columnSize.columnStyle}"}\n`;
      });
      let row = `%nn-row{${this.selection.group ? "nano-group," : ""}${
        this.computedvertical ? "vertical," : ""
      }${this.computedIntegrated ? "integrated," : ""}${
        this.computedBreakpoint !== ""
          ? 'breakpoint="' + this.computedBreakpoint + '",'
          : ""
      }${
        this.computedSpacing ? 'spacing="' + this.computedSpacing + '"' : ""
      }}\n${columns}`;
      return row;
    },
    computedSpacing() {
      return !this.selection.group ? this.selection.spacing : 0;
    },
    computedBreakpoint() {
      if (this.selection.breakpoint !== "-") {
        return !this.selection.group ? this.selection.breakpoint : "";
      } else {
        return "";
      }
    },
    computedIntegrated() {
      return this.selection.group ? this.selection.integrated : false;
    },
    computedvertical() {
      return !this.selection.group ? this.selection.vertical : false;
    },
  },
  methods: {
    createColor(index, max_color_amount) {
      var hue, difference, filter_max_color, filter_min_color;
      filter_max_color = max_color_amount > 359 ? 359 : max_color_amount;
      filter_min_color = filter_max_color < 3 ? 3 : filter_max_color;
      max_color_amount = filter_min_color;

      difference = 360 / max_color_amount;
      hue = (index * difference).toFixed(1);
      return `hsl(${hue} 60% 40%)`;
    },
    copyCode(ref) {
      this.$refs[ref].select();
      document.execCommand("copy");
    },
  },
});
</script>