module.exports = class CreatorMsgTelegram {
   static info(data) {
        const currentTime = new Date().toString('dd.MM.yyyy').substring(4, 24)
        let msg = ''
        for(const key in data) {
            if(data[key].new.length !== 0) {
                msg += `<b>New url: ${key}</b>\n`
                const list = data[key].new.map(item => `${item}\n`).join('')
                msg += list
            }
            if(data[key].del.length !== 0) {
                msg += `<b>Del url: ${key}</b>\n`
                const list = data[key].del.map(item => `${item}\n`).join('')
                msg += list
            }
        }
        return msg !== '' ? `<b>Парсинг: ${currentTime}</b>\n` + msg : ''
   } 
   static warning(data) {
    const msg = `<b>Заявка с сайта</b>\n<b>Отправитель:</b><b style='color:#fc5252;'>text</b> Lazarev\n<b>Email:</b> lazarev-konstant@mail.ru`
   }
   static error(data) {
    const msg = `<b>Заявка с сайта</b>\n<b>Отправитель:</b><b style='color:#fc5252;'>text</b> Lazarev\n<b>Email:</b> lazarev-konstant@mail.ru`
   }
}