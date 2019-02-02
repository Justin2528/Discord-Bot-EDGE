const Discord = require('discord.js');

exports.run = async(client, message, args, ops) => {
    message.delete()
        // Check if user has the permission to use the command.
    if (!message.member.roles.find("name", "Staff Team")) {
        return message.channel.send('⚠️ **You need the** \*`Staff Team*\` **role to use this command.** ⚠️')
            .then(m => m.delete(5000));
    }
    // Mention the user that you want to verify
    let toverify = message.guild.member(message.mentions.users.first());
    // Find the role 'Verified User'
    let verifyrole = message.guild.roles.find(`name`, "Verified User");
    // Check if a user has been mentioned.
    if (!toverify) return message.reply("You need to mention a user.");
    // Add the role to the user if one is mentioned.
    await (toverify.addRole(verifyrole.id));

    // Find the 'Need - Verification Role' , then remove it.
    let delrole = message.guild.roles.find(`name`, "Need Verification");
    await (toverify.removeRole(delrole.id));

    let vUser = message.guild.member(message.mentions.users.first());
    if (!vUser) return errors.cantfindUser(message.channel);

    let verifembed = new Discord.RichEmbed()
        .setTitle("Verified Users - Logs")
        .setColor('#a5f23a')
        .addField("Verified by", `${message.author.tag}`, true)
        .addField("Channel", message.channel, true)
        .addField("Verified User", `${vUser}`, true)
        .setTimestamp();

    let veriflog = message.guild.channels.find(`name`, "staff-logs");
    if (!veriflog) return message.channel.send("Could not find the `Verification User Log Channel.`");

    veriflog.send(verifembed);
}
