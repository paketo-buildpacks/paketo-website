export default class Navigation {
  constructor({ element }) {
    this.opener = element.querySelector('.nav-opener');
    this.container = element.querySelector('#nav-container');
    this.tray = element.querySelector('#nav-tray');

    this.opener.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    this.opener.classList.toggle('nav-opener__bar--opened');
    this.tray.classList.toggle('nav--showing');
    this.container.classList.toggle('nav-container--showing');
  }
}
