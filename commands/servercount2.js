const Discord = require("discord.js");
const DBL = require("dblapi.js");
const dbl = new DBL('Your discordbots.org token', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
    
exports.help = {
    name: "servercount2"
}
