const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Incorrect Usage: e!mute <user> <(number)s/m/h");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack)
        }

    }

    let mutetime = args[1];
    if(!mutetime) return message.reply("Incorrect Usage: a!mute <user> <(number)s/m/h");

    await(tomute.addRole(muterole.id));

    let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send("Can't find mod logs (mod-logs)");
    kickChannel.send(`<@${tomute.id}> has been muted by <@${message.author.id}> for ${ms(mutetime)}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        kickChannel.send(`<@${tomute.id}> has been unmuted!`)
    }, ms(mutetime))


}

module.exports.help = {
    name: "mute"
}