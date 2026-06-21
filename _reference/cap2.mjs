import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--disable-gpu','--hide-scrollbars'], defaultViewport: { width: 1440, height: 900 } })
const p = await b.newPage()
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2600)
await p.screenshot({ path: 'D:\\photography\\_reference\\hero-top.png' })
await p.evaluate(() => window.scrollTo(0, 360)); await sleep(1200)
await p.screenshot({ path: 'D:\\photography\\_reference\\hero-scrolled.png' })
await b.close(); console.log('DONE')
