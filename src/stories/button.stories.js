import "./button.scss";

import BtnComponent from "nano-grid/components/btn";
import IconComponent from "nano-grid/components/icon";

import ColorsType from "@/enums/colors";
import IconsType from "@/enums/icons";

window.customElements.define('nn-icon', IconComponent);
window.customElements.define('nn-btn', BtnComponent);


export default {
  title: 'Button',
  argTypes: {
    mode: {
      control: 'select',
      options: ['flat', 'nav', 'outline', 'ghost']
    },
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right']
    },
    color: {
      control: 'select',
      options: ColorsType
    },
    glyph: {
      control: 'select',
      options: IconsType,
    },
  },
  args: {
    text: "Button",
    color: "denim",
    mode: "flat",
    direction: "",
    glyph: "",
    flip: false,
    active: false,
  },
};

const Template = ({ color, text, mode, direction, glyph, flip, active }) => ({
  template: `
  <nn-btn
    color="${color}"
    active="${active}"
    flip="${flip}"
    text="${text}"
    mode="${mode}"
    direction="${direction}"
    glyph="${glyph}"
  />`,
});

export const Flat = Template.bind({});
Flat.args = {
  mode: "flat"
};

export const Outline = Template.bind({});
Outline.args = {
  mode: "outline"
};

export const Ghost = Template.bind({});
Ghost.args = {
  mode: "ghost"
};

export const Icon = Template.bind({});
Icon.args = {
  glyph: "search",
  text: "",
};