require('./config')
require('./db')
const axios = require('axios')
const ParsString = require('./helpers/ParsStirng')
const DAL = require('./DAL')
const dal = new DAL(STORE_STRATEGY)
const store = {}
const initialApp = async() => {
    const arrDomains = await dal.getDomains()
    arrDomains.forEach(element => store[element] = '')
}
initialApp()

const parse = async () => {
    const getHTML = async (url) => {
        const {data} = await axios.get(url)
        return data
    }
    const urls = Object.keys(store)
    for (let url of urls) {
        const pageHTML = await getHTML(url)
    }
    const data = new Date().toString('dd.MM.yyyy')
                           .substring(4, 24)
    console.log('parse in:', data)
}
setInterval(parse, TIME_PARSE)