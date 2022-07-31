import { createNode, prepairClasses, nano } from "@/modules/helpers";

export default class Btn extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const color = this.hasAttribute('color') ? nano + this.getAttribute('color') : '';
    const glyph = this.hasAttribute('glyph') ? nano + this.getAttribute('glyph') : undefined;
    const direction = this.hasAttribute('direction') ? nano + this.getAttribute('direction') : nano + 'down';
    const active = this.hasAttribute('active') && this.getAttribute('active') !== 'false' ? nano + 'active' : '';
    const mode = this.hasAttribute('mode') ? nano + this.getAttribute('mode') : nano + 'flat';
    const size = this.hasAttribute('size') ? nano + this.getAttribute('size') : '';
    const text = this.getAttribute('text');

    let btnAttr = [
      {
        name: 'class',
        value: prepairClasses([
          nano + 'btn',
          color,
          active,
          mode,
          size,
        ])
      }
    ];

    let tag = 'button';
    if (this.hasAttribute('href')) {
      tag = 'a';
      btnAttr.push(
        {
          name: 'href',
          value: this.getAttribute('href')
        }
      );
    } else if (this.hasAttribute('to')) {
      tag = 'a';
      btnAttr.push(
        {
          name: 'routerLink',
          value: this.getAttribute('to')
        }
      );
    }

    const btn = createNode({
      type: tag,
      parent: this,
      attributes: btnAttr,
    });

    if (glyph) {
      createNode({
        type: 'nn-icon',
        parent: btn,
        attributes: [{
          name: 'class',
          value: prepairClasses([
            glyph,
            direction,
          ])
        }],
      });
    }

    if (text) {
      createNode({
        type: 'span',
        parent: btn,
        text: text,
        attributes: [{
          name: 'class',
          value: 'caption'
        }],
      });
    }

  }
}