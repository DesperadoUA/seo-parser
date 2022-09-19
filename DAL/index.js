const Provider = require('./providers')
module.exports = class DAL {
    constructor(strategyStore) {
        this.store = new Provider[strategyStore]
    }
    getDomains() {
       return this.store.getDomains()
    }
}