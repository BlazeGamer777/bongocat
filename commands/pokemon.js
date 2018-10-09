const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let pokemon = args[0]
  let pEmbed = new Discord.RichEmbed()
  .setTitle("Here is your pokemon!")
  .setColor('RANDOM')
  .addField("Name:", pokemon)
  .setThumbnail(`http://www.poke-verse.com/sprites/xyani/`+ pokemon +`.gif`);

  message.channel.send(pEmbed);
}

module.exports.help = {
  name: "pokemon"
};
