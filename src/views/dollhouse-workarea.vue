<template lang="pug">
.map
  div(ref="mapContainer")
    v-stage(:config="mapPos", @dragmove="dragging", ref="stage", @wheel="zoom")
      v-layer
        template(v-if="viewSide === 'right'")
          v-image(:config="mapR")
          template(v-for="(image, index) in imgRight")
            v-image(
              :key="`mapImgRight${index}`",
              @mouseover="hoverImg",
              @mouseout="mouseOutImg",
              @click="openModal(image.client)",
              :config="image"
            )
        template(v-else)
          v-image(:config="mapL")
          template(v-for="(image, index) in imgLeft")
            v-image(
              :key="`mapImgLeft${index}`",
              @mouseover="hoverImg",
              @mouseout="mouseOutImg",
              @click="openModal(image.client)",
              :config="image"
            )
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    panelWidth: 0,
    mapL: {
      image: null,
    },
    mapR: {
      image: null,
    },
    averageBuildingImageWidth: 150,
    img: [],
    imgRight: [
      {
        name: "pole",
        image: null,
        x: 2384,
        y: 692,
        opacity: 0,
      },
      {
        name: "avocado",
        image: null,
        x: 2750,
        y: 933,
        opacity: 0,
      },
      {
        name: "pc",
        image: null,
        x: 1602,
        y: 1155,
        opacity: 0,
      },
      {
        name: "backpack",
        image: null,
        x: 1602,
        y: 967,
        opacity: 0,
      },
      {
        name: "sink",
        image: null,
        x: 911,
        y: 899,
        opacity: 0,
      },
      {
        name: "stove",
        image: null,
        x: 1107,
        y: 839,
        opacity: 0,
      },
    ],
    imgLeft: [
      {
        name: "pole",
        image: null,
        x: 3018,
        y: 380,
        opacity: 0,
      },
      {
        name: "avocado",
        image: null,
        x: 2244,
        y: 654,
        opacity: 0,
      },
      {
        name: "pc",
        image: null,
        x: 2306,
        y: 916,
        opacity: 0,
      },
      {
        name: "backpack",
        image: null,
        x: 1528,
        y: 916,
        opacity: 0,
      },
      {
        name: "sink",
        image: null,
        x: 804,
        y: 1297,
        opacity: 0,
      },
      {
        name: "stove",
        image: null,
        x: 723,
        y: 1140,
        opacity: 0,
      },
    ],
    selection: {},
    stage: undefined,
    configKonva: {
      width: 0,
      height: 0,
    },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      panelSize: "getPanelVisibility",
      viewSide: "getDollHouseViewSide",
    }),
    mapPos() {
      if (this.mapR.image || this.mapL.image) {
        return {
          x: Math.max(
            Math.min(
              this.selection.mapCenter.x -
                this.averageBuildingImageWidth +
                this.configKonva.width / 2,
              0
            ),
            -this.mapR.image.width
          ),
          y: Math.max(
            Math.min(
              this.selection.mapCenter.y -
                this.averageBuildingImageWidth +
                this.configKonva.height / 2,
              0
            ),
            -this.mapR.image.height
          ),
          draggable: true,
          width: this.configKonva.width,
          height: this.configKonva.height,
        };
      } else {
        return {
          x: 0,
          y: 0,
          draggable: true,
          width: this.configKonva.width,
          height: this.configKonva.height,
        };
      }
    },
  },
  created() {
    this.selection = this.$store.getters.getDollHouseSelection;
    window.addEventListener("resize", this.updateCanvas);
    this.createImgs();
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.$refs.mapContainer.style.cursor = "grab";
    this.updateCanvas();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
    viewSide: function () {
      this.createImgs();
    },
  },
  methods: {
    createImgs() {
      this.mapR.temp = new window.Image();
      this.mapR.temp.src = this.getZapp(`img/dollhouse/dollhouse-r.webp`);
      this.mapR.temp.onload = () => {
        this.mapR.image = this.mapR.temp;
      };

      this.imgRight.forEach((item) => {
        item.temp = new window.Image();
        item.temp.src = this.getZapp(`img/dollhouse/${item.name}-r.webp`);
        item.temp.onload = () => {
          item.image = item.temp;
        };
      });

      this.mapL.temp = new window.Image();
      this.mapL.temp.src = this.getZapp(`img/dollhouse/dollhouse-l.webp`);
      this.mapL.temp.onload = () => {
        this.mapL.image = this.mapL.temp;
      };

      this.imgLeft.forEach((item) => {
        item.temp = new window.Image();
        item.temp.src = this.getZapp(`img/dollhouse/${item.name}-l.webp`);
        item.temp.onload = () => {
          item.image = item.temp;
        };
      });

      this.img = [...this.imgRight, this.imgLeft];
    },
    openModal(filter) {
      this.modal.data = locationsDBList.find((item) => item.client === filter);
      this.modal.hidden = false;
    },
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.configKonva.width = window.innerWidth - (margin - 50);
      this.configKonva.height = window.innerHeight;
      this.dragging();
    },
    hoverImg(event) {
      event.target.opacity(1);
      this.$refs.mapContainer.style.cursor = "pointer";
    },
    mouseOutImg(event) {
      event.target.opacity(0);
      this.$refs.mapContainer.style.cursor = "grab";
    },
    dragging() {
      if (this.mapR.image || this.mapL.image) {
        let nx = this.stage.position().x;
        let ny = this.stage.position().y;

        this.stage.position({ x: nx, y: ny });
      }
    },
    zoom(event) {
      const scale = 0.99;
      const maxZoom = 120 / 100;
      const minZoom = 30 / 100;

      event.evt.preventDefault();
      let oldScale = this.stage.scaleX();

      let mousePointTo = {
        x:
          this.stage.getPointerPosition().x / oldScale -
          this.stage.x() / oldScale,
        y:
          this.stage.getPointerPosition().y / oldScale -
          this.stage.y() / oldScale,
      };

      let newScale = event.evt.deltaY > 0 ? oldScale * scale : oldScale / scale;

      newScale = newScale > maxZoom ? maxZoom : newScale;
      newScale = newScale < minZoom ? minZoom : newScale;

      this.stage.scale({ x: newScale, y: newScale });

      let newPos = {
        x:
          -(mousePointTo.x - this.stage.getPointerPosition().x / newScale) *
          newScale,
        y:
          -(mousePointTo.y - this.stage.getPointerPosition().y / newScale) *
          newScale,
      };
      this.stage.position(newPos);
      this.updateCanvas();
    },
  },
});
</script>