export default {
  title: 'Canvas',
};

const Template = ({ color, text, mode, direction, glyph, flip, active }) => ({
  template: `
  <nn-scroll-area />`,
});

export const PieChart = Template.bind({});
PieChart.args = {
  // mode: "flat"
};

export const BarChart = Template.bind({});
BarChart.args = {
  // mode: "flat"
};

export const LineChart = Template.bind({});
LineChart.args = {
  // mode: "flat"
};

export const ThreeModel = Template.bind({});
ThreeModel.args = {
  // mode: "flat"
};

export const KonvaCarrousel = Template.bind({});
KonvaCarrousel.args = {
  // mode: "flat"
};