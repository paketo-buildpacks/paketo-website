export default function OpenExternalLinksInNewTab({ links, hostname }) {
  for (const link of links) {
    if (link.hostname != hostname) {
      link.target = '_blank';
    }
  }
}
