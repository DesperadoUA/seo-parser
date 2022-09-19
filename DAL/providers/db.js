const knex = require('../../db')
module.exports = class DB {
    async getDomains() {
        return await knex('domains')
                     .select()
                     .then((data) => data.map(item => item.url))
                     .catch((err) => {
                        console.error(err)
                        return []
                     })
    }
}