import Navigation from './components/navigation.js';
import OpenExternalLinksInNewTab from './components/links.js';
import CodeSnippet from './components/code_snippet.js';
import DocsSidebarExpander from './components/docs-sidebar.js'

window.addEventListener('load', (event) => {
  new Navigation({
    element: document.querySelector('#navigation'),
  });

  OpenExternalLinksInNewTab({
    links: document.getElementsByTagName('a'),
    hostname: window.location.hostname,
  });

  for (const element of document.querySelectorAll('.docs pre')) {
    new CodeSnippet({ element: element });
  }

  var elements = document.getElementsByClassName("docs-menu__parent");

  for (var i = 0; i < elements.length; i++) {
    new DocsSidebarExpander({ element: elements[i] })
  }
});
