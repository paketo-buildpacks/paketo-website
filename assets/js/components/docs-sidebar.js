export default class DocsSidebarExpander {
    constructor({ element }) {
        this.submenu = element;
        this.expander = element.querySelector('.docs-menu__section-header')
        this.children = element.querySelector('.docs-menu__children-list');

        element.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        console.log("Expander clicked!")
        if (this.submenu.querySelectorAll('.docs-menu__link--active').length == 0) {
            this.expander.classList.toggle('docs-menu__section-header--opened')
            this.children.classList.toggle('docs-menu__children-list--opened')
        }
    }
  }
