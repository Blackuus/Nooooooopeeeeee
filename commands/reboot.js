exports.run = async (client, message, args, level) => {
  
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  await message.channel.send(`**${message.author.tag}** bot jest **restartowany**, jeśli działa on na PM2 to uruchomi się on automatycznie. Możliwe, że to **update**, proszę chwilę zaczekać.`);
  await message.react(poprawnosc)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Developer"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "-",
  usage: "reboot",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};