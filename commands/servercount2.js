const Discord = require("discord.js");
const DBL = require("dblapi.js");
const bot = new Discord.Client();
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUxMDEyMjMzNDc5NTk4OTAwMyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTUwNDE3NzMwfQ.WSNmkbFu0fn_Bi6ocSW8oThNtCPVL3_M6UaPL8E3X4c', bot);

exports.run = async(bot, message, args) => {

// Optional events
dbl.on('posted', message => {
  console.log('Server count posted!');
  message.channel.send("ok")
  
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
  
})

}
    
exports.help = {
    name: "servercount2"
}
