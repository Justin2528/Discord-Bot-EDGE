const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
const antispam = require("discord-anti-spam");



var servers = {};



function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });

}







fs.readdir("./commands/", (err, files) => {
    
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props)
    
    });

});

bot.on("roleCreate", async role => {
    let L = role.guild.channels.find("name", "mod-logs")
    L.send(`${role} is now alive! Woohoo! Well i like that name but idk just a role.`)
});

bot.on("roleDelete", async role => {
    let L = role.guild.channels.find("name", "mod-logs")
    L.send(`${role.name} was alive but someone killed ${role.name} D: cri`)
})


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("e!help - EDGE");

});

bot.on("messageDelete", async message => {
    if(message.author.bot) return;
    let sChannel = message.guild.channels.find(`name`, "mod-logs");
    sChannel.send(` ${message.content} by \`${message.author.username}\` is dead in ${message.channel}.`);
});



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("Commands don't work in dm channel!");

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }



    let coinAmt = Math.floor(Math.random() * 15) + 1;
    let baseAmt = Math.floor(Math.random() * 15) + 1;

    if(coinAmt === baseAmt){
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if (err) console.log(err)
        });

        

    }


    let xpAdd = Math.floor(Math.random() * 7) + 8;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }



    let nxtLvl = xp[message.author.id].level * 500;
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    xp[message.author.id].xp = curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setThumbnail(message.author.displayAvatarURL)
        .setTitle("Level Up!🆙")
        .setColor("RANDOM")
        .addField("New Level!", curlvl + 1);
        

        message.channel.send(lvlup).then(msg => {msg.delete(5000)});

    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
    });

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return;
    

   // if(!message.member.hasPermission("ADMINISTRATOR")){


    
 



    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}play`){
        message.delete()
        if (!args[1]) {
            message.channel.send("Please provode a link.");
            return;
        }
        if(!message.member.voiceChannel) {
            message.channel.send("You must be in a voice channel!");
            return;
        
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        var server = servers[message.guild.id];

        server.queue.push(args[1]);

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
        });
    };
    if(cmd === `${prefix}skip`){
        var server = servers[message.guild.id];

        if(server.dispatcher) server.dispatcher.end();
        message.channel.send("**Successfully Skipped the Music**")
    };
    if(cmd === `${prefix}stop`){
        var server = servers[message.guild.id];

        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        message.channel.send("**Successfully Stopped the Music**")
    };


      
     if(message.content.startsWith("ez")) {
        return message.channel.send("ILY<3"); 
      }

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args)






});

bot.on("guildMemberAdd", async member => {

    console.log(`${member.id} joined the server.`);
    let welcomechannel = member.guild.channels.find(`name`, "🌕welcome-goodbye🌑");
    welcomechannel.send(`Welcome, ${member} to the Hypixel Zoo! Wait, this isn't the Zoo, it's **${member.guild}**`);

});

bot.on("guildMemberRemove", async member => {
    console.log(`${member.id} has leave the server`);
    let welcomechannel = member.guild.channels.find(`name`, "🌕welcome-goodbye🌑");
    welcomechannel.send(`${member} left the Hypixel Zoo. I mean **${member.guild}**`);

});
bot.on("guildBanAdd", async user => {

    let sChannel = user.guild.channels.find(`name`, "mod-logs");
    sChannel.send(`Oh Look, there is a guy got bannned banned. AND THIS GUY'S NAME IS ${user}`);
});


bot.on("channelCreate", async channel => {

    console.log(`${channel.name} is alive`)

    let sChannel = channel.guild.channels.find(`name`, "mod-logs");

    if(!sChannel) return;
    sChannel.send(`${channel} is alive! woohoo!`);

});

bot.on("channelDelete", async channel => {
    let sChannel = channel.guild.channels.find(`name`, "mod-logs");
    console.log(`${channel.name} has been dead`)
    if(!sChannel) return;
    sChannel.send(`${channel.name} is dead! OH NO IT'S DEAD!`);

});



bot.login(process.env.BOT_TOKEN);


