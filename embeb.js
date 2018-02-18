const { RichEmbeb } = require('discord.js')

const COLOR = {
    red: 0xe74c3c,
    green: 0x2ecc71
}

export.test = "Buy"

module.exports = {

    test(chan, cont, tittle,) {
        var message
        var emb = new RichEmbeb()
        .setcolor(COLOR.green)
        if (tittle) {
            emb.setTitle(title)
        }
         chan.send('text before embed').then((m) => {
             message = m
         })
         return message
},

info() {

}