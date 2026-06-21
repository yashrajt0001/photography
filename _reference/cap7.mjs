import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const R = 'D:\\photography\\_reference\\'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--disable-gpu','--hide-scrollbars'] })

// ---- mobile ----
const m = await b.newPage()
await m.setViewport({ width: 600, height: 880, isMobile: true, hasTouch: true })
await m.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2400)
await m.evaluate(() => window.scrollTo(0, 900)); await sleep(1300)
await m.screenshot({ path: R + 'c-fab.png' })            // floating WhatsApp visible

// footer
await m.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await sleep(1400)
await m.screenshot({ path: R + 'c-footer.png' })

// overlay menu
await m.evaluate(() => window.scrollTo(0, 0)); await sleep(600)
await m.click('.burger'); await sleep(1100)
await m.screenshot({ path: R + 'c-overlay.png' })
await m.close()

// ---- desktop: fab must be hidden ----
const p = await b.newPage()
await p.setViewport({ width: 1440, height: 900 })
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(1500)
await p.evaluate(() => window.scrollTo(0, 900)); await sleep(800)
const fabVisible = await p.evaluate(() => {
  const el = document.querySelector('.fab')
  if (!el) return 'no-el'
  return getComputedStyle(el).display
})
console.log('desktop .fab display = ' + fabVisible)
await p.close()

await b.close(); console.log('DONE')
