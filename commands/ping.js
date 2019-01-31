exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send("Pinging");
    msg.edit(':ping_pong:Pong! it Works!` ' + `${msg.createdTimestamp - message.createdTimestamp}` + 'ms`' + ' API Latency `' + `${client.ping}` + 'ms`');
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  module.exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: "ping pong!, as not in Ping Pong game,",
    usage: "ping"
  };