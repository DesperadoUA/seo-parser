require('./config')
const Sender = require('./Sender')
const CreatorMsgTelegram = require('./Sender/CreatorMsg/telega')
/*const sender = new Sender()
sender.setTypeMsg('info')
      .setTrancport(['telega', 'cli'])
      .setData({
        'https://onlinecasino.ua/sitemap.xml': { new: [], del: [] },
        'https://sloto.top/sitemap.xml': { new: [], del: [] },
        'https://slototop.com.ua/sitemap.xml': { new: [], del: [] },
        'http://vo-rocks.lenddev.com.ua/sitemap.xml': { new: [], del: [] },
        'https://ukraine-casino.com.ua/sitemap.xml': { new: [], del: [] }
      })
      .send()
*/
      console.log(CreatorMsgTelegram.info({
        'https://onlinecasino.ua/sitemap.xml': { new: [], del: [] },
        'https://sloto.top/sitemap.xml': { new: [], del: [] },
        'https://slototop.com.ua/sitemap.xml': { new: ['https://slototop.com.ua/about'], del: ['https://slototop.com.ua/contacts'] },
        'http://vo-rocks.lenddev.com.ua/sitemap.xml': { new: [], del: [] },
        'https://ukraine-casino.com.ua/sitemap.xml': { new: ['https://ukraine-casino.com.ua/about', 'https://ukraine-casino.com.ua/contacts'], del: [] }
      }))