'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector
  this.height = height
  this.with = width
  this.bg = bg
  this.fontSize = fontSize
}

DomElement.prototype.createEl = function () {
  if (this.selector[0] === '.') {
    const el = document.createElement('div');
    el.classList.add(`${this.selector.slice(1)}`);

    el.style.cssText = `height: ${this.height}px; width: ${this.with}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;

    el.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    document.body.append(el);

  } else if (this.selector[0] === '#') {
    const el = document.createElement('p');
    el.id = `${this.selector.slice(1)}`;

    el.style.cssText = `height: ${this.height}px; width: ${this.with}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;

    el.innerText = 'Lorem ipsum dolor';

    document.body.append(el);
  }
}

const div = new DomElement('.selector', '100', '100', 'teal', '16');
const paragraph = new DomElement('#id', '50', '50', 'olive', '14');

div.createEl();
paragraph.createEl();
