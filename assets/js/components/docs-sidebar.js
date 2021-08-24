export default class DocsSidebarExpander {
    constructor({ element }) {
        this.submenu = element;
        this.expanderTriangle = element.querySelector('.expander-button__triangle')
        this.children = element.querySelector('.docs-menu__children-list');

        element.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        console.log("Expander clicked!")
        if (this.submenu.querySelectorAll('.docs-menu__link--active').length == 0) {
            this.children.classList.toggle('docs-menu__children-list--opened')
            this.expanderTriangle.classList.toggle('expander-button__triangle--opened')
        }
    }
  }
