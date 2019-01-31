const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Incorrect Usage: e!kick <user> <reason>");
    let kReason = args.join(" ").slice(22);
    if (!kReason) return message.channel.send("Incorrect Usage: a!kick <user> <reason>");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("NO can do pal!");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("RANDOM")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason)

    let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send("Can't find mod logs (mod-logs)");

    message.guild.member(kUser).kick(kReason)

    message.delete().catch(O_o=>{});

    kickChannel.send(kickEmbed)


   return; 

}

module.exports.help = {
    name: "kick"
} 


