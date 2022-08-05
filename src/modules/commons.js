import Vue from 'vue';
import NanoBtn from '@/components/btn.vue';
import Gear from '@/components/web/gear';
import Star from '@/components/web/star';

Vue.component("btn", NanoBtn);

window.customElements.define('web-gear', Gear);
window.customElements.define('web-star', Star);