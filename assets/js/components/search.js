import docsearch from 'docsearch.js';

export default function Search({ element }) {
  docsearch({
    inputSelector: `#${element.id}`,
    indexName: element.dataset.index,
    apiKey: element.dataset.apiKey,
  });
}

