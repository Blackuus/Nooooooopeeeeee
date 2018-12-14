exports.run = async (client, message, args, level) => {
  
  let response = await client.unloadCommand(args[0]);
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  if (!args || args.length < 1) return message.reply("Podaj **komendę** którą chcesz przeładować");
  if (response) return message.channel.send(`**${message.author.tag}** podczas ładowania wystąpił błąd. Treść tego błędu to: **${response}**`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`**${message.author.tag}** podczas ładowania wystąpił błąd. Treść tego błędu to: **${response}**`);

  message.channel.send(`**${message.author.tag}** pomyślnie przeładowano komendę **${args[0]}**.`);
  message.react(poprawnosc)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Developer"
};

exports.help = {
  name: "reload",
  category: "System",
  description: "-",
  usage: "reload <komenda>",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};