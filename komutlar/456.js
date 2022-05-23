const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Lee Jung Jae <3')
    .setColor(3447003)
        .setImage(`https://media3.giphy.com/media/PQ0VI3S5vqL5pwQQJX/giphy.gif?cid=ecf05e47p4m659igpg38t54kww1axmrl0rm9qylt52kc9x0d&rid=giphy.gif&ct=g`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//KobsCode
exports.help = {
  name: '456',
  description: '',
  usage: ''
};