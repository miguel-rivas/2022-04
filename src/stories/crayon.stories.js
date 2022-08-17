export default {
  title: 'Crayon',
};

const Template = ({ color, text, mode, direction, glyph, flip, active }) => ({
  template: `
  <nn-crayon />`,
});

export const Denim = Template.bind({});
Denim.args = {
  // mode: "flat"
};