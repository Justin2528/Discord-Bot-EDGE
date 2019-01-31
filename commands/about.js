const Discord = require('discord.js');



const moment = require("moment");
require("moment-duration-format");

const { version } = require('discord.js');

exports.run = async (bot, message, args) => {


    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const lol = new Discord.RichEmbed()
    .setDescription(`Hey ${message.author}! I'm EDGE .\n\n [**Donate! <3**](https://www.paypal.me/Justin2528Pro)`)
    .setColor("GREEN")
    .addField("• Help Command", "e!help :eyes:", true)
    .addField(`• Bot version`, `v2.9.3 (pre-release)`, true)
    .addField("• Bot Owner", `<@389428200565899264> JuStIn2528#2211`, true)
    .addField("• Discord.js", `v${version}`, true)
    .addField("• Uptime ", `${duration}`, true)
    .addField("• Node", `${process.version}`, true)
    .addField("• This Server", `${message.guild}`, true)
    .setFooter("Thank You for choosing me <3");
    message.channel.send(lol);

}
module.exports.help = {
    name: "about"
}