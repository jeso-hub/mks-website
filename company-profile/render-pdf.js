// Renders company-profile/index.html to an A4 landscape PDF.
// Pages are captured as high-resolution images (about 220 dpi) and assembled into the PDF,
// so photo overlays and gradients look the same in every PDF viewer (some viewers mis-draw
// Chromium's vector transparency, e.g. navy overlays shown pink).
// Usage: node render-pdf.js <index.html> <out.pdf>   (needs Playwright + Python Pillow)
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');
(async () => {
  const [,, src, pdf] = process.argv;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mks-profile-'));
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1123, height: 794 }, deviceScaleFactor: 2.3 });
  await p.emulateMedia({ media: 'print' });
  await p.goto('file://' + path.resolve(src), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  // Whole-pixel page boxes so each capture has no sliver of the neighbouring page.
  await p.addStyleTag({ content: '.page{width:1123px!important;height:794px!important;margin:0!important}' });
  const pages = await p.$$('.page');
  const files = [];
  for (let i = 0; i < pages.length; i++) {
    const f = path.join(tmp, `p${String(i + 1).padStart(2, '0')}.png`);
    await pages[i].screenshot({ path: f });
    files.push(f);
  }
  await b.close();
  execFileSync('python3', ['-c', `
import sys
from PIL import Image
out, files = sys.argv[1], sys.argv[2:]
ims = [Image.open(f).convert('RGB') for f in files]
dpi = ims[0].width / (297 / 25.4)
ims[0].save(out, save_all=True, append_images=ims[1:], resolution=dpi, quality=90, title='Multi Karya Sukses - Company Profile', author='Multi Karya Sukses')
`, pdf, ...files]);
  console.log(`wrote ${pdf} (${files.length} pages)`);
})();
