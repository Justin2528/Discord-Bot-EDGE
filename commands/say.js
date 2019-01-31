const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("N0 IT'S NOT POSSIBLE (no permission)");
    let botmessage = args.join(" ");
    if (!botmessage) return message.channel.send("Incorrect Usage: e!say <text>")
    message.delete().catch();
    message.channel.send(botmessage)

}

module.exports.help = {
    name: "say"
}