const axios = require('axios')
module.exports = class HtmlRequest {
    async get(path) {
        const {data} = await axios.get(path)
        return data
    }
}