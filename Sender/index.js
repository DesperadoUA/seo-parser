const Provider = require('./providers')
module.exports = class Sender {
    transport = []
    typeMsg = ''
    data = {}
    setTransport(transports) {
        this.transport = transports
        return this
    }
    setTypeMsg(typeMsg) {
        ['error', 'info', 'warning'].includes(typeMsg) 
            ? this.typeMsg = typeMsg
            : this.typeMsg = 'info'
        return this
    }
    setData(data){
        this.data = data
        return this
    }
    send() {
        this.transport.forEach(item => {
            const transport = new Provider[item]
            transport.send({
                typeMsg: this.typeMsg,
                body: this.data
            })
        })
    }
}