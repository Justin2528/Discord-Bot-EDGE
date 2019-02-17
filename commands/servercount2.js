const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async (bot, message, args) => {
    console.log('updates status');
    snekfetch.post(`https://discordbots.com/api/bots/510122334795989003/stats`)
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUxMDEyMjMzNDc5NTk4OTAwMyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTUwNDEwNzM1fQ.Cno0da3O7jvpNmlD05aD1fwBVSEcX7DXi5O4oKJhYKI')
        .send({
            'server_count': bot.guilds.size,
        })
        .then(console.log('Updated DBG Stats'))
        message.channel.send("yes you did it.s")
}
exports.help = {
    name: "servercount2"
}
