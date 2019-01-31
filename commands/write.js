const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {


    bot.msgs = require("../msgs.json");
    let editmessage = message.content.slice(6);

    bot.msgs[message.author.username] = {
        message: editmessage
    }
    fs.writeFile("../msg.json", JSON.stringify(bot.msgs, null, 4), err => {
        if (err) throw err
        message.channel.send("message written");
    });

}
module.exports.help = {
    name: "write"
}