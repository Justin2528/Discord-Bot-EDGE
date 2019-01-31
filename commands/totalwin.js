const Discord = require("discord.js");
const point = require("../win.json");

module.exports.run = async (bot, message, args) => {




    let chance = Math.floor(Math.random * 50) + 1;
    return message.channel.send(`I'm sure your win is (UNKNOWN PLEASE DM BOT OWNER) `);

}

module.exports.help = {
    name: "totalwin"
}