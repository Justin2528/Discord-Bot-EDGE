const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Incorrect Usage: e!report <user> <reason>");
    let reason = args.join(" ").slice(22);
    if (!reason) return message.channel.send("Incorrect Usage: e!report <user> <reason>");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("RANDOM")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    

    let reportschannel = message.guild.channels.find(`name`, "report-log");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel ('report-log')");
    
    message.delete().catch(O_o=>{});

    reportschannel.send(reportEmbed)

    return message.reply(`(reported <@${rUser.id}> for \`${reason}\`) Thank you for the report, it has been sent to our logs. You will be DM'd the result when staff review it.`);
}


module.exports.help = {
    name: "report"
}