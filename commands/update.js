exports.run = (client, message, args, level) => { 
  
  const { version } = require("discord.js");
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  message.channel.send(`Tu nic nie ma`);
message.react(poprawnosc)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nowość"],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "update",
  category: "Inne",
  description: "-",
  usage: "update",
  wiecej: "Brak dodatkowych informacji do pomocy."
};
