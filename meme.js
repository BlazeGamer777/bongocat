const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let memeembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Here's a meme 👌")
  .setImage(body.url)
  .setDescription(body.text);

  message.channel.send(memeembed);
}

module.exports.help = {
  name: "meme"
}
