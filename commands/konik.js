
module.exports.run = async (client, message, args) => {
    
    const Discord = require("discord.js");
    const konie = require('../zasoby/konie.json');
    let poprawnosc = client.emojis.find('name', 'poprawnosc');

    const horseembed = new Discord.RichEmbed()
    .setColor("#96ffee")
    .setTitle('Yup! Przygotowałem dla ciebie konika! Fajny prawda?')
    .setDescription('Źródło pliku: strona internetowa')
    .setImage(konie[Math.floor(Math.random() * konie.length)])
    .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
        message.channel.send(horseembed);
        message.react(poprawnosc)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "konik",
    category: "Zwierzęta",
    description: "-",
    usage: "horse",
    wiecej: "Brak dodatkowych informacji do pomocy."
  };