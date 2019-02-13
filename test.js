const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

test('will be ran', () => {
  expect(1 / 0).toBe(Infinity);
});

test('will be ran 2', () => {
  expect(1 / 0).toBe(Infinity);
});


test('will be ran 3', () => {
  expect(1 / 0).toBe(Infinity);
});


test('will be ran 4', () => {
  expect(1 / 0).toBe(Infinity);
});

