import { create } from '@storybook/theming';

let foregroundColor = '#f2f2f2';

const getZapp = (path) => {
  return `https://miguel-rivas.github.io/zapp/${path}`;
}

export default create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#23232f',
  appContentBg: '#202028',
  appBorderColor: 'rgb(203 205 223 / 5%)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", "Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: foregroundColor,
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: foregroundColor,
  barSelectedColor: '#88e2b4',
  barBg: 'hsl(240deg 12% 11%)',

  // Form colors
  inputBg: '#272730',
  inputBorder: 'transparent',
  inputTextColor: foregroundColor,
  inputBorderRadius: 0,

  brandTitle: 'Nano Grid',
  // brandUrl: 'https://example.com',
  brandImage: getZapp('img/nanogrid/nano.svg'),
  // brandTarget: '_self',
});