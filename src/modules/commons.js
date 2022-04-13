import Vue from 'vue';
import NanoBtn from '@/components/btn.vue';
import Gear from '@/components-web/gear';

Vue.component("btn", NanoBtn);

window.customElements.define('web-gear', Gear);