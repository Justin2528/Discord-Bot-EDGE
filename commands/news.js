const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Idk = new Discord.RichEmbed()

    .setTitle("Bot News")
    .setColor("RANDOM")
    .setDescription("This is the Bot News!")
    .addField("Bot Version Updated to:", "2.32v", true)
    .addField("New Command:", "e!finduser <some text>|*NEW!*e!math <math>|e!welmsgsetup|e!botnews|e!pokemon|(NEW!)e!play (link)<you need press space 2 time then link>/stop/skip", true)
    .addField("Planned to make:", "PUBG,Roblox and more Lifetime Tracker Command!",true)
    .addField("Other Feature:", "Anti-Spam!", true)
    .addField("Bugs Fixed:", "Fortnite Command Bug fixed!", true)
    .addField("Other:", "|Nothing|", true)
    .setFooter("Stay tuned!", message.author.avatarURL);

    message.channel.send(Idk)



}

module.exports.help = {
    name: "botnews"
}