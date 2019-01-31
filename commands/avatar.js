
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.author.id !== '386490806716071946' && message.author.id !== '389428200565899264' && message.author.id !== '455971566199767040') return message.reply("Only my owner can use this!!");


    let image = message.attachments.first().url;
    
    
    bot.user.setAvatar(image);
    
    let iEmbed = new Discord.RichEmbed()
        .setAuthor('✅ Photo altered successfully')
        .setColor('#1E90FF')
        .addField("OG link:", "https://cdn.discordapp.com/avatars/510122334795989003/50bfadb34d1f3de72f2b4b6a97884e0c.png?size=256", true)
    message.channel.send(iEmbed)

}

module.exports.help = {
    name: "changeava"
}
