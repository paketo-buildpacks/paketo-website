import Navigation from './components/navigation.js';
import OpenExternalLinksInNewTab from './components/links.js';
import { CodeSnippet, Output } from './components/code_snippet.js';
import DocsSidebarExpander from './components/docs-sidebar.js'
import Search from './components/search.js';
import DocsNav from './components/docs_nav.js';
import GettingStarted from './components/docs_getting_started.js';

window.addEventListener('load', (event) => {
  new Navigation({
    element: document.querySelector('#navigation'),
  });

  const searchBox = document.querySelector('#docs-search');
  if (searchBox) {
    Search({ element: searchBox });
  }

  const docsElement = document.querySelector('.docs');
  if (docsElement) {
    new DocsNav({ element: docsElement });
  }

  OpenExternalLinksInNewTab({
    links: document.getElementsByTagName('a'),
    hostname: window.location.hostname,
  });

  for (const element of document.querySelectorAll('.copyable')) {
    new CodeSnippet({ element: element });
  }

  for (const element of document.querySelectorAll('.docs .code-output')) {
    new Output({ element: element });
  }

  for (const element of document.querySelectorAll('.docs-menu__parent')) {
    new DocsSidebarExpander({ element: element })
  }

  for (const element of document.querySelectorAll('.getting-started')) {
    new GettingStarted({ element: element })
  }
});
