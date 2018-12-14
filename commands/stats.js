exports.run = (client, message, args, level) => { 

  const Discord = require("discord.js")
  const { version } = require("discord.js");
  const moment = require("moment");
  const duration = moment.duration(client.uptime).format(" D [dni], H [godzin], m [minut], s [sekund]");
  require("moment-duration-format");
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  let serverembed = new Discord.RichEmbed()
   .setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`, true)
   .setColor("54ff00")
   .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`, true)
   .addField(`**Wersja node**`, process.version)
   

   message.channel.send(serverembed);
   message.react(poprawnosc)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "stats",
  category: "System",
  description: "-",
  usage: "stats",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};
