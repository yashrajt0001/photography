import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const R = 'D:\\photography\\_reference\\'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--disable-gpu','--hide-scrollbars'], defaultViewport: { width: 1440, height: 900 } })
const p = await b.newPage()
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 })
await sleep(2600)

await p.screenshot({ path: R + 'hd-top.png' })

// scroll to make header solid
await p.evaluate(() => window.scrollTo(0, 1000)); await sleep(1300)
await p.screenshot({ path: R + 'hd-solid.png' })

// go to gallery
const gy = await p.evaluate(() => document.querySelector('#gallery').getBoundingClientRect().top + window.scrollY)
await p.evaluate((y) => window.scrollTo(0, y - 80), gy); await sleep(1600)
await p.screenshot({ path: R + 'gallery-grid.png' })

// open lightbox on 2nd tile
const items = await p.$$('.gallery__item')
await items[1].click(); await sleep(900)
await p.screenshot({ path: R + 'lightbox-1.png' })

// keyboard navigation
await p.keyboard.press('ArrowRight'); await sleep(800)
await p.screenshot({ path: R + 'lightbox-2.png' })

await b.close(); console.log('DONE')
