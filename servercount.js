const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = async (client, message, args, ops) => {
    console.log('updates status');
    snekfetch.post(`https://botsfordiscord.com/api/bot/510122334795989003`)
        .set('Authorization', '3e2ae91a8942bb8e59cb10f582de4342b13ac937b10b7f01843542fee894a0bcc85c95ef16ce718b3834fdcfb3bc35f5fee4b37e555e5c7d2fb7803608b9dc79')
        .send({
            'count': client.guilds.size,
        })
        .then(console.log('Updated DBG Stats'))
        message.channel.send("yes you did it.s")
}
exports.help = {
    name: "servercount"
}
