const axios = require('axios')
const CreatorMsgTelegram = require('./../CreatorMsg/telega')
module.exports = class Telegram {
    constructor(){
        this.chatId = CHAT_ID,
        this.apiUrl = `https://api.telegram.org/bot${TELEGA_TOKEN}/sendMessage`
    }
   send(data) {
        const msg = CreatorMsgTelegram[data.typeMsg](data.body)
        if(msg) {
            axios.post(this.apiUrl, {
                chat_id: this.chatId,
                parse_mode: 'html',
                text: msg
            })
        }
   } 
}