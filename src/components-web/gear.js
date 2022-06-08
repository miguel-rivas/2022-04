import { createNode } from "nano-grid-extended/modules/helpers";
export default class Gear extends HTMLElement {
  constructor() {
    super();
  }

  defineProp(prop, def = "") {
    return this.hasAttribute(prop) ? this.getAttribute(prop) : def;
  }

  connectedCallback() {
    const axisRadius = +this.defineProp('axis-radius', 5);
    const sidePerforationRadius = +this.defineProp('side-perforation-radius', 12);
    const sidePerforationAmount = +this.defineProp('side-perforation-amount', 4);
    const width = this.defineProp('width', 200);
    const teethAmount = +this.defineProp('teeth-amount', 40);
    const pitchRadius = +this.defineProp('pitch-radius', 50);
    const baseCircleRadius = +this.defineProp('base-circle-radius', 45);
    const sidePerforationDistance = +this.defineProp('side-perforation-distance', 25);
    const color = this.defineProp('color', '#999');
    const colorPerforation = this.defineProp('color-perforation', '#444');

    const canvasAttr = [
      {
        name: 'width',
        value: width,
      },
      {
        name: 'height',
        value: width,
      },
    ];

    const canvas = createNode({
      type: 'canvas',
      parent: this,
      attributes: canvasAttr,
    });

    const ctx = canvas.getContext("2d");
    const ang = Math.PI / 180;
    let percent = width / 100;
    let x = width / 2;
    let y = width / 2;
    let gear_color = color;
    let holes_color = colorPerforation;
    /* ----------- Poligon 1 ----------- */
    let px = [];
    let py = [];
    /* ----------- Poligon 2 ----------- */
    let px2 = [];
    let py2 = [];
    /* ----------- Inner Circle ----------- */
    let px3 = [];
    let py3 = [];
    /* ----------- End Vars ----------- */

    ctx.clearRect(0, 0, width, width);
    for (let counter = 0; counter <= teethAmount - 1; counter++) {
      px[counter] =
        Math.cos((360 / teethAmount) * counter * ang) * pitchRadius * percent;
      py[counter] =
        Math.sin((360 / teethAmount) * counter * -ang) * pitchRadius * percent;
    }
    /* --------------------- Second Shape --------------------- */
    for (let counter = 0; counter <= teethAmount - 1; counter++) {
      px2[counter] =
        Math.cos(
          (360 / (teethAmount * 2) + (360 / teethAmount) * counter) * ang
        ) *
        baseCircleRadius *
        percent;
      py2[counter] =
        Math.sin(
          (360 / (teethAmount * 2) + (360 / teethAmount) * counter) * -ang
        ) *
        baseCircleRadius *
        percent;
    }
    /* --------------------- Circles --------------------- */
    for (let counter = 0; counter <= sidePerforationAmount - 1; counter++) {
      px3[counter] =
        Math.cos((360 / sidePerforationAmount) * counter * ang) *
        sidePerforationDistance *
        percent;
      py3[counter] =
        Math.sin((360 / sidePerforationAmount) * counter * -ang) *
        sidePerforationDistance *
        percent;
    }
    ctx.beginPath();
    ctx.moveTo(x + px[0], y + py[0]);
    ctx.lineTo(x + px2[0], y + py2[0]);
    for (let counter = 1; counter <= teethAmount - 1; counter++) {
      ctx.lineTo(x + px[counter], y + py[counter]);
      ctx.lineTo(x + px2[counter], y + py2[counter]);
    }
    ctx.fillStyle = gear_color;
    ctx.fill();
    ctx.strokeStyle = "rgba(100,100,100,1)";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x, y, axisRadius * percent, 0, Math.PI * 2, true);
    ctx.fillStyle = holes_color;
    ctx.fill();
    ctx.closePath();
    for (let counter = 0; counter <= sidePerforationAmount - 1; counter++) {
      ctx.beginPath();
      ctx.arc(
        x + px3[counter],
        y + py3[counter],
        sidePerforationRadius * percent,
        0,
        Math.PI * 2,
        true
      );
      ctx.fillStyle = holes_color;
      ctx.fill();
      ctx.closePath();
    }
  }
}