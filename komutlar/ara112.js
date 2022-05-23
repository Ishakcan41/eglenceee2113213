const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Acil durum aracı geliyor!!!!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media1.giphy.com/media/3orieMQS2105J5Sn5K/giphy.gif?cid=ecf05e47nb8xramh6bcbdw06fbp7jlmlzinwp1xbcpxrqdrk&rid=giphy.gif&ct=g`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
 name: 'ara112',
  description: 'Acil durum ekiplerini arar.',
  usage: 'ara112'
};