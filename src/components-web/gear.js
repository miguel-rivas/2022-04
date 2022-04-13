export default class Gear extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const color = this.hasAttribute('color') ? this.getAttribute('color') : '';
    const glyph = this.hasAttribute('glyph') ? this.getAttribute('glyph') : undefined;
    const direction = this.hasAttribute('direction') ? this.getAttribute('direction') : 'down';
    const active = this.hasAttribute('active') && this.getAttribute('active') !== 'false' ? 'active' : '';
    const mode = this.hasAttribute('mode') ? this.getAttribute('mode') : 'flat';
    const size = this.hasAttribute('size') ? this.getAttribute('size') : '';
    const text = this.getAttribute('text');
  }
}