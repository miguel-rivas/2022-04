<template lang="pug">
.capsule
  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('canvas.section.pixelEditor.panel.general.legend') }}

      nn-row
        nn-column(size="100%")
          nn-row
            nn-column(size="35")
              btn(glyph="plus", color="burn-orange", @click="newImage()")
            nn-column(size="100%-35")
              btn(
                :text="$t('canvas.section.pixelEditor.panel.general.new')",
                color="gold-tips",
                @click="newImage()"
              )

      nn-row
        nn-column(size="35")
          btn(glyph="open", color="burn-orange", @click="openImage()")
        nn-column(size="100%-35")
          label.btn.flat.gold-tips
            | {{ $t('canvas.section.pixelEditor.panel.general.open') }}
            input(
              type="file",
              ref="file",
              style="display: none",
              @change="openImage()"
            )

      nn-row
        nn-column(size="100%")
          nn-row
            nn-column(size="35")
              btn(glyph="save", color="burn-orange", @click="saveJson()")
            nn-column(size="100%-35")
              btn(
                :text="$t('canvas.section.pixelEditor.panel.general.save')",
                color="gold-tips",
                @click="saveJson()"
              )

      nn-row
        nn-column(size="100%")
          nn-row
            nn-column(size="35")
              btn(glyph="download", color="burn-orange", @click="saveImage()")
            nn-column(size="100%-35")
              btn(
                :text="$t('canvas.section.pixelEditor.panel.general.export')",
                color="gold-tips",
                @click="saveImage()"
              )

  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('canvas.section.pixelEditor.panel.tools.legend') }}

      nn-row
        nn-column(size="100%")
          nn-row
            nn-column(size="35")
              btn(
                :glyph="selection.lock ? 'lock' : 'unlock'",
                :color="selection.lock ? 'green-pea' : 'burn-orange'",
                @click="lockWorkarea()"
              )
            nn-column(size="100%-35")
              btn(
                :text="$t('canvas.section.pixelEditor.panel.tools.lock')",
                color="gold-tips",
                @click="lockWorkarea()",
                :active="selection.lock"
              )

      nn-row
        nn-column(size="100%")
          nn-row
            nn-column(size="35")
              btn(
                glyph="eyedropper",
                :color="selection.tool === 'dropper' ? 'green-pea' : 'burn-orange'",
                @click="pickDropper()"
              )
            nn-column(size="100%-35")
              btn(
                :text="$t('canvas.section.pixelEditor.panel.tools.dropper')",
                color="gold-tips",
                @click="pickDropper()",
                :active="selection.tool === 'dropper'"
              )

      nn-row
        nn-column(size="100%")
          nn-row
            nn-column(size="35")
              btn(
                glyph="eraser",
                :color="selection.currentColor.spinalCase === 'empty' ? 'green-pea' : 'burn-orange'",
                @click="eraser()"
              )
            nn-column(size="100%-35")
              btn(
                :text="$t('canvas.section.pixelEditor.panel.tools.eraser')",
                color="gold-tips",
                @click="eraser()",
                :active="selection.currentColor.spinalCase === 'empty'"
              )

  nn-row.row-block
    nn-column(size="100%")
      legend {{ $t('canvas.section.pixelEditor.panel.palette.legend') }}

      nn-row.list-palette(group, integrated)
        nn-column(size="100%-40")
          p.input-label {{ selection.currentColor.titleCase }}
        nn-column(size="40")
          span.shade(
            :style="`background-color: ${selection.currentColor.rgb}`"
          )

      nn-row
        nn-column(size="100%"): hr

      nn-row
        nn-column.palette(size="100%")
          nn-row.palette
            template(v-for="color in pixelColors")
              nn-column(size="20%")
                button.shade(
                  @click="changeColor(color)",
                  :style="`background-color: ${color.rgb}`",
                  v-nano-tooltip.right="color.titleCase"
                )

            nn-column(size="100%"): hr

            nn-column(size="100%")
              toggle-row.toggle-input(breakpoint="lg")
                template(v-slot:header)
                  nn-column(size="100%-35") {{ $t('canvas.section.pixelEditor.panel.palette.more') }}
                template(v-slot:more)
                  template(v-for="color in wikiColors")
                    nn-column(size="20%")
                      button.shade(
                        @click="changeColor(color)",
                        :style="`background-color: ${color.rgb}`",
                        v-nano-tooltip.right="color.titleCase"
                      )
</template>

<script>
import Vue from "vue";
import { pixelColors, wikiColors, allColors } from "../db/wiki-colors";
import { wikiColorEnum } from "../enums/wikicolors";
import h from "../modules/helpers";
import ToggleRow from "../components/toggle-row.vue";

export default Vue.extend({
  components: { ToggleRow },
  data: () => ({
    selection: {},
    pixelColors: Object.values(pixelColors),
    wikiColors: Object.values(wikiColors)
      .sort((a, b) => {
        return a.lightness - b.lightness;
      })
      .sort((a, b) => {
        return b.saturation - a.saturation;
      })
      .sort((a, b) => {
        return a.hue - b.hue;
      })
      .sort((a, b) => {
        return a.opacity - b.opacity;
      }),
  }),
  created() {
    this.selection = this.$store.getters.getPixelSelection;
  },
  methods: {
    pickDropper() {
      this.selection.tool = "dropper";
    },
    eraser() {
      this.selection.currentColor = allColors.empty;
    },
    lockWorkarea() {
      this.selection.lock = !this.selection.lock;
    },
    changeColor(color) {
      this.selection.currentColor = color;
    },
    openImage() {
      const reader = new FileReader();
      const newFile = this.$refs.file.files[0];
      reader.onload = (res) => {
        this.selection.pixelGrid = JSON.parse(res.target.result).map((y) =>
          y.map((x) => allColors[wikiColorEnum[h.hexToDec(x)]])
        );
      };
      reader.onerror = (err) => console.log(err);
      reader.readAsText(newFile);
    },
    newImage() {
      const newMatrix = this.selection.pixelGrid.map((y) =>
        y.map((x) => allColors.empty)
      );
      this.selection.pixelGrid = newMatrix;
    },
    saveImage() {
      // stage.toDataURL({
      //   pixelRatio: 2 // or other value you need
      // })
    },
    saveJson() {
      const arr = this.selection.pixelGrid.map((y) =>
        y.map((x) => {
          let id = h.decToHex(wikiColorEnum[x.spinalCase]);
          if (id.length < 2) {
            id = "0" + id;
          }
          if (id.length < 3) {
            id = "0" + id;
          }
          return id;
        })
      );
      const jsData = JSON.stringify(arr)
        .replace(/\[\[/g, "[\n[")
        .replace(/\],/g, "],\n")
        .replace(/\]\]/g, "]\n]");
      const filename = "image.json";

      let blob = new Blob([jsData], { type: "text/plain;charset=utf-8;" });
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let link = document.createElement("a");
        if (link.download !== undefined) {
          let url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", filename);
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    },
  },
});
</script>