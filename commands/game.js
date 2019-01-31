const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const filter = m => m.author.id === message.author.id;
    const msg = await message.channel.send("---|Mario|---\n─▄████▄▄░\n▄▀█▀▐└─┐░░\n█▄▐▌▄█▄┘██\n└▄▄▄▄▄┘███\n██▒█▒███▀\n ");
    msg.edit('Oh no! A Goomba is rushing for you! what are you gonna do? [jump]/[sleep]/[pokemon_fight]/[cosmin_stomp]/[catch]/[bully]/[selfie]/[bomb]');



        message.channel.awaitMessages(filter, {max: 1, time: 1000000}).then(collected => {
            
        if(collected.first().content === "jump"){
            msg.edit("Wow! You did it and you run to the exit! You have escaped! you win!")
       };
       if(collected.first().content === "sleep"){
        
        msg.edit("Goomba: LOL. *kill you*. You Lose D:")
       };
       if(collected.first().content === "pokemon_fight"){
        
        msg.edit("Alright pikachu go!\n??? Sent out goomba!\n You used stomp! \n[||||||---]\n not very effective...\n Goomba used Revenge. \n You used a X. Attack! \n Pikachu's Attack rose! \n Goomba used Revenge \n Pikachu used Pika Attack! \n Goomba avoided the attack! \n Goomba used Pika Attack (Because Revenge)\n Pikachu: [||-------] \n It's Super Effective! \n Pikachu used Thunderbolt. \n Goomba: [---------] \n Goomba Fainted. \n You Won!")
       };
       if(collected.first().content === "cosmin_stomp"){
        msg.edit("Cosmin: Here i come. Goomba: OH WAIT WAI- got stomped by Cosmin. You won cus Cosmin helped u.")
       };
       if(collected.first().content === "catch"){
        
        msg.edit("Woah! A Goomba has appeared!\n You threw a pokeball! \n *The Pokeball shake, shake,* BOOM!\n So Close! \n What? Goomba just touched you! \nYou Lose cus If you touch goomba you die.")
       };
       if(collected.first().content === "bully"){
        
        msg.edit("You: Yo Goomba little crap\n I'ma show you how I rap\n Goomba is trash.\n You made people harsh. \n You Face is-\n Goomba: Fook this shet im out. \nYou won. yay")
       };
       if(collected.first().content === "selfie"){
        
    msg.edit("You: OMG GOOMBA YOU'RE FAMOUS! CAN I TAKE A SELFIE WITH YOU? Goomba: Um K. *boom* U: Yay. Goomba: Uh oh, spaghettio i touched u. You lose.")
       };
       if(collected.first().content === "bomb"){
           msg.edit("You: Don't come close to me. \nGoomba: Nobody care :> \nYou: ALRIGHT BOMB GO BLOW UP THE GOOMBA. \nGoomba: WHA- \nYou Won.")
       }
    }).catch(err => {
        msg.edit("You Lose Because the Gooma Already Kills You (Cus you did Nothing)")
    });


}

module.exports.help = {
    name: "game"
}