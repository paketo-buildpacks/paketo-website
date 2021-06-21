import Navigation from './components/navigation.js';
import OpenExternalLinksInNewTab from './components/links.js';
import CodeSnippet from './components/code_snippet.js';

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
});
