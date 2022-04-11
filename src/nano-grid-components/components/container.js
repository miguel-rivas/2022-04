import { prepairClasses } from "../modules/helpers.js";

export default class Container extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const computedClasses = this.hasAttribute('size') ? `sz${this.getAttribute('size')}` : undefined;

    const classes = prepairClasses([
      'container',
      computedClasses,
      this.className,
    ]);

    this.className = classes;
  }
}