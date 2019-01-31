const Discord = require("discord.js");
let cooldown = new Set();
let cdseconds = 1800;

module.exports.run = async (bot, message, args) => {

    if(cooldown.has(message.author.id)){
        message.delete();
       return message.reply("Sorry, you need to wait 1 hour to do it again.").then(msg => {msg.delete(3000)})
    }
   // if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

    let chance = Math.floor(Math.random() * 3);

    if(chance == 1){
        message.channel.send("Congratz, you won something speical from Cosmin")
    } else if (chance == 2)
    {
        message.channel.send("Congratz, you won a speical role.")

    } else if (chance == 3){
        {
            message.channel.send("Congratz, you won nothing.")
    }  
    }

}

module.exports.help = {
    name: "lucky"
}