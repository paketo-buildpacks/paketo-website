import docsearch from '@docsearch/js';

export default function Search({ element }) {
  docsearch({
    container: element,
    appId: element.dataset.appId,
    apiKey: element.dataset.apiKey,
    indexName: element.dataset.index,
    placeholder: 'Search docs...',
  });
}

