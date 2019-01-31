const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {


    
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: e!poll <question>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅");
            msg.react("🤔"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
module.exports.help = {
    name: "poll"
}