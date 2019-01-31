const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("n0 it't not POSSIBLE (u don't have permission)");
 if(!args[0]) return message.channel.send("Incorrect Usage: e!purge <number to purge>");
 message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} msgs.`).then(msg => msg.delete(10000))
 })

}

module.exports.help = {
    name: "purge"
}