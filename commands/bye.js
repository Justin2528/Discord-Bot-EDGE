const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send(`${message.author} cya!`)

}

module.exports.help = {
    name: "bye"
}