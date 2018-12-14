module.exports.run = async (client, message, args) => {

  const Discord = require("discord.js");
  let poprawnosc = client.emojis.find('name', 'poprawnosc');
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let sicon = message.guild.iconURL;


  let serverembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL)
   .setColor("54ff00")
   .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
   .setThumbnail(sicon)
   .addField("**Nazwa serwera**", message.guild.name, true)
   .addField("**ID serwera**", message.guild.id, true)
   .addField("**Właściciel serwera**", message.guild.owner.user.tag, true)
   .addField("**Region serwera**", `${message.guild.region}`)
   .addBlankField()
   .addField("**Kanałów łącznie**", message.guild.channels.size, true)
   .addBlankField()
   .addField("**Użytkowników łącznie**", message.guild.memberCount, true)
   .addField("**Użytkowników**", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addBlankField()
   .addField("**Botów na serwerze**", message.guild.members.filter(m => m.user.bot).size, true)
   .addBlankField()
   .addField("**Obecnie online**", online.size, true)
   .addBlankField()
   .addField("**Roli na serwerze**", message.guild.roles.size, true);

   message.channel.send(serverembed);
   message.react(poprawnosc)

}

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: "Developer"
};

exports.help = {
  name: "serverinfo",
  category: "System",
  description: "-",
  usage: "serverinfo",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};

    