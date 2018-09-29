const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pokemon = args[0]
  let pEmbed = new Discord.RichEmbed()
  .setTitle("Here is your shiny pokemon!")
  .setColor('RANDOM')
  .addField("Name:", pokemon)
  .setThumbnail(`http://www.pokestadium.com/sprites/xy/shiny/`+ pokemon +`.gif`);

  message.channel.send(pEmbed);
}

module.exports.help = {
  name: "shinypokemon"
};
