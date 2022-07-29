import Enumerator from "../modules/enumerator";

export const tool = {
  html: "HTML",
  erb: "HTML/ERB",
  pug: "Pug",
  jade: "Pug",
  haml: "Haml",
  slim: "Slim",

  canvas: "Canvas",
  svg: "SVG",
  
  css: "CSS",
  sass: "SCSS",
  scss: "SCSS",
  less: "Less",

  rails: "Ruby on Rails",
  php: "PHP",
  python: "Python",
  
  javascript: "Javascript",
  vue: "Vue",
  angular: "Angular",
  react: "React",
  svelte: "Svelte",
  three: "ThreeJS",
  jQuery: "jQuery",
  json: "JSON",
  typescript: "TypeScript",
  vuex: "Vuex",
  vueRouter: "Vue Router",
  sizzle: "Sizzle",
  lodash: "Lodash",
  velocity: "Velocity.js",
  sweetAlert: "Sweetalert",
  stellar: "stellarJS",
  snapSVG: "snapSVG",
  chartJS: "ChartJS",
  axios: "Axios",
  gmap: "Google Maps",
  highlight: "Highlight.js",
  konva: "Konva",
  webComponents: "Web Components",
  i18n: "vue-i18n",
  tweenMax: "TweenMax",
  redux: "Redux",
  phaser: "Phaser",
  
  gulp: "Gulp",
  grunt: "GruntJS",
  webpack: "Webpack",
  
  markdown: "Markdown",
  bootstrap: "Bootstrap",
  
  git: "Git",
  
  flash: "Adobe Flash",
  illustrator: "Adobe Illustrator",
  photoshop: "Adobe Photoshop",
  indesign: "Adobe Indesign",
  afterEffects: "Adobe After Effects",
  premiere: "Adobe Premiere",
  freehand: "Freehand",
  inkscape: "Inkscape",
  scribus: "Scribus",
  sk1: "SK1",
  fireworks: "Fireworks",
  corelDraw: "Corel Draw",
  autocad: "Autocad",
  gimp: "Gimp",
  
  blender: "Blender",
  maya: "Maya",
  unity: "Unity",
  
  animate: "Animate CSS",
  kotlin: "Kotlin",
  
  jest: "Jest",
  cucumber: "Cucumber",
  
  mysql: "MySQL",
  firebase: "Firebase",
  mongo: "MongoDB",
  
  wordpress: "Wordpress",
  drupal: "Drupal",
  miva: "Miva",
  joomla: "Joomla",

  
  pencil: "Pencil",
  pascal: "Pascal",
  c: "C++",
  vb: "Visual Basic",
  vfoxpro: "Visual FoxPro",
  bash: "Bash",
  tkinter: "Tkinter",

  linux: "Linux",
  excel: "Microsoft Excel",
  word: "Microsoft Word",
  powerpoint: "Microsoft Powerpoint",
  dreamweaver: "Adobe Dreamweaver",
  as2: "ActionScript 2",
  as3: "ActionScript 3",
};

export const toolR = Object.values(tool);

export const toolEnum = new Enumerator(
  ...Object.keys(tool)
);