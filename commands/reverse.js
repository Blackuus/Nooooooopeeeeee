exports.run = (client, message, args, tools) => {

  const Discord = require('discord.js')
  let poprawnosc = client.emojis.find('name', 'poprawnosc');
  let rewers = reverseString(args.join(' '))
  if(!args[0]) return message.channel.send('Nie podałeś **tekstu** który mam odwrócić!');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  message.channel.send(`**${message.author.tag}** oto twój tekst napisany od tyłu: **${rewers}**. Fajny ten napis, tylko coś z nim nie tak, a no tak zapomniałem, że jest napisany od tyłu!`);
  message.react(poprawnosc)
    
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "reverse",
    category: "Inne",
    description: "-",
    usage: "reverse <tekst>",
    wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
  };
