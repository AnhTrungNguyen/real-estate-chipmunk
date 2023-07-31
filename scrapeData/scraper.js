const scrapeCategory = (browser, url) => new Promise(async(resolve,reject) => {
    try {
        let page = await browser.newPage()
        await page.goto(url)
        await page.waitForSelector('#webpage')

        const dataCategory = await page.$$eval('#navbar-menu > ul > li', els => {
            dataCategory = els.map(el => {
                return{
                    category: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCategory
        })

        await browser.close()
        resolve(dataCategory)
    } catch (error) {
        console.log('Lỗi ở scrape category' + error)
        reject(error)
    }
}) 

const scraper = (browser, url) => new Promise(async(resolve,reject) => {
    try {
        let newPage = await browser.newPage()
        await newPage.goto(url)
        await newPage.waitForSelector('#main')
        const headerData = await page.$eval('header', el => {
                return{
                    title: el.querySelector('h1').innerText,
                    description: el.querySelector('p').innerText
                }
        })
        return headerData
        
        console.log(headerData)
        await browser.close()
        resolve()
    } catch (error) {
        console.log('Lỗi ở scraper' + error)
        reject(error)
    }
}) 

module.exports = {
    scrapeCategory,
    scraper
}