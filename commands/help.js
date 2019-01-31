const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let L = new Discord.RichEmbed()
.setDescription("Command List")
.setColor("RANDOM")
.addField("Normal Command List <not cmd>", "Normal Command like help", true)
.addField("dog", "random dog!", true)
.addField("dmeme/meme", "(dmeme: Bot owner's meme) Free memes i throw the memes to you", true)
.addField("ping", "Not just a fun command!", true)
.addField("coins", "check your coins!", true)
.addField("level", "check your level!", true)
.addField("pay <user> <coins>", "pay ur money D:", true)
.addField("help", "Command List", true)
.addField("help2", "second Command List", true)
.addField("hello", "the bot say hello to you!",true)
.addField("bye", "the bot say bye to you!", true)
.addField("serverinfo", "server information!", true)
.addField("fortnite <user> <gamemode> <platform>", "<NEW!> Easy check your fortnite stats!",true)
.addField("poll <text>", "create a poll", true)
.addField("botinfo", "about the bot!", true)
.addField("Staff Command List <not cmd>", "Staff Command Like ban, kick")
.addField("ban <user> <reason>", "ban a folks!")
.addField("kick <user> <reason>", "kick a folks!")
.addField("mute <user> <(number)s/m/h)", "mute a folks")
.addField("sos", "sos :D")
.addField("addrole/removerole <user> <role>", "Add/Remove role to folks")
.addField("warn <user> <reason>", "warn a folks")
.addField("warnlevel <user>", "check how many warns that user got.")
.addField("say <something>", "say im whale for gift")
.addField("purge <how many>", "purge ur message ik u like purge")

message.channel.send(L);


}

module.exports.help = {
    name: "help"
}