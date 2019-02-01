const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Incorrect Usage: e!ban <user> <reason>");
    let bReason = args.join(" ").slice(22);
    if (!bReason) return message.channel.send("Incorrect Usage: e!ban <user> <reason>");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("NO can do pal!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("RANDOM")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)

    let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send("Can't find mod logs (mod-logs)");

    message.guild.member(bUser).ban(bReason)

    message.delete().catch(O_o=>{});

    kickChannel.send(banEmbed)

}

module.exports.help = {
    name: "ban"
}
