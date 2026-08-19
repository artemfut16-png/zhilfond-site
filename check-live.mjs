import { chromium } from "playwright";
const outDir = process.argv[2];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (err) => errors.push(String(err)));
page.on("response", (res) => { if (res.status() >= 400) errors.push(res.status() + " " + res.url()); });
await page.goto("https://artemfut16-png.github.io/zhilfond-site/", { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/live-home.png` });

await page.goto("https://artemfut16-png.github.io/zhilfond-site/catalog/compact-59/", { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: `${outDir}/live-detail.png` });

console.log("ERRORS:", JSON.stringify(errors));
await browser.close();
