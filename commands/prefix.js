const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Can't do that.");
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: b!prefix <desired prefix here>`);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (eer) => {
    if (err) console.log(err)
  });

  message.channel.send(`Changed prefix to ${prefixes.id}`);

}

module.exports.help = {
  name: "prefix"
};
