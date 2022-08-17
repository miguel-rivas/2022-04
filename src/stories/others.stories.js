export default {
  title: 'Others',
};

const TemplateGrid = ({ color, text, mode, direction, glyph, flip, active }) => ({
  template: `
  <nn-row>
    <nn-column size="50%">
    </nn-column>
  </nn-row>`,
});

export const Row = TemplateGrid.bind({});
Row.args = {
  // mode: "flat"
};

const Template = ({ color, text, mode, direction, glyph, flip, active }) => ({
  template: `
  <nn-scroll-area />`,
});

export const ScrollArea = Template.bind({});
ScrollArea.args = {
  // mode: "flat"
};

export const Container = Template.bind({});
Container.args = {
  // mode: "flat"
};

export const Icon = Template.bind({});
Icon.args = {
  // mode: "flat"
};

