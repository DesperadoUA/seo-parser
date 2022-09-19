require('./config')
require('./db')
const ParsString = require('./helpers/ParsStirng')
const DAL = require('./DAL')
const HTML = require('./html')
const dal = new DAL(STORE_STRATEGY)
const html = new HTML(HTML_STRATEGY)
const store = {}

const initialApp = async() => {
    const arrDomains = await dal.getDomains()
    for (let domain of arrDomains) {
        const urls = await dal.getUrlsByDomain(domain)
        if(urls.length) {
            store[domain] = new Set(urls.map(item => item.url))
        } else {
            const urls = ParsString.parseSitemap(await html.get(domain))
            store[domain] = new Set(urls)
            dal.setUrlsByDomain(domain, urls)
        }
    }
}
initialApp()
const parse = async () => {
    const domains = Object.keys(store)
    const diff = {}
    for (let domain of domains) {
        const pageHTML = await html.get(domain)
        const urls = ParsString.parseSitemap(pageHTML)
        diff[domain] = {new: [], del: []}
        urls.forEach(element => {
           if(!store[domain].has(element)) {
              diff[domain].new.push(element)
           }  
        })

        const newSetUrl = new Set(urls)
        for (const value of store[domain]) {
            if(!newSetUrl.has(value)) {
                diff[domain].del.push(value)
            }
        }
    }
    const data = new Date().toString('dd.MM.yyyy')
                           .substring(4, 24)
   console.log('parse in:', data)
   for(diffItem in diff) {
        if(diff[diffItem].new.length !== 0) {
           await dal.setUrlsByDomain(diffItem, diff[diffItem].new)
           diff[diffItem].new.forEach(item => store[diffItem].add(item))
        }
        if(diff[diffItem].del.length !== 0) {
           await dal.deleteOldUrl(diff[diffItem].del)
           diff[diffItem].del.forEach(item => store[diffItem].delete(item))
        }
   }
    console.log(diff)
}
setInterval(parse, TIME_PARSE)