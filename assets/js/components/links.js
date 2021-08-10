export default function OpenExternalLinksInNewTab({ links, hostname }) {
  for (const link of links) {
    if (link.hostname != hostname) {
      var alertElement = document.createElement('span');
      alertElement.appendChild(document.createTextNode("(opens in a new tab)"));
      alertElement.classList.add("screen-reader-link-text");
      link.appendChild(alertElement)

      link.target = '_blank';
    }
  }
}
