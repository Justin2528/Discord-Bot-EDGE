const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("(Vote for the bot!)[https://discordbots.org/bot/510122334795989003/vote] / (Bots on Discord)[https://botsfordiscord.com/bot/510122334795989003/vote]")

}

module.exports.help = {
    name: "vote"
}
