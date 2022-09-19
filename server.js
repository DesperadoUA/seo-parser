const axios = require('axios')
require('./config')
const ParsString = require('./helpers/ParsStirng')

const parse = async () => {
    const getHTML = async (url) => {
        const {data} = await axios.get(url)
        return data
    }
    const urls = [
        'https://sloto.top/sitemap.xml',
        'https://onlinecasino.kyiv.ua/sitemap.xml',
        'https://onlinecasino.ua/sitemap.xml'
    ]
    for (let url of urls) {
        const pageHTML = await getHTML(url)
    }
    const data = new Date().toString('dd.MM.yyyy')
                           .substring(4, 24)
    console.log('parse in:', data)
}
setInterval(parse, TIME_PARSE)