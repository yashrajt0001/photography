import puppeteer from "puppeteer-core"
const CHROME="C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
const R="D:\\photography\\_reference\\"
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))
const b=await puppeteer.launch({executablePath:CHROME,headless:"new",args:["--no-sandbox","--disable-gpu","--hide-scrollbars"],defaultViewport:{width:1440,height:900}})
const p=await b.newPage()
await p.goto("http://localhost:5173/",{waitUntil:"networkidle2",timeout:60000})
await sleep(2400)
const gy=await p.evaluate(()=>document.querySelector("#gallery").getBoundingClientRect().top+window.scrollY)
await p.evaluate(y=>window.scrollTo(0,y-90),gy); await sleep(1500)
await p.screenshot({path:R+"order-gallery.png"})
await p.evaluate(y=>window.scrollTo(0,y+1500),gy); await sleep(1500)
await p.screenshot({path:R+"order-quote.png"})
await b.close(); console.log("DONE")
