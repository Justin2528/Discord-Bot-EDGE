const Discord = require('discord.js');
const quiz = [
  { q: "What is the minimum number of obsidian blocks needed to create a portal?", a: ["10", "ten"] },
  { q: "Who made minecraft?", a: ["Notch"] },
  { q: "What item can you use to set your spawnpoint?", a: ["Bed"] },
  { q: "What mob only appears once in the entire game?", a: ["ender dragon"] },
  { q: "What enemy below was released with the adventure update? \n Parrot, Blaze, Enderman, Magma Cube", a: ["Enderman"] },
  { q: "What is steve's shirt color?", a: ["Blue"] },
  { q: "How many hunger bars do you need to not be able to sprint?", a: ["4", "four"] },
  { q: "You now have 3 diamonds, 16 wood planks and 5 stick and front of you have some diamond ores. What will you craft?", a: ["Diamond Pickake", "diamond pickaxe"] },
  { q: "You got a apple with 43 gold, what apple will you make?", a: ["Golden Apple", "Normal Golden Apple"] }
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('No one got the answer in time!')
                                 .setDescription(`Question: ${item.q}`)
                                })
  }
}
module.exports.help = {
    name: "mcquiz"
}