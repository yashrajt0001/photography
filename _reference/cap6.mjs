import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const R = 'D:\\photography\\_reference\\'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--disable-gpu','--hide-scrollbars'], defaultViewport: { width: 1440, height: 900 } })
const p = await b.newPage()

// 1) direct deep link to a disabled page should redirect to "/"
await p.goto('http://localhost:5173/wedding', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(1500)
const url1 = p.url()
const hasHero = await p.$('.hero') !== null
console.log('deep /wedding -> url=' + url1 + ' heroPresent=' + hasHero)

// 2) nav items count + which are links vs disabled (scrolled, solid header)
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2200)
await p.evaluate(() => window.scrollTo(0, 1100)); await sleep(1200)
const nav = await p.evaluate(() =>
  [...document.querySelectorAll('.header__nav > *')].map((el) => el.tagName + ':' + el.textContent.trim() + (el.classList.contains('is-disabled') ? '(disabled)' : ''))
)
console.log('NAV: ' + JSON.stringify(nav))
await p.screenshot({ path: R + 'review-nav.png' })

await b.close(); console.log('DONE')
