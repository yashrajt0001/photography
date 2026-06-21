import puppeteer from 'puppeteer-core'

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const URL = process.argv[2] || 'http://localhost:5173/'
const OUT = process.argv[3] || 'D:\\photography\\_reference'
const VW = 1440, VH = 900

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
  defaultViewport: { width: VW, height: VH },
})
const page = await browser.newPage()
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2500) // hero fonts + first paint

const height = await page.evaluate(() => document.body.scrollHeight)
const steps = Math.ceil(height / VH)
console.log('scrollHeight=' + height + ' steps=' + steps)

for (let i = 0; i < steps; i++) {
  const y = i * VH
  await page.evaluate((yy) => window.scrollTo(0, yy), y)
  await sleep(1400) // allow reveal + image load
  const file = `${OUT}\\frame-${String(i).padStart(2, '0')}.png`
  await page.screenshot({ path: file })
  console.log('shot ' + file)
}

await browser.close()
console.log('DONE')
