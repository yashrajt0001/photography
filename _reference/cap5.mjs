import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const R = 'D:\\photography\\_reference\\'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--disable-gpu','--hide-scrollbars'], defaultViewport: { width: 1440, height: 820 } })
const p = await b.newPage()
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2600)
await p.screenshot({ path: R + 'hero-arrows.png' })
await p.click('.hero__arrow--next'); await sleep(1600)
await p.screenshot({ path: R + 'hero-next.png' })
await b.close(); console.log('DONE')
