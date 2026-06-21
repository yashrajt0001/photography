import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const R = 'D:\\photography\\_reference\\'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--disable-gpu','--hide-scrollbars'] })

// desktop
const p = await b.newPage()
await p.setViewport({ width: 1440, height: 900 })
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2600)
await p.screenshot({ path: R + 'nav-desktop-top.png' })
await p.evaluate(() => window.scrollTo(0, 1100)); await sleep(1500)
await p.screenshot({ path: R + 'nav-desktop-solid.png' })
await p.close()

// mobile
const m = await b.newPage()
await m.setViewport({ width: 600, height: 880, isMobile: true })
await m.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2400)
await m.screenshot({ path: R + 'nav-mobile-top.png' })
await m.evaluate(() => window.scrollTo(0, 900)); await sleep(1200)
await m.screenshot({ path: R + 'nav-mobile-solid.png' })
await m.close()

await b.close(); console.log('DONE')
