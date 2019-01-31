const superagent = require('superagent');
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const Omg = new Discord.RichEmbed()
    .setTitle(`Thank you!`)
    .setDescription(`**${message.author.username}**#${message.author.discriminator} Thank you for the Suggestion!`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL)
    .setColor("GREEN")
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Suggest for This Bot please. ');
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) Send us Suggestion :\n${bug}\nServer: **${message.guild.name}**\nGuild ID: **${message.guild.id}**`);
    const id = '526565949604757549';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${bot.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your suggestion. Please try again later.');
          } else {
            resolve(res);
            message.channel.send(Omg);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}
module.exports.help = {
    name: "suggest"
}