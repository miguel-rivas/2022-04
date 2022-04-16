<template lang="pug">
.three-scene(ref="threeScene")
</template>

<script>
import Vue from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import StudioLight from "../mixins/three-studio-light";
import h, {getZapp} from "../modules/helpers";
import { mapGetters } from "vuex";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default Vue.extend({
  mixins: [StudioLight],
  props: {
    mesh: {
      type: String,
      default: "",
    },
    minPolarAngle: {
      type: Number,
      default: 75 * h.rad,
    },
    maxPolarAngle: {
      type: Number,
      default: 120 * h.rad,
    },
    minDistance: {
      type: Number,
      default: 120,
    },
    maxDistance: {
      type: Number,
      default: 120,
    },
  },
  data: () => ({
    winHeight: 800,
    winWidth: undefined,
    controls: undefined,
    scene: undefined,
    camera: undefined,
    renderer: undefined,
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
    panelsSize() {
      return this.panel ? 350 : 50;
    },
  },
  methods: {
    render() {
      this.renderCommon();
    },
    buildGeometry(mesh) {
      const loader = new GLTFLoader();

      (function (scene) {
        loader.load(
          getZapp(`3d/${mesh}.glb`),
          function (gltf) {
            scene.add(gltf.scene);
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );
      })(this.scene);
    },
    renderCommon() {
      if (this.controls) {
        this.controls.update();
      }
      requestAnimationFrame(this.render);
      
      this.scene.rotation.y += 1 * 0.01;
      
      this.renderer.render(this.scene, this.camera);
    },
    buildScene(
      cameraPosition = { x: 1, y: 1, z: 1 },
      perspectiveCamera = { fov: 3, aspect: this.winWidth / this.winHeight, near: 1, far: 1000 },
    ) {
      this.winWidth = window.innerWidth - this.panelsSize;
      this.scene = new THREE.Scene();
      this.scene.position.y = -4;
      this.scene.position.x = 5;

      this.camera = new THREE.PerspectiveCamera(
        perspectiveCamera.fov,
        perspectiveCamera.aspect,
        perspectiveCamera.near,
        perspectiveCamera.far
      );
      this.camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.controls.minPolarAngle = this.minPolarAngle;
      this.controls.maxPolarAngle = this.maxPolarAngle;

      this.controls.minDistance = this.minDistance;
      this.controls.maxDistance = this.maxDistance;

      this.controls.enablePan = false;

      this.$refs.threeScene.appendChild(this.renderer.domElement);
    },
    resizeWindow() {
      this.winWidth = window.innerWidth - this.panelsSize;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();
    },
  },
  mounted() {
    this.buildScene();
    this.studioLight();
    this.buildGeometry(this.mesh);
    this.render();
  },
  created() {
    window.addEventListener("resize", this.resizeWindow);
  },
  beforeDestroy() {
    this.render = () => {};
    window.removeEventListener("resize", this.resizeWindow);
  },
  watch: {
    panel: function () {
      this.resizeWindow();
    },
  },
});
</script>