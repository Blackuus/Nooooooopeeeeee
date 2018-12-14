module.exports.run = async (client, message, args) => {

    const Discord = require("discord.js");
    const Lwy = require('../zasoby/lwy.json');
    let poprawnosc = client.emojis.find('name', 'poprawnosc');

    const lewembed = new Discord.RichEmbed()
    .setColor("#96ffee")
    .setTitle('Lwy to królowie! Daję ci jednego pod opiekę')
    .setDescription('Źródło pliku: strona internetowa')
    .setImage(Lwy[Math.floor(Math.random() * Lwy.length)])
    .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
        message.channel.send(lewembed);
        message.react(poprawnosc)
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "lew",
    category: "Zwierzęta",
    description: "-",
    usage: "papuga",
    wiecej: "Komenda inspirowana funkcją z bota FratikBOT."
  };