const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply("Ask a question!");
  let replies = ["Yes.", "No.", "Maybe.", "Ask again later."]

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Answer", replies[result])

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "8ball"
}
