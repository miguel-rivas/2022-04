import { prepairClasses } from "../modules/helpers";

export default class Icon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const color = this.hasAttribute('color') ? this.getAttribute('color') : '';
    const glyph = this.hasAttribute('glyph') ? this.getAttribute('glyph') : '';
    const direction = this.hasAttribute('direction') ? this.getAttribute('direction') : 'down';

    const classes = prepairClasses([
      color,
      glyph,
      direction,
      this.className,
    ]);
    this.className = classes;
  }
}