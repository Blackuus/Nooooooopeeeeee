module.exports.run = async (client, message, args) => {
  
  const Discord = require("discord.js");
  let tag = message.mentions.users.first() || message.author; 
  let emoji = client.emojis.find('name', 'greentick');
  
  const avatar = new Discord.RichEmbed()
      .setColor("#e8ff56")
      .setAuthor(`Avatar użytkownika ${tag.tag}`, `${tag.avatarURL}`)
      .setImage(tag.displayAvatarURL)
      .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
  
  message.channel.send(avatar);
  message.react(emoji)
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "avatar",
  category: "System",
  description: "-",
  usage: "serverinfo",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};