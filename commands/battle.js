const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()



let target = message.mentions.members.first();
if (!target) return message.reply("Please mention a member to battle!").then(r => r.delete(10000));

const filter = m => m.author.id === target.id;

let embed = new Discord.RichEmbed()
.setTitle("Battle!")
.setDescription(`${target} vs ${message.author}`)
.setColor("GREEN")

message.channel.send(`${target}  please type    accept | cancel... Will cancel after 20 seconds`).then(r => r.delete(20000))

message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
    if (collected.first().content === 'cancel') return message.reply("Canceled...").then(r => r.delete(10000));
    if (collected.first().content === 'accept') {

        let chance = Math.floor(Math.random * 1000) + 1;
        if (chance < 500) {
            
            embed.addField("Winner", message.author);
            embed.addField("Loser", target);
            message.channel.send(embed)

        } else {
    
            embed.addField("Winner", target);
            embed.addField("Loser", message.author);
            message.channel.send(embed)
            
        }

    }

});







}





module.exports.help = {
    name: "battle"
}