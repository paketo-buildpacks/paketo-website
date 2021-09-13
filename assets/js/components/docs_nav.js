export default class DocsNav {
	constructor({ element }) {
	  this.toggle = element.querySelector('.docs-mobile-tab');
	  this.sidebar = element.querySelector('.docs-sidebar');
	  this.toggle.addEventListener('click', this.handleClick.bind(this));
	}

	handleClick(event) {
	  this.sidebar.classList.toggle('docs-sidebar--showing');
	}
      }