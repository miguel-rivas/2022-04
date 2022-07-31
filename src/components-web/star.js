import { createNode } from "@/modules/helpers";
export default class Gear extends HTMLElement {
  constructor() {
    super();
  }

  defineProp(prop, def = "") {
    return this.hasAttribute(prop) ? this.getAttribute(prop) : def;
  }

  connectedCallback() {
    const translation = this.defineProp('translation', "200");
    const sides = +this.defineProp('sides', 5);
    const rotation = +this.defineProp('rotation', 0);
    const starRadius = +this.defineProp('star-radius', 50);
    const innerRadius = +this.defineProp('innerRadius', 25);
    const starColor = this.defineProp('starColor', "#f5e65d");
    const originTranslation = +this.defineProp('origin-translation', 150);

    const computedTranslation = translation.split(",");
    
    const xTranslation = +computedTranslation[0],
      yTranslation = +computedTranslation[1] || +computedTranslation[0];

    const width = +starRadius * 2 + xTranslation;
    const height = +starRadius * 2 + yTranslation;

    const canvasAttr = [
      {
        name: 'width',
        value: width,
      },
      {
        name: 'height',
        value: height,
      },
    ];

    const canvas = createNode({
      type: 'canvas',
      parent: this,
      attributes: canvasAttr,
    });

    const ctx = canvas.getContext("2d");
		const ang = Math.PI / 180;
		let originX = width - starRadius - xTranslation,
			originY = height - starRadius - yTranslation,
			px = [],
			py = [],
			px2 = [],
			py2 = [];

		/* --------------------- defining points --------------------- */
		for (let counter = 0; counter <= sides - 1; counter++) {
			px[counter] =
				Math.cos((rotation + (360 / sides) * counter) * ang) * starRadius;
			py[counter] =
				Math.sin((rotation + (360 / sides) * counter) * -ang) * starRadius;
			/* --------------------- second shape --------------------- */
			px2[counter] =
				Math.cos(
					(rotation + 360 / (sides * 2) + (360 / sides) * counter) * ang
				) * innerRadius;
			py2[counter] =
				Math.sin(
					(rotation + 360 / (sides * 2) + (360 / sides) * counter) * -ang
				) * innerRadius;
		}

		/* --------------------- drawing the tail --------------------- */
		ctx.beginPath();
		ctx.moveTo(originX + px[1], originY + py[1]);
		ctx.lineTo(originX + px2[3], originY + py2[3]);
		ctx.lineTo(width - originTranslation, height - originTranslation);
		ctx.fillStyle = "#d19c4b";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(originX + px[3], originY + py[3]);
		ctx.lineTo(originX + px2[3], originY + py2[3]);
		ctx.lineTo(width - originTranslation, height - originTranslation);
		ctx.fillStyle = "#453415";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(originX + px[1], originY + py[1]);
		ctx.lineTo(originX + px2[4], originY + py2[4]);
		ctx.lineTo(width - originTranslation, height - originTranslation);
		ctx.fillStyle = "#63471b";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(originX + px[4], originY + py[4]);
		ctx.lineTo(originX + px2[4], originY + py2[4]);
		ctx.lineTo(width - originTranslation, height - originTranslation);
		ctx.fillStyle = "#7a5321";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(originX + px[0], originY + py[0]);
		ctx.lineTo(originX + px2[4], originY + py2[4]);
		ctx.lineTo(width - originTranslation, height - originTranslation);
		ctx.fillStyle = "#a5742a";
		ctx.fill();
		ctx.closePath();

		/* --------------------- drawing the star --------------------- */
		ctx.beginPath();
		ctx.moveTo(originX + px[0], originY + py[0]);
		ctx.lineTo(originX + px2[0], originY + py2[0]);

		for (let counter = 1; counter <= sides - 1; counter++) {
			ctx.lineTo(originX + px[counter], originY + py[counter]);
			ctx.lineTo(originX + px2[counter], originY + py2[counter]);
		}

		ctx.fillStyle = starColor;
		ctx.fill();
		ctx.closePath();

  }
}