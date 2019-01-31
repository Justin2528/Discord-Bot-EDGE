const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let e = new Discord.RichEmbed()
    .setDescription("Invite me! [Invite Link](https://discordapp.com/oauth2/authorize?client_id=510122334795989003&scope=bot&permissions=2146958847)")

    message.channel.send(e)
}

module.exports.help = {
    name: "invite"
}