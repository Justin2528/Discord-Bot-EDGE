const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    bot.msgs = require("../msgs.json");
    let _message = bot.msgs[message.author.username].message;
    message.channel.send("The message is:" + _message)

}
module.exports.help = {
    name: "get"
}