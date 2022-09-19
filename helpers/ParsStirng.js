module.exports = class ParsString {
    static parseSitemap(strHTML) {
        const arrString = strHTML.split('<loc>')
        arrString.shift()
        const listUrl = arrString.map(str => str.split('</loc>').shift())
        return listUrl
    }
}