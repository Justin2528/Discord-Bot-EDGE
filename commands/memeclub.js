const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let meme1 = message.guild.roles.find("name", "the meme master");
    let meme2 = message.guild.roles.find("name", "the smash meme guy");
    let meme3 = message.guild.roles.find("name", "the meme");
    let chance = Math.floor(Math.random() * 3);
    if(chance == 1){
        message.member.addRole(meme1);
        message.member.removeRole(meme2);
        message.member.removeRole(meme3);
        message.member.send("Now, you're the The Meme Master! You need to do is spread the memes to people");
        message.reply("is newest member of The Meme Master!");
    } else if (chance == 2)
    {
        message.member.removeRole(meme1);
        message.member.addRole(meme2);
        message.member.removeRole(meme3);
        message.member.send("Now, you're the The Smash Meme Guy! You need to do is Smash the memes and give the memes to the meme master!");
        message.reply("is newest member of The Smash Meme Guy!");

    } else if (chance == 3){
        {
            message.member.removeRole(meme1);
            message.member.removeRole(meme2);
            message.member.addRole(meme3);
            message.member.send("Now, you're the The Meme! Uh i think the meme is a rare role");
            message.reply("is newest member of The Meme!")
    }  
    }

}

module.exports.help = {
    name: "memeclub"
}