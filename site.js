(function () {
  var pages = [['about.html', 'About'], ['approach.html', 'Approach'], ['security.html', 'Security'], ['contact.html', 'Contact']];
  var cur = location.pathname.split('/').pop() || 'index.html';
  var logo = '<svg viewBox="0 0 24 40" aria-hidden="true"><polygon points="12,0 18,12 6,12" fill="#0d0d0f"/><polygon points="6,13 18,13 17,36 7,36" fill="#0d0d0f"/><path d="M6 12.5h12M2 39h20" stroke="#c99a3b" stroke-width="1.2"/></svg>';
  var nav = pages.map(function (p) {
    return '<a href="' + p[0] + '"' + (cur === p[0] ? ' aria-current="page"' : '') + '>' + p[1] + '</a>';
  }).join('');
  var h = document.getElementById('site-header');
  if (h) h.outerHTML = '<header class="site"><div class="bar"><a class="brand" href="index.html">' + logo + 'BLACKSPYRE</a><nav aria-label="Main">' + nav + '<a class="btn" href="portal.html">Client login</a></nav></div></header>';
  var f = document.getElementById('site-footer');
  if (f) f.outerHTML = '<footer class="site"><div class="wrap"><p>&copy; 2026 BLACKSPYRE INVESTMENTS. All rights reserved.</p><p>[ATTORNEY TO REVIEW AND REPLACE: registration statement.] This website is for general information only. It is not an offer to sell or a solicitation of an offer to buy any security. Investing involves risk, including the loss of principal. Past performance does not guarantee future results.</p><p><a href="disclosures.html">Disclosures</a><a href="contact.html">Contact</a></p></div></footer>';
})();
