const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let omg = Math.floor(Math.random() * 6784951559315) +10000000000;

    message.channel.send(`You Mined ${omg} Stone.`)

}

module.exports.help = {
    name: "m"
}