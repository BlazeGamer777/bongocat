const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pokes = ["charmander", "bulbasaur", "squirtle"];
  let pokeres = Math.floor((Math.random() * pokes.length))
  let pokespawnE = new Discord.RichEmbed()
  .setTitle("A pokemon spawned!")
  .setColor('RANDOM')
  .addField("What to do?", 'Nothing right now.')
  .setThumbnail(`http://www.pokestadium.com/sprites/xy/`+ pokes[pokeres] +`.gif`);
  
  message.channel.send(pokespawnE)
}

module.exports.help = {
  name: "spawn"
};
