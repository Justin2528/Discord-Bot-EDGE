const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async (bot, message, args) => {
    console.log('updates status');
    snekfetch.post(`https://bots.ondiscord.xyz/bot-api/bots/510122334795989003/guilds`)
        .set('Authorization', '6f6f1dce21db375734e27290d5aa2403')
        .send({
            'guildCount': bot.guilds.size,
        })
        .then(console.log('Updated DBG Stats'))
        message.channel.send("yes you did it.s")
}
exports.help = {
    name: "servercount"
}
