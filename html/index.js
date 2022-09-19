const Provider = require('./providers')
module.exports = class HTML {
    constructor(strategyStore) {
        this.provider = new Provider[strategyStore]
    }
    get(path) {
       return this.provider.get(path)
    }
}