module.exports.run = async (client, message, args) => {
  
    const Discord = require("discord.js");
    const papugi = require('../zasoby/papugi.json');

    const parrotembed = new Discord.RichEmbed()
    .setColor("#96ffee")
    .setTitle('Ziuum, papugi to przepiękne zwierzęta. Oto jedna dla ciebie...')
    .setDescription('Źródło pliku: strona internetowa')
    .setImage(papugi[Math.floor(Math.random() * papugi.length)])
    .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
        message.channel.send(parrotembed);
        message.react(poprawnosc)
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "papuga",
    category: "Zwierzęta",
    description: "-",
    usage: "papuga",
    wiecej: "Komenda inspirowana funkcją z bota FratikBOT."
  };