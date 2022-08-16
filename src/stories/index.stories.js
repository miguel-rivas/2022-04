// import "@fontsource/montserrat/latin-300.css";
// import "@fontsource/montserrat/latin-400.css";
// import "@fontsource/montserrat/latin-600.css";
// import "@fontsource/montserrat/latin-700.css";

import Btn from "nano-grid/components/btn";
import Icon from "nano-grid/components/icon";
import "nano-grid/scss/nano-grid.scss";
// import "nano-grid/scss/btn-nav";
// import "nano-grid/scss/btn-ghost";
// import "nano-grid/scss/btn-outline";
// import "nano-spirit/scss/nano-spirit";

window.customElements.define('nn-icon', Icon);
window.customElements.define('nn-btn', Btn);

export default {
  title: 'Button',
};

const Template = ({ color, text, mode, direction, glyph }) => ({
  template: `<nn-btn color="${color}" text="${text}" mode="${mode}" direction="${direction}" glyph="${glyph}" />`,
});

export const Flat = Template.bind({});

Flat.args = {
  text: "Button",
  color: "denim",
  mode: "flat",
  direction: "down",
  glpyh: "",
};