const Discord = require("discord.js");
const config = require('../botconfig.json')
const apikey = require("../keys.json");
const Client = require("fortnite");
const fortnite = new Client("aad8842e-f0bb-4970-b371-2f79528c7413");

module.exports.run = async (bot, message, args) => {

    await message.delete();

    let username = args[0];
    let platform = args[2] || 'pc';
    let gamemode = args[1];

    if(gamemode != "solo" && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply("Incorrect Usage! e!fortnite <user> <gamemode(No Caps!)>")

    if(!username) return message.reply("Incorrect Usage! e!fortnite <user> <gamemode (nocaps)> ")

    let data = fortnite.user(username, platform).then(data => {
        console.log(data);
        let stats = data.stats;

        if (gamemode === 'solo'){
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills
            let wins = solostats.wins;
            let top3 = solostats.top_3

            let embed = new Discord.RichEmbed()
            .setTitle("Fortnite Tracker Lifetime Stats")
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Matches Played", matches, true)
            .addField("Top 3s", top3, true)
            .addField("Kill/Death Ratio", kd, true);
            message.channel.send(embed);

            console.log(solostats);
        }else if (gamemode === 'duo'){
            let duostats = stats.duo;
            let score = duostats.score;
            let kd = duostats.kd;
            let matches = duostats.matches;
            let kills = duostats.kills
            let wins = duostats.wins;
            let top3 = duostats.top_3

            let embed = new Discord.RichEmbed()
            .setTitle("Fortnite Tracker Lifetime Stats")
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Matches Played", matches, true)
            .addField("Top 3s", top3, true)
            .addField("Kill/Death Ratio", kd, true);
            message.channel.send(embed);
        }else if (gamemode === 'squad'){
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills
            let wins = squadstats.wins;
            let top3 = squadstats.top_3
            let embed = new Discord.RichEmbed()
            .setTitle("Fortnite Tracker Lifetime Stats")
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Matches Played", matches, true)
            .addField("Top 3s", top3, true)
            .addField("Kill/Death Ratio", kd, true);
            message.channel.send(embed);
        }else{

        let lifetime = stats.lifetime;
        console.log(lifetime);

        let score = lifetime[6] ['Score'];
        let mplayed = lifetime[7] ['Matches Played'];
        let wins = lifetime[8] ['Wins'];
        let winper = lifetime[9] ['Win%'];
        let kills = lifetime[10] ['Kills'];
        let kd = lifetime[11] ['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle("Fortnite Tracker Lifetime Stats")
        .setAuthor(data.username)
        .setColor("#0000FF")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Win Percentage", winper, true)
        .addField("Kill/Death Ratio", kd, true);
        message.channel.send(embed);
        
        }

    });



    
}

module.exports.help = {
    name: "fortnite"
}