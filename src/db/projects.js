import { toolEnum } from "../enums/tools";
import { type } from "../enums/types";
import { client } from "../enums/clients";

import { Project, Children, Link, LinkCodepen, LinkVimeo, LinkGithub, LinkWeb, Preview } from "../classes/project";

const pj = [
  new Project(
    "2022/04/11",
    "Portfolio Matryoshka",
    type.app,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.three,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.chartJS,
      toolEnum.konva,
      toolEnum.pug,
      toolEnum.i18n,
      toolEnum.webComponents
    ],
    new Preview("2022.jpg"),
    [
      new LinkGithub("matryoshka")
    ],
    [
      new Children(client.miguelRivas, "2021/12/20"),
      new Children(client.miguelRivas, "2021/08/12"),
      new Children(client.miguelRivas, "2018/01/01"),
      new Children(client.miguelRivas, "2016/08/11"),
      new Children(client.miguelRivas, "2014/02/09"),
    ],
    undefined
  ),

  new Project(
    "2021/12/20",
    "Portfolio 2022",
    type.app,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.three,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.chartJS,
      toolEnum.konva,
      toolEnum.pug,
      toolEnum.i18n,
    ],
    new Preview("2022.jpg"),
    [
      new LinkGithub("2022")
    ],
    [
      new Children(client.itla, "2011/07/06"),
      new Children(client.itla, "2011/07/25"),
      new Children(client.miguelRivas, "2012/11/06"),
      new Children(client.miguelRivas, "2015/05/23"),
      new Children(client.miguelRivas, "2015/05/25"),
      new Children(client.miguelRivas, "2015/05/28"),
      new Children(client.miguelRivas, "2017/01/01"),
      new Children(client.miguelRivas, "2017/02/20"),
      new Children(client.miguelRivas, "2018/06/27"),
      new Children(client.miguelRivas, "2021/03/22"),
      new Children(client.miguelRivas, "2021/02/27"),
      new Children(client.miguelRivas, "2022/01/05"),
      new Children(client.miguelRivas, "2022/01/24"),
      new Children(client.miguelRivas, "2022/02/02"),
      new Children(client.miguelRivas, "2022/02/07"),
      new Children(client.miguelRivas, "2022/02/20"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2022/03/04",
    "Grid Gallery",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.pug,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2022/02/20",
    "Pixel Editor",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.konva,
      toolEnum.pug,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2022/02/07",
    "Avatar Builder",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.konva,
      toolEnum.pug,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2022/02/02",
    "3D House",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.scss,
      toolEnum.git,
      toolEnum.pug,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2022/01/24",
    "Map 3D",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.blender,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2008/12/05",
    "Falling Code / Game",
    type.app,
    client.itesa,
    [
      toolEnum.vb,
    ],
    undefined,
    [
      new LinkGithub("visualbasic")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2008/11/11",
    "Bouncing Shapes",
    type.app,
    client.itesa,
    [
      toolEnum.vb,
    ],
    undefined,
    [
      new LinkGithub("visualbasic")
    ],
    [
      new Children(client.itesa, "2008/05/16"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2008/05/16",
    "Analog Clock",
    type.app,
    client.itesa,
    [
      toolEnum.vb,
    ],
    undefined,
    [
      new LinkGithub("visualbasic")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2005/10/01",
    "ATM",
    type.app,
    client.itesa,
    [
      toolEnum.pascal,
    ],
    undefined,
    [
      new LinkGithub("pascal-2004")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2005/10/02",
    "Bubble Sort",
    type.app,
    client.itesa,
    [
      toolEnum.pascal,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2005/10/03",
    "Infinite Menu",
    type.app,
    client.itesa,
    [
      toolEnum.pascal,
    ],
    undefined,
    [
      new LinkGithub("pascal-2004")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2005/10/04",
    "Fibonacci Sequence",
    type.app,
    client.itesa,
    [
      toolEnum.pascal,
    ],
    undefined,
    [
      new LinkGithub("pascal-2004")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2005/10/05",
    "Summatory / Accumulator",
    type.app,
    client.itesa,
    [
      toolEnum.pascal,
    ],
    undefined,
    [
      new LinkGithub("pascal-2004")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2005/09/28",
    "Random Number",
    type.app,
    client.itesa,
    [
      toolEnum.pascal,
    ],
    undefined,
    [
      new LinkGithub("pascal-2004")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2007/09/04",
    "Pacman Pixel Draw",
    type.app,
    client.itesa,
    [
      toolEnum.c,
    ],
    undefined,
    [
      new LinkGithub("pascal-2004")
    ],
    [
      new Children(client.miguelRivas, "2021/11/08"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2008/05/17",
    "Tetravex",
    type.app,
    client.itesa,
    [
      toolEnum.vb,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2008/05/18",
    "Minesweeper",
    type.app,
    client.itesa,
    [
      toolEnum.vb,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2006/01/05",
    "Falling Code / Matrix Effect",
    type.app,
    client.itesa,
    [
      toolEnum.vb,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/12/06",
    "Pasteleria Del Jardin",
    type.socialMedia,
    client.delJardin,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/8", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/06/18",
    "Lanza tu Promo",
    type.socialMedia,
    client.highschool,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/10", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/05/28",
    "Audrey Hepburn",
    type.document,
    client.miguelRivas,
    [
      toolEnum.photoshop,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/12", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/03/21",
    "Audio 2",
    type.document,
    client.itla,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/14", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/11/26",
    "Beauty is a Beast",
    type.document,
    client.itla,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/16", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/10/24",
    "Linux Grub",
    type.document,
    client.miguelRivas,
    [
      toolEnum.freehand,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/24", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2019/07/10",
    "Play Sound",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.javascript,
    ],
    undefined,
    [
      new LinkCodepen("bPzVPJ")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/08/08",
    "Switch",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.scss,
      toolEnum.slim,
    ],
    undefined,
    [
      new LinkCodepen("LYNEwLZ")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/06/17",
    "Toggle Arrow",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.scss,
      toolEnum.slim,
    ],
    undefined,
    [
      new LinkCodepen("VwembzX")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/08/18",
    "Range Slider",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.scss,
      toolEnum.slim,
    ],
    undefined,
    [
      new LinkCodepen("qBZNMyQ")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/07/17",
    "Madre Naturaleza",
    type.document,
    client.miguelRivas,
    [
      toolEnum.sk1,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/40", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/04/24",
    "El Montaje",
    type.document,
    client.itla,
    [
      toolEnum.flash,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/42", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/02/22",
    "Transformer",
    type.document,
    client.itla,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/44", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2009/04/27",
    "Flygon",
    type.document,
    client.miguelRivas,
    [
      toolEnum.fireworks,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/48", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/12/12",
    "Baká",
    type.document,
    client.miguelRivas,
    [
      toolEnum.indesign,
      toolEnum.pencil,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/16", "Document"),
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/28", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/06/14",
    "Le Machine",
    type.document,
    client.miguelRivas,
    [
      toolEnum.inkscape,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/18", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/01/16",
    "Stars",
    type.document,
    client.miguelRivas,
    [
      toolEnum.inkscape,
      toolEnum.html,
      toolEnum.javascript,
      toolEnum.css,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/20", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/06/25",
    "Water Matters",
    type.document,
    client.itla,
    [
      toolEnum.indesign,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/24", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/06/21",
    "Wickhop",
    type.document,
    client.miguelRivas,
    [
      toolEnum.inkscape,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/28", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/04/29",
    "Corel Draw",
    type.document,
    client.miguelRivas,
    [
      toolEnum.corelDraw,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/34", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/08/03",
    "MP4",
    type.document,
    client.itla,
    [
      toolEnum.flash,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/38", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/04/25",
    "Dream",
    type.document,
    client.itla,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/40", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2010/12/27",
    "Lapices de Colores",
    type.document,
    client.miguelRivas,
    [
      toolEnum.fireworks,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/48", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/07/14",
    "Living Walls",
    type.graphicDesign,
    client.miguelRivas,
    [
      toolEnum.inkscape,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/42", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/08/23",
    "Tambora",
    type.document,
    client.miguelRivas,
    [
      toolEnum.inkscape,
      toolEnum.indesign
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/38", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/09/20",
    "T-Magazine",
    type.document,
    client.miguelRivas,
    [
      toolEnum.scribus,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/32", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/11/30",
    "AguacateKun Identidad",
    type.document,
    client.miguelRivas,
    [
      toolEnum.autocad,
      toolEnum.illustrator,
      toolEnum.indesign,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/14", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/01/20",
    "Libro de Cuentos",
    type.graphicDesign,
    client.miguelRivas,
    [
      toolEnum.gimp,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/10", "Document"),
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/14", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/12/03",
    "Vacaciones Navideñas",
    type.socialMedia,
    client.descubria,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/12", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/08/03",
    "Social Network Facebook",
    type.socialMedia,
    client.socialNetwork,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/16", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/07/06",
    "Facebook App",
    type.graphicDesign,
    client.tiempoExtra,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/18", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/07/05",
    "Home Gallery Facebook",
    type.socialMedia,
    client.homeGallery,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/20", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/07/05",
    "SDQ Training Center Facebook",
    type.socialMedia,
    client.sdq,
    [
      toolEnum.illustrator,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/22", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/06/27",
    "Harina Blaquita Facebook",
    type.socialMedia,
    client.harinaBlanquita,
    [
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/24", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/12/29",
    "Jenny Aquino",
    type.graphicDesign,
    client.miguelRivas,
    [
      toolEnum.inkscape
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/26", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/10/12",
    "Blindness Poster",
    type.graphicDesign,
    client.itla,
    [
      toolEnum.photoshop
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/30", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/09/13",
    "Diseño de Productos",
    type.document,
    client.itla,
    [
      toolEnum.indesign
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/34", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/04/16",
    "Raspberry Pi C",
    type.graphicDesign,
    client.itla,
    [
      toolEnum.inkscape
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/44", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/02/28",
    "Maggiver",
    type.graphicDesign,
    client.mangoBajito,
    [
      toolEnum.inkscape
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005/46", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2013/12/15",
    "Badges",
    type.graphicDesign,
    client.cosplayDominicano,
    [
      toolEnum.illustrator
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000/8", "Document")
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/10/26",
    "Print Portfolio",
    type.document,
    client.miguelRivas,
    [
      toolEnum.indesign
    ],
    new Preview("2012.jpg"),
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf3_005", "Portfolio 3"),
      new Link("https://issuu.com/jemiguelrivas/docs/ptf2_000", "Portfolio 2"),
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000", "Portfolio 1"),
    ],
    [
      new Children(client.miguelRivas, "2009/04/27"),
      new Children(client.itla, "2010/07/07"),
      new Children(client.miguelRivas, "2010/12/27"),
      new Children(client.itla, "2011/06/22"),
      new Children(client.itla, "2011/02/22"),
      new Children(client.itla, "2011/04/24"),
      new Children(client.itla, "2011/04/25"),
      new Children(client.itla, "2011/07/06"),
      new Children(client.miguelRivas, "2011/07/17"),
      new Children(client.itla, "2011/07/25"),
      new Children(client.itla, "2011/07/31"),
      new Children(client.itla, "2011/08/03"),
      new Children(client.itla, "2011/11/15"),
      new Children(client.itla, "2011/11/18"),
      new Children(client.itla, "2011/12/05"),
      new Children(client.miguelRivas, "2012/01/16"),
      new Children(client.mangoBajito, "2012/02/28"),
      new Children(client.itla, "2012/04/16"),
      new Children(client.miguelRivas, "2012/04/29"),
      new Children(client.miguelRivas, "2012/06/14"),
      new Children(client.miguelRivas, "2012/06/21"),
      new Children(client.itla, "2012/06/25"),
      new Children(client.miguelRivas, "2012/07/14"),
      new Children(client.itla, "2012/07/24"),
      new Children(client.miguelRivas, "2012/08/23"),
      new Children(client.miguelRivas, "2012/09/26"),
      new Children(client.itla, "2012/09/13"),
      new Children(client.miguelRivas, "2012/09/20"),
      new Children(client.itla, "2012/10/12"),
      new Children(client.miguelRivas, "2012/10/24"),
      new Children(client.miguelRivas, "2012/11/06"),
      new Children(client.itla, "2012/11/26"),
      new Children(client.miguelRivas, "2012/12/12"),
      new Children(client.miguelRivas, "2012/12/29"),
      new Children(client.miguelRivas, "2013/01/20"),
      new Children(client.itla, "2013/03/21"),
      new Children(client.miguelRivas, "2013/05/28"),
      new Children(client.highschool, "2013/06/18"),
      new Children(client.harinaBlanquita, "2013/06/27"),
      new Children(client.sdq, "2013/07/05"),
      new Children(client.homeGallery, "2013/07/05"),
      new Children(client.tiempoExtra, "2013/07/06"),
      new Children(client.socialNetwork, "2013/08/03"),
      new Children(client.miguelRivas, "2013/11/30"),
      new Children(client.descubria, "2013/12/03"),
      new Children(client.delJardin, "2013/12/06"),
      new Children(client.cosplayDominicano, "2013/12/15"),
      new Children(client.miguelRivas, "2014/02/09"),
    ],
    undefined
  ),

  new Project(
    "2015/01/03",
    "Mainfront",
    type.app,
    client.miguelRivas,
    [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    new Preview("mainfront.jpg"),
    [
      new LinkWeb("main-front", "App"),
      new LinkGithub("main-front"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/04/19",
    "CSS Study",
    type.app,
    client.miguelRivas,
    [
      toolEnum.angular,
      toolEnum.sweetAlert,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.pug,
      toolEnum.git,
    ],
    new Preview("css-study.jpg"),
    [
      new LinkWeb("css-study", "App"),
      new LinkGithub("css-study"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/03/24",
    "Hello",
    type.app,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.git,
    ],
    new Preview("hello.jpg"),
    [
      new LinkWeb("hello", "Berlin", ["city=berlin"]),
      new LinkWeb("hello", "Dusseldorf", ["city=dusseldorf"]),
      new LinkWeb("hello", "Melbourne", ["city=melbourne"]),
      new LinkWeb("hello", "Schwangau", ["city=shwangau"]),
      new LinkWeb("hello", "Texas", ["city=texas"]),
      new LinkGithub("hello"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/04/26",
    "Evolution of the Web",
    type.app,
    client.miguelRivas,
    [
      toolEnum.stellar,
      toolEnum.inkscape,
      toolEnum.pug,
      toolEnum.git,
      toolEnum.scss,
    ],
    new Preview("evolution.jpg"),
    [
      new LinkWeb("evolution-web", "App"),
      new LinkGithub("evolution-web"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/14",
    "Robotic Screen",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
    ],
    new Preview("evolution.jpg"),
    [
      new LinkCodepen("oXxPvw"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/23",
    "Minivan",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.pug,
      toolEnum.scss,
    ],
    new Preview("minivan.jpg"),
    [
      new LinkCodepen("oXxPvw"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/25",
    "Window Form",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.scss,
      toolEnum.jade,
      toolEnum.illustrator,
    ],
    new Preview("window.jpg"),
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/28",
    "Gear Builder",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.canvas,
      toolEnum.pug,
      toolEnum.scss,
    ],
    new Preview("gear.jpg"),
    undefined,
    [
      new Children(client.itesa, "2008/05/16"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2015/12/07",
    "SVG 101",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.stellar,
      toolEnum.snapSVG,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    new Preview("svg-101.jpg"),
    [
      new LinkWeb("svg-101", "Prototype"),
      new LinkGithub("svg-101"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/12/22",
    "Tetravex",
    type.app,
    client.miguelRivas,
    [
      toolEnum.javascript,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.sizzle,
      toolEnum.lodash,
      toolEnum.velocity,
      toolEnum.illustrator,
      toolEnum.inkscape,
      toolEnum.git,
    ],
    new Preview("tetravex.jpg"),
    [
      new LinkWeb("tetravex", "App"),
      new LinkGithub("tetravex"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2017/02/20",
    "Pills",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.slim,
      toolEnum.scss,
    ],
    new Preview("tetravex.jpg"),
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2010/07/07",
    "French Toast",
    type.motionGraphics,
    client.itla,
    [
      toolEnum.flash,
    ],
    new Preview("french-toast.jpg"),
    [
      new LinkVimeo("224945169"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/07/24",
    "La Guerra de Vectores",
    type.motionGraphics,
    client.itla,
    [
      toolEnum.flash,
    ],
    new Preview("vectores.jpg"),
    [
      new LinkVimeo("175240185"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/11/21",
    "Wurlex",
    type.animation3D,
    client.itla,
    [
      toolEnum.unity,
      toolEnum.premiere,
    ],
    new Preview("wurlex.jpg"),
    [
      new LinkVimeo("224977703"),
    ],
    [
      new Children(client.itla, "2011/04/25"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2014/02/09",
    "Screens Portfolio",
    type.app,
    client.miguelRivas,
    [
      toolEnum.svelte,
      toolEnum.scss,
      toolEnum.git,
    ],
    new Preview("2014.jpg"),
    [
      new LinkGithub("2014"),
    ],
    [
      new Children(client.miguelRivas, "2012/01/16"),
      new Children(client.miguelRivas, "2015/05/14"),
      new Children(client.miguelRivas, "2015/05/28"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2016/08/11",
    "Spirit Portfolio",
    type.app,
    client.miguelRivas,
    [
      toolEnum.react,
      toolEnum.sass,
      toolEnum.git,
    ],
    new Preview("2016.jpg"),
    [
      new LinkWeb("2016", "App"),
      new LinkGithub("2016"),
    ],
    [
      new Children(client.miguelRivas, "2012/01/16"),
      new Children(client.miguelRivas, "2015/05/14"),
      new Children(client.miguelRivas, "2015/05/28"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2021/08/12",
    "Portfolio 2021",
    type.app,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.three,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.chartJS,
      toolEnum.firebase,
      toolEnum.highlight,
      toolEnum.gmap,
      toolEnum.axios,
    ],
    new Preview("2021.jpg"),
    [
      new LinkGithub("2021"),
    ],
    [
      new Children(client.miguelRivas, "2012/11/06"),
      new Children(client.miguelRivas, "2015/05/28"),
      new Children(client.miguelRivas, "2017/01/01"),
      new Children(client.miguelRivas, "2018/06/27"),
      new Children(client.miguelRivas, "2021/03/22"),
      new Children(client.miguelRivas, "2021/09/12"),
      new Children(client.miguelRivas, "2021/02/27"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2018/01/01",
    "Grid Portfolio",
    type.app,
    client.miguelRivas,
    [
      toolEnum.angular,
      toolEnum.scss,
      toolEnum.git,
    ],
    new Preview("2018.jpg"),
    [
      new LinkGithub("2018"),
    ],
    [
      new Children(client.miguelRivas, "2021/03/24"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2016/01/11",
    "HTML/LOVE",
    type.landingPage,
    client.miguelRivas,
    [
      toolEnum.angular,
      toolEnum.scss,
      toolEnum.git,
    ],
    new Preview("html-love.jpg"),
    [
      new LinkWeb("html-love", "App"),
      new LinkGithub("html-love"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/03/22",
    "Nano Grid",
    type.module,
    client.miguelRivas,
    [
      toolEnum.vue,
      toolEnum.scss,
      toolEnum.webComponents,
      toolEnum.git,
      toolEnum.javascript,
      toolEnum.gulp,
    ],
    undefined,
    [
      new Link("https://www.npmjs.com/package/nano-grid", "Node Module"),

      new LinkGithub("nano-grid"),
    ],
    [
      new Children(client.miguelRivas, "2019/07/10"),
      new Children(client.miguelRivas, "2020/08/18"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2021/09/12",
    "MR Kernel",
    type.module,
    client.miguelRivas,
    [
      toolEnum.typescript,
      toolEnum.scss,
      toolEnum.git,
    ],
    undefined,
    [
      new Link("https://www.npmjs.com/package/mr-kernel", "Node Module"),
      new LinkGithub("mr-kernel"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/09/26",
    "Tips of Design",
    type.document,
    client.miguelRivas,
    [
      toolEnum.indesign,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2017/03/05",
    "Art Direction",
    type.document,
    client.miguelRivas,
    [
      toolEnum.indesign,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/10",
    "Bootstrap Prototype",
    type.landingPage,
    client.miguelRivas,
    [
      toolEnum.bootstrap,
      toolEnum.pug,
      toolEnum.illustrator,
      toolEnum.scss,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/03/26",
    "3D Viewer",
    type.app,
    client.miguelRivas,
    [
      toolEnum.react,
      toolEnum.redux,
      toolEnum.three,
      toolEnum.firebase,
      toolEnum.scss,
      toolEnum.typescript,
      toolEnum.git,
    ],
    new Preview("2021-react.jpg"),
    [
      new LinkWeb("2021-react", "App"),
      new LinkGithub("2021-react"),
    ],
    [
      new Children(client.miguelRivas, "2021/03/22"),
      new Children(client.miguelRivas, "2021/09/12"),
      new Children(client.itla, "2011/07/06"),
      new Children(client.itla, "2011/06/22"),
      new Children(client.itla, "2011/07/25"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2017/01/01",
    "FlatCSS",
    type.module,
    client.miguelRivas,
    [
      toolEnum.pug,
      toolEnum.css,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkWeb("flat-css", "App"),
      new LinkGithub("flat-css"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/10/04",
    "Fake Audience",
    type.app,
    client.miguelRivas,
    [
      toolEnum.kotlin,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkGithub("fake_audience"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/02/27",
    "3D Graph Colors",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.three
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/05/09",
    "Animated SVG Header",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.tweenMax,
      toolEnum.html,
      toolEnum.scss,
    ],
    undefined,
    [
      new LinkCodepen("zYvjwEM"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/03/23",
    "Xpinner",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.svg,
      toolEnum.scss,
    ],
    undefined,
    [
      new LinkCodepen("VwLGgYv"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2018/06/27",
    "Color Wheel Creator",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.javascript,
      toolEnum.scss,
    ],
    undefined,
    [
      new LinkCodepen("ERdMLO"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2018/09/11",
    "Movie projector",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.svg,
      toolEnum.scss,
    ],
    undefined,
    [
      new LinkCodepen("rZdMYj"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2018/05/31",
    "Check Animation",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.svg,
      toolEnum.scss,
    ],
    undefined,
    [
      new LinkCodepen("ZRGpbQ"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2018/03/28",
    "Bounce Animation",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.canvas,
    ],
    undefined,
    [
      new LinkCodepen("GxyMMz"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/29",
    "Spinners",
    type.prototype,
    client.miguelRivas,
    [
      toolEnum.pug,
      toolEnum.scss,
    ],
    undefined,
    [
      new LinkCodepen("eNgRRe"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2012/11/06",
    "Drakkar",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.blender,
    ],
    new Preview("drakkar.jpg"),
    [
      new Link("https://sketchfab.com/3d-models/drakkar-d0f14c73155e460cb848a3db80e1cb07", "3D Model"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/12/05",
    "Reloj",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/28", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/11/15",
    "Pencil Sharpener",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/30", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/11/18",
    "Batteries: depth of field",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/30", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/07/25",
    "Audi",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/32", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/07/31",
    "Mackbook Pro",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/34", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/06/22",
    "Backpack",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    undefined,
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/36", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2011/07/06",
    "X-wing",
    type.animation3D,
    client.itla,
    [
      toolEnum.maya,
    ],
    new Preview("x-wing.jpg"),
    [
      new Link("https://issuu.com/jemiguelrivas/docs/ptf1_000/38", "Document"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2014/06/16",
    "Destapa el Coro",
    type.app,
    client.presidente,
    [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.css,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkWeb("presidente-destapa-coro", "App"),
      new LinkGithub("presidente-destapa-coro"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/03/30",
    "Pacman",
    type.motionGraphics,
    client.presidente,
    [
      toolEnum.flash,
    ],
    undefined,
    [
      new LinkVimeo("175240177", "Video"),
    ],
    undefined,
    ["no-listing"]
  ),


  new Project(
    "2015/03/24",
    "BigPapi Selfie",
    type.motionGraphics,
    client.pepsi,
    [
      toolEnum.flash,
    ],
    new Preview("pepsi.jpg"),
    [
      new LinkVimeo("175240184", "Video"),
    ],
    undefined,
    ["no-listing"]
  ),


  new Project(
    "2015/04/18",
    "Carnaval Presidente 2015",
    type.landingPage,
    client.presidente,
    [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.php,
      toolEnum.git,
    ],
    new Preview("carnaval-presidente.jpg"),
    [
      new LinkWeb("presidente-carnaval-2015/filter.html", "Filter"),
      new LinkWeb("presidente-carnaval-2015/home.html", "Home"),
      new LinkGithub("presidente-carnaval-2015"),
    ],
    undefined,
    ["no-listing"]
  ),


  new Project(
    "2015/05/20",
    "Recarga Con RedRock",
    type.motionGraphics,
    client.redRock,
    [
      toolEnum.flash,
    ],
    new Preview("redrock.jpg"),
    [
      new LinkVimeo("175240186", "Video"),
    ],
    undefined,
    ["no-listing"]
  ),


  new Project(
    "2015/10/23",
    "Retrobrindis",
    type.app,
    client.presidente,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    new Preview("retro-brindis.jpg"),
    [

      new LinkWeb("presidente-retro-brindis", "App"),
      new LinkGithub("presidente-retro-brindis"),
    ],
    undefined,
    ["no-listing"]
  ),


  new Project(
    "2015/11/12",
    "Mineriza a tu Familia",
    type.app,
    client.apap,
    [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    new Preview("apap.jpg"),
    [

      new LinkWeb("apap-mineriza-familia", "App"),
      new LinkGithub("apap-mineriza-familia"),
    ],
    [
      new Children(client.miguelRivas, "2017/04/04"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2017/04/04",
    "Promo",
    type.motionGraphics,
    client.apap,
    [
      toolEnum.afterEffects,
      toolEnum.premiere,
    ],
    undefined,
    [
      new LinkVimeo("211801157", "Video"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/12/16",
    "Verano Presidente 2015",
    type.prototype,
    client.presidente,
    [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkWeb("presidente-verano-2015", "Filter"),
      new LinkWeb("presidente-loader", "Loader"),
      new LinkWeb("presidente-verano-2015", "Github"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/02/22",
    "Website",
    type.app,
    client.drLogic,
    [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    new Preview("drlogic.jpg"),
    [
      new LinkWeb("drlogic/home.html", "Home"),
      new LinkWeb("drlogic/about-us.html", "About Us"),
      new LinkWeb("drlogic/contact-us.html", "Contact Us"),
      new LinkWeb("drlogic/portfolio.html", "Portfolio"),
      new LinkWeb("drlogic/404.html", "404"),
      new LinkGithub("drlogic"),
    ],
    [
      new Children(client.drLogic, "2016/03/08"),
      new Children(client.miguelRivas, "2017/03/06"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2017/03/06",
    "Promo",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.flash,
    ],
    new Preview("drlogic.jpg"),
    [
      new LinkVimeo("207152756", "Video"),
    ],
    [
      new Children(client.drLogic, "2016/03/08"),
      new Children(client.miguelRivas, "2017/03/06"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2016/03/08",
    "Terms and Conditions",
    type.document,
    client.drLogic,
    [
      toolEnum.indesign,
    ],
    new Preview("drlogic.jpg"),
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/06/16",
    "Server Prompt",
    type.prototype,
    client.pixelPerfectTree,
    [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.rails,
      toolEnum.git,
    ],
    new Preview("pixel-404.jpg"),
    [
      new LinkWeb("pixel-server-prompt/404", "404"),
      new LinkWeb("pixel-server-prompt/500", "500"),
      new LinkGithub("pixel-server-prompt"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/06/30",
    "Animated Header",
    type.prototype,
    client.voxel,
    [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.git,
    ],
    new Preview("voxel.jpg"),
    [
      new LinkWeb("voxel-animation", "Animated Header"),
      new LinkGithub("voxel-animation"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/27",
    "Orange Reel",
    type.motionGraphics,
    client.orange,
    [
      toolEnum.premiere,
    ],
    new Preview("orange.jpg"),
    [
      new LinkVimeo("212177083", "Video"),
    ],
    [
      new Children(client.orange, "2015/03/22"),
      new Children(client.orange, "2015/03/24"),
      new Children(client.orange, "2015/03/31"),
      new Children(client.orange, "2015/04/24"),
      new Children(client.orange, "2015/05/22"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2015/03/22",
    "Essentials",
    type.motionGraphics,
    client.orange,
    [
      toolEnum.flash,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/03/24",
    "Selfie",
    type.motionGraphics,
    client.orange,
    [
      toolEnum.flash,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/04/24",
    "Café",
    type.motionGraphics,
    client.orange,
    [
      toolEnum.flash,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/05/22",
    "Día de las Madres",
    type.motionGraphics,
    client.orange,
    [
      toolEnum.flash,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/03/31",
    "Snorkeling",
    type.motionGraphics,
    client.orange,
    [
      toolEnum.flash,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2014/01/14",
    "Descubria Website",
    type.app,
    client.descubria,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkWeb("descubria", "Home"),
      new LinkGithub("descubria"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2014/08/06",
    "Server Prompt",
    type.prototype,
    client.capitalDBG,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkWeb("capital-dbg-server-prompt", "Prototype"),
      new LinkGithub("capital-dbg-server-prompt"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/10/28",
    "Test",
    type.landingPage,
    client.pixelPerfectTree,
    [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    undefined,
    [
      new LinkWeb("test-pixel-perfect-tree", "Test"),
      new LinkGithub("test-pixel-perfect-tree"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2014/06/02",
    "Destapa el Coro: User Flow",
    type.userFlow,
    client.presidente,
    [
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2020/05/05",
    "Popkern",
    type.module,
    client.enovational,
    [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.rails,
      toolEnum.slim,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    new Preview("popkern.jpg"),
    undefined,
    [
      new Children(client.miguelRivas, "2020/03/23"),
      new Children(client.miguelRivas, "2020/05/09"),
      new Children(client.miguelRivas, "2020/06/17"),
      new Children(client.miguelRivas, "2020/08/18"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2017/09/20",
    "Lemon Deal",
    type.landingPage,
    client.plantTherapy,
    [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2017/12/01",
    "25 Days of Christmas",
    type.landingPage,
    client.plantTherapy,
    [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2015/08/03",
    "SIP",
    type.app,
    client.capitalDBG,
    [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2014/10/18",
    "Presidente Photo Assignmet",
    type.app,
    client.presidente,
    [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.php,
      toolEnum.scss,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2014/11/05",
    "Pronosticos: Wireframe",
    type.wireFrame,
    client.presidente,
    [
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/01/29",
    "Shop.pr",
    type.document,
    client.pixelPerfectTree,
    [
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2017/08/04",
    "Chakras",
    type.wireFrame,
    client.plantTherapy,
    [
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/02/18",
    "BPR Bank",
    type.app,
    client.bprBank,
    [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2016/06/24",
    "Social Media Posts",
    type.socialMedia,
    client.voxel,
    [
      toolEnum.photoshop,
      toolEnum.illustrator,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2019/01/01",
    "MSEC Financial Disclosures Portal",
    type.app,
    client.enovational,
    [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    undefined,
    [
      new Link("https://efds.ethics.maryland.gov/", "Website"),
    ],
    [
      new Children(client.miguelRivas, "2018/05/31"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2018/05/01",
    "MDA Vetboard Portal",
    type.app,
    client.enovational,
    [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    undefined,
    [
      new Link("https://portal.mda.maryland.gov/", "Website")
    ],
    [
      new Children(client.miguelRivas, "2018/05/31"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2018/06/25",
    "Maryland Onestop",
    type.app,
    client.enovational,
    [
      toolEnum.vue,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    new Preview("onestop.jpg"),
    undefined,
    [
      new Children(client.enovational, "2020/05/05"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2018/09/04",
    "Formability",
    type.app,
    client.enovational,
    [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    new Preview("formability.jpg"),
    [
      new LinkWeb("formability/demo", "Demo"),
      new LinkWeb("formability/401", "401"),
      new LinkWeb("formability/404", "404"),
      new LinkWeb("formability/500", "500"),
    ],
    [
      new Children(client.miguelRivas, "2018/05/31"),
      new Children(client.miguelRivas, "2018/06/27"),
      new Children(client.miguelRivas, "2018/09/11"),
      new Children(client.enovational, "2020/05/05"),
    ],
    ["no-listing"]
  ),

  new Project(
    "2021/06/21",
    "Connections Academy",
    type.app,
    client.jellyfish,
    [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
    ],
    undefined,
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/11/08",
    "Bitmap Creator",
    type.app,
    client.miguelRivas,
    [
      toolEnum.python,
      toolEnum.tkinter,
    ],
    undefined,
    [
      new LinkGithub("bitmap-creator"),
      new LinkVimeo("643739212", "Video"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/11/14",
    "Spirit 3D",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.blender,
    ],
    undefined,
    [
      new Link("https://sketchfab.com/3d-models/monster-3d-435d64cdb0a042dfba2ae21d7d5a6986", "Spirit"),
      new Link("https://sketchfab.com/3d-models/404-section-4752fcc0d7714e7fbec4747a2fe10ba9", "404 section"),
    ],
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/12/21",
    "Kaspar Island",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.blender,
    ],
    new Preview("kaspar.jpg"),
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/12/30",
    "Iqra Island",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.blender,
    ],
    new Preview("iqra.jpg"),
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2021/12/10",
    "Goose",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.blender,
    ],
    new Preview("goose.jpg"),
    undefined,
    undefined,
    ["no-listing"]
  ),

  new Project(
    "2022/01/05",
    "MR Universe",
    type.animation3D,
    client.miguelRivas,
    [
      toolEnum.unity,
    ],
    new Preview("mr-universe.jpg"),
    [
      new Link("https://play.google.com/store/apps/details?id=com.miguelrivas.github.io.MRUniverse", "Google Play"),
    ],
    [
      new Children(client.miguelRivas, "2021/11/14"),
      new Children(client.miguelRivas, "2021/12/10"),
      new Children(client.miguelRivas, "2021/12/21"),
      new Children(client.miguelRivas, "2021/12/30"),
    ],
    ["no-listing"]
  ),
];

export { pj as projectsDB };