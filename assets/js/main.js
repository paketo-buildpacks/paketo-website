import Navigation from './components/navigation.js';
import OpenExternalLinksInNewTab from './components/links.js';
import CodeSnippet from './components/code_snippet.js';
import DocsSidebarExpander from './components/docs-sidebar.js'
import Search from './components/search.js';
import DocsNav from './components/docs_nav.js';

window.addEventListener('load', (event) => {
  new Navigation({
    element: document.querySelector('#navigation'),
  });

  Search({
    element: document.querySelector('#docs-search'),
  })

  new DocsNav({
    element: document.querySelector('.docs'),
  });

  OpenExternalLinksInNewTab({
    links: document.getElementsByTagName('a'),
    hostname: window.location.hostname,
  });

  for (const element of document.querySelectorAll('.docs pre')) {
    new CodeSnippet({ element: element });
  }

  for (const element of document.querySelectorAll('.docs-menu__parent')) {
    new DocsSidebarExpander({ element: element })
  }
});
