import ClipboardJS from 'clipboard';

export default class CodeSnippet {
  constructor({ element }) {
    this.element = element;

    if (element.classList.contains('copyable')) {
      new Clipboard({
        element: this.element,
        button: this.element.querySelector('.copyable__clipboard'),
        code: this.element.querySelector('.copyable__code').innerText,
      });
    }

    if (element.nextElementSibling && element.nextElementSibling.classList.contains('code-output')) {
      new Output({
        element: element.nextElementSibling,
        button: element.nextElementSibling.querySelector('.code-output__btn'),
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

class Output {
  constructor({ element, button }) {
    this.element = element;

    button.addEventListener('click', this.handleClick.bind(this));
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
