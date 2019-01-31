const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Incorrect Usage: e!8ball <question>")
    let replies = ["Yes.", "No", "I don't know", "Ask again later", "I have no idea", "You're whale"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice().join(" ");

    let L = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(L)
    

}

module.exports.help = {
    name: "8ball"
}