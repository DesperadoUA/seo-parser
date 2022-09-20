const axios = require('axios')
module.exports = class HtmlRequest {
    request = {
        status: 'error',
        body: ''
    }
    async get(path) {
        try {
            const {data, status} = await axios.get(path)
            this.request = {
                status: 'ok',
                body: data
            }
            return this.request
        }
        catch (error) {
            this.request = {
                status: 'error',
                body: ''
            }
            return this.request
        }
    }
}