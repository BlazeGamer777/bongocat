const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpmEmbed = new Discord.RichEmbed()
  .setTitle("Mod")
  .setColor("#2ac61b")
  .setDescription(`b!kick - Kick someone.
b!ban - Ban someone.
b!report - Report someone.
b!tempmute - Temporarily mutes someone.`);

  let helpfEmbed = new Discord.RichEmbed()
  .setTitle("Fun")
  .setColor("#f9f613")
  .setDescription(`b!ping - Bong!
b!8ball - Get your answers now!
b!dog - HSSSSSSSSSSSSSSSSSSSSSSSSH (Get a random dog.)
b!cat - A random cat!
b!meme - Get a old meme. Not from reddit. RIP
b!pokemon - Get a sprite of a pokemon!
b!shinypokemon - Get a shiny sprite of a pokemon!
b!bird - Tweet Tweet!`);

  let helpbEmbed = new Discord.RichEmbed()
  .setTitle("Bot")
  .setColor("#0e2fed")
  .setDescription(`b!serverinfo - Information about the server you are in.
b!botinfo - Information about the bot.
b!addrole - Adds a role to someone.
b!removerole - Deletes a role from someone.
b!prefix - Set a custom prefix for the bot.
`);

  let helpsEmbed = new Discord.RichEmbed()
  .setTitle("Misc")
  .setColor("#e50d0d")
  .addField("Join the support server!", `https://discord.gg/RMRU7Y7`)
  .addField("Support and Vote the bot!", `https://discordbots.org/bot/489600241406967810`)
  .addField("Add the bot to your server!", `https://discordapp.com/oauth2/authorize?client_id=489600241406967810&scope=bot`)
  .setFooter(`Made by: Blaze#5023`, `https://cdn.discordapp.com/avatars/470344523093114890/89d9bea893cc653adbb0a58d61c2fb85.png?size=128`);
  
  let helpeEmbed = new Discord.RichEmbed()
  .setTitle("Economy")
  .setColor("#f000ff")
  .setDescription(`b!coins - Check how many coins you have.
b!level - Check what level you are at and tells you how many xp you need to level up.`);

  message.channel.send(helpmEmbed);
  message.channel.send(helpfEmbed);
  message.channel.send(helpeEmbed);
  message.channel.send(helpbEmbed);
  message.channel.send(helpsEmbed);
}

module.exports.help = {
  name: "help"
};
