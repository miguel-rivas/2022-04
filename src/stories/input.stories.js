import SliderComponent from "@/components/slider.vue";
// import IconComponent from "nano-grid/components/icon";
// import "./button.scss";
// import ColorsType from "@/enums/colors";
// import IconsType from "@/enums/icons";

// window.customElements.define('nn-icon', IconComponent);
// window.customElements.define('nn-btn', BtnComponent);

export default {
  components: { "slider": SliderComponent },
  title: 'Input',
  argTypes: {
    mode: {
      control: 'select',
      options: ['flat', 'nav', 'outline', 'ghost']
    },
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right']
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
  }
};

const Template = ({ color, text, mode, direction, glyph, flip, active }) => ({
  template: `
  <slider />`,
});

export const Slider = Template.bind({});
Slider.args = {
  // mode: "flat"
};

export const ToggleRow = Template.bind({});
ToggleRow.args = {
  // mode: "flat"
};

export const SpiritCode = Template.bind({});
SpiritCode.args = {
  // mode: "flat"
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  // mode: "flat"
};