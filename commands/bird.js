const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
  .get(`https://birdsare.cool/bird.json`);

  let birdembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Tweet, Tweet!")
  .setImage(body.url);

  message.channel.send(birdembed);
}

module.exports.help = {
  name: "bird"
}
