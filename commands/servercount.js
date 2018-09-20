const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let thedangEmbed = new Discord.RichEmbed()
  .setTitle("Server Count:")
  .setColor("#FF0000")
  .addField("How many servers am I in?", `${bot.guilds.size}`)
  .addField("Want me to join your server?", `https://discordapp.com/oauth2/authorize?client_id=489600241406967810&scope=bot`);

  message.channel.send(thedangEmbed);
}

module.exports.help = {
  name: "servercount"
};
