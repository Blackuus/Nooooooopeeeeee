exports.run = (client, message, args, tools) => {

const Discord = require("discord.js");
let poprawnosc = client.emojis.find('name', 'poprawnosc');
var figlet = require('figlet');
var maxLen = 14 
var minLen = 1
  
  if(args.join(' ').length > maxLen) return message.channel.send(`**${message.author.tag}** w komendzie **ascii** maksymalna ilość znaków aby komenda zadziałała to **14**!`)
  if(args.join(' ').length < minLen ) return message.channel.send(`**${message.author.tag}** aby ta komenda zadziałała musisz podać treść. Treść musi mieć więcej niż **1** znak!`)
      
  message.channel.send(`**${message.author.tag}** oto twój tekst **ascii**:`)
  message.channel.send(`${data}`, {code: 'AsciiArt'});
  message.react(poprawnosc)

}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "ascii",
    category: "Inne",
    description: "-",
    usage: "ascii [tekst]",
    wiecej: "Brak dodatkowej informacji do pomocy."
  };
