const knex = require('../../db')
module.exports = class DB {
    async getDomains() {
        return await knex('domains')
                     .select()
                     .where({
                        'status': 'public'
                     })
                     .then((data) => data.map(item => item.url))
                     .catch((err) => {
                        console.error(err)
                        return []
                     })
    }
    async getUrlsByDomain(domain) {
        return await knex('domains')
                     .select()
                     .where({
                        'domains.url': domain,
                        'status': 'public'
                    })
                    .join('urls', 'urls.domain_id', '=', 'domains.id')
                    .then((data) => data)
                    .catch((err) => { 
                            console.error(err) 
                            return []
                    })
    }
    async setUrlsByDomain(domain, urls) {
        const domainId = await knex('domains')
                               .select('id')
                               .where({ 'url': domain })
                               .first()
                               .then((data) => data)
                               .catch((err) => { 
                                        console.error(err) 
                                        return []
                                })
        if(domainId) {
            const arr = urls.map(item => {
                return {
                    url: item,
                    domain_id: domainId.id
                }
            })
            await knex('urls').insert(arr)
        }                
    }
    async deleteOldUrl(urls) {
        for(let url of urls) {
            await knex('urls')
                  .del()
                  .where({url: url})
        }
    }
}