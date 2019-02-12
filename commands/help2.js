
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let L = new Discord.RichEmbed()
    .setDescription("Command List")
    .setColor("RANDOM")
    .addField("Normal Command List <not cmd>", "Normal Command like help", true)
    .addField("game", "a mario game", true)
    .addField("mcquiz", "for mc pro and tryharder", true)
    .addField("math <ur quick maths>", "Get da answer from da command.", true)
    .addField("finduser <text>", "Find the user with random text", true)
    .addField("welmsgsetup", "Set up the Welcome Channel", true)
    .addField("botnews", "The Bot News!", true)
    .addField("invite", "Invite the bot if you like it!", true)
    .addField("botsite/vote/introvid", "take you to discordbot.org then go to the bot website/ vote for the bot / introduction video", true)
    .addField("battle <mention>", "Battle to the death", true)
    .addField("totalwin (beta)", "Battle stuff", true)
    .addField("play <link> (press space 2 time then link)/stop/skip","**NEW!** Music Command", true)
    .addField("data", "Data Sponsered By Justin", true)
    .addField("mcachievement", "for mc tryharder", true)
    .addField("write/get", "write the message when u use the command/get the message when you use the command.", true)
    .addField("about", "The bot info!", true)
    .addField("pokemon", "A Mystery Command ? ? ?", true)
    .addField("slots", "what is ur luck?", true)
    .addField("rps <r/p/s>", "game", true)
    .addField("botsuggest <suggest>", "give us some idea <3", true)
    .addField("Staff Command List <not cmd>", "Staff Command Like ban, kick")
    .addField("roleinfo (you can add <role> or just nothing.)", "Role info, boo");

    message.channel.send(L)
}

module.exports.help = {
    name: "help2"
}
