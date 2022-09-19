const Provider = require('./providers')
module.exports = class DAL {
    constructor(strategyStore) {
        this.store = new Provider[strategyStore]
    }
    getDomains() {
       return this.store.getDomains()
    }
    getUrlsByDomain(domain) {
        return this.store.getUrlsByDomain(domain)
    }
    setUrlsByDomain(domain, urls) {
        this.store.setUrlsByDomain(domain, urls)
    }
    deleteOldUrl(urls) {
        this.store.deleteOldUrl(urls)
    }
}