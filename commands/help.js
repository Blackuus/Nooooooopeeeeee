exports.run = (client, message, args, level) => {
  let poprawnosc = client.emojis.find('name', 'poprawnosc');
  if (!args[0]) {
    
    const settings = message.settings;
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    let currentCategory = "";
    
    let output = `= Lista komend =\n\n[Użyj ${settings.prefix}help <nazwa_komendy> aby dowiedzieć się więcej na temat danej komendy]\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toProperCase();
      if (currentCategory !== cat) {
        output += `\n\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${settings.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
    });
    message.channel.send(output, {code:"asciidoc"});
    message.react(poprawnosc)
  } else {
    
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUżycie :: ${command.help.usage}\nDodatkowe :: ${command.help.wiecej}`, {code:"asciidoc"});
      mesage.react(poprawnosc)
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "help",
  category: "System",
  description: "-",
  usage: "help [komenda]",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};
