import { prepairClasses } from "../modules/helpers.js";

export default class Container extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const size = this.hasAttribute('size') ? `sz${this.getAttribute('size')}` : undefined;
    const spacing = this.hasAttribute('spacing') ? `sp${+this.getAttribute('spacing') * 100}` : undefined;

    const classes = prepairClasses([
      size,
      spacing,
      this.className,
    ]);

    this.className = classes;
  }
}