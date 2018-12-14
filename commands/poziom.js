exports.run = async (client, message, args, level) => {
  
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  message.reply(`Twój poziom uprawnień to: ${level}  **${friendly}**`);
  message.react(poprawnosc)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "poziom",
  category: "System",
  description: "-",
  usage: "poziom",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};
