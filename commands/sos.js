const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No no no.");
    message.channel.send("DO e!prefix <prefix to change> FOR NO BOT RAID!")

}

module.exports.help = {
    name: "sos"
}