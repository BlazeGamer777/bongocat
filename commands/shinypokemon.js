const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pokemon = args[0]

  message.channel.send(`http://www.pokestadium.com/sprites/xy/shiny/`+ pokemon +`.gif`);
}

module.exports.help = {
  name: "shinypokemon"
};