
const Discord = require('discord.js')

module.exports = (client, message) => {
  let blad = client.emojis.find('name', 'blad');

  if (message.author.bot) return;

  
  const settings = message.guild ? client.getSettings(message.guild.id) : client.settings.get("default");

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`Tak, słucham? Mój prefix to **${settings.prefix}**`);
  }
  
  message.settings = settings;
  
  const errorembed = new Discord.RichEmbed()
      .setTitle(`**Wystąpił błąd**`)
      .addBlankField()
      .addField(`**Co się stało?**`, `Wpisana przez Ciebie komenda może zostać użyta tylko na kanałach tekstowych! Użyj jej na kanale typu text.`)
      .addBlankField()
      .setFooter(`Jeżeli próba użycia komendy na kanale tekstowym nie pomogła napisz do Developerów bota!`)
  
  if (message.content.indexOf(settings.prefix) !== 0) return;

  
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
  const level = client.permlevel(message);

  
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  
  if (!cmd) return;

  
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send(errorembed)

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`= Brak uprawnień =\nNie masz uprawnień do użycia tej komendy. \nTwój poziom uprawnień to :: ${level} (${client.config.permLevels.find(l => l.level === level).name})\nWymagany poziom uprawnień to :: ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`, {code:"asciidoc"});
      message.react(blad)
    } else {
      return;
    }
  }

  message.author.permLevel = level;
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  
  client.log("Command log", ` ${client.config.permLevels.find(l => l.level === level).name} o nicku ${message.author.username} ID użytkownika: ${message.author.id} użył komendy ${cmd.help.name}`, "UŻYCIE");
  cmd.run(client, message, args, level);
};
