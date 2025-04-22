const fs = require('fs');
const { firefox } = require('playwright');

(async () => {
  try {
    const browser = await firefox.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://plaka.es', {
      waitUntil: 'networkidle',
      timeout: 60000
    });

    const html = await page.content();
    fs.writeFileSync('index.html', html);
    console.log('✅ Site cloné avec succès dans index.html (via Firefox + Playwright)');

    await browser.close();
  } catch (err) {
    console.error("❌ Erreur Playwright Firefox :", err);
  }
})();