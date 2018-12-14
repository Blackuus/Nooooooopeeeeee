exports.run = async (client, message, args, level) => { 
  
  const Discord = require("discord.js");
  let poprawnosc = client.emojis.find('name', 'poprawnosc');
  let replies = ["**orzełek**", "**reszka**"];
  let result = Math.floor((Math.random() * replies.length))

  message.channel.send(`**${message.author.tag}**, wylosowałeś: ${replies[result]}`);
  message.react(poprawnosc)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "coinflip",
  category: "Inne",
  description: "-",
  usage: "coinflip",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};
