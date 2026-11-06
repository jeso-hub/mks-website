const { chromium } = require('playwright');
(async () => {
  const [,, src, pdf, pngdir] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + src, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: pdf, width: '297mm', height: '210mm', printBackground: true, preferCSSPageSize: true, margin: {top:0,right:0,bottom:0,left:0} });
  await b.close();
})();
