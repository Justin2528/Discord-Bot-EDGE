const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const filter = m => m.author.id === message.author.id;
    message.channel.send("This is Welcome Message Setup. Type cancel to cancel the setup. Type start to start the setup. Time: 10sec")
    message.channel.awaitMessages(filter, {max: 1, time: 10000}).then(collected => {

        if(collected.first().content === "cancel"){
            return message.reply("Canceled!")
        }
        if(collected.first().content === "start"){
            return message.reply("Please create a channel call 🌕welcome-goodbye🌑. After you do it, the setup is done. Please test it.")
        }
  });
}

module.exports.help = {
    name: "welmsgsetup"
}