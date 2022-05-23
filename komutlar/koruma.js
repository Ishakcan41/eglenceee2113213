const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const koruma = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://media.giphy.com/media/KPrtEz4aw6QPZG7Xn7/giphy.gif")
  .setTitle("SquidGame Koruma!")
  message.channel.send(koruma)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['koruma-gif'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "koruma",
  description: "Koruma gif atar",
  usage:"sg!koruma"
}