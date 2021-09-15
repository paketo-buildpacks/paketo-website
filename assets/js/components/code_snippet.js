import ClipboardJS from 'clipboard';

export class CodeSnippet {
  constructor({ element }) {
    this.element = element;

    if (element.classList.contains('copyable')) {
      new Clipboard({
        element: this.element,
        button: this.element.querySelector('.copyable__clipboard'),
        code: this.element.querySelector('.copyable__code').innerText,
      });
    }
  }
}

class Clipboard {
  constructor({ element, button, code }) {
    this.element = element;
    this.code = code;

    button.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    ClipboardJS.copy(this.code);
    this.element.classList.add('copyable--clicked');
  }
}

export class Output {
  constructor({ element, button }) {
    this.element = element;
    this.button = element.querySelector('.code-output__btn')

    this.button.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.element.classList.toggle('code-output--opened');
    var button = this.element.querySelector('.code-output__btn')
    if (button.textContent == "View Output") {
      button.textContent = "Hide Output";
    }
    else {
      button.textContent = "View Output";
    }
  }
}
