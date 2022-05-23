const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("")
.setTitle(" ➤ SquidGame Eğlence komutları" )
 .setTimestamp()
.setDescription(" **sg!tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **sg!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **sg!koruma** = Bot SquidGame'deki korumaları atar. \n **sg!token** = Tokenimi Öğrenmek İstemezmisin?  \n  **sg!456** = 456'nın Gif'ni atar. \n **sg!ara112** = Acil durum ekiplerini arar. \n **sg!zar-at** = zar atar \n **sg!yazı-tura** = yazı yada tura atar hangisi tutarsan kazanırsın \n  **sg!mcskin** = ismini yazdığınız skini gösterirm \n **sg!alev** \n **sg!altın** \n **sg!anime** \n **sg!arrow**  \n **sg!banner**  \n **sg!sor** \n**sg!green** \n  **sg!habbo** \n  **sg!neonmavi** \n **sg!üyedurum** \n **sg!sil**\n \n **sg!sil**\n **sg!yavaşmod**")
.setImage("https://i.giphy.com/media/c2W9nPICZahHUyePnH/giphy-downsized-large.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'squidgame',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'sg!squidgame'
}