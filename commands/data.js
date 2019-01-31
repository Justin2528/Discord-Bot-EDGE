const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const filter = m => m.author.id === message.author.id;
    message.reply("Please choose data (cosmin, justin, )... Will expire in 10 seconds...").then(r => r.delete(10000));
    message.channel.awaitMessages(filter, {max: 1, time: 10000}).then(collected => {

        if(collected.first().content === "cancel"){
            return message.reply("Canceled!")
        }

        if(collected.first().content === "cosmin"){
            return message.channel.send("Data from Justin | Cosmin: A good guy, he is kinda funny. ya ik he is.")
        };

        if(collected.first().content === "justin"){
            return message.channel.send(`Data from Justin | Justin: "Yep, that's me. The bot creator." He like do some boring stuff in mc. Cosmin is his best friend. Also endstone (old) but he left discord D: . the new Endstone (fake) is stupid so ya don't get close to him or u will get cancer.`)
        }

    }).catch(err => {
        message.reply("Time has expired!").then(r => r.delete(5000));
    })

}

module.exports.help = {
    name: "data"
}