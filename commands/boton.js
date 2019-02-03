const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let string = '';

    bot.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })
    message.channel.send("Bot is on,")
    message.channel.send(string)
}
exports.help = {
    name: "boton"
}
