
module.exports.run = async (client, message, args, level) => {

const Discord = require("discord.js");
let poprawnosc = client.emojis.find('name', 'poprawnosc');

const znaki = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:',
  'ą':  ' ',
  'Ą':  ' ',
  'ć':  ' ',
  'Ć':  ' ',
  'ę':  ' ',
  'Ę':  ' ',
  'ł':  ' ',
  'Ł':  ' ',
  'ś':  ' ',
  'Ś':  ' ',
  'ź':  ' ',
  'Ź':  ' ',
  'ż':  ' ',
  'Ż':  ' ',
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  znaki[c] = znaki[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

if (args.length < 1) { 
  message.channel.send(`**${message.author.tag}** gdzie zgubiłeś tekst?`);
  
}

message.channel.send(args.join(' ').split('').map(c => znaki[c] || c).join(''),
    message.react(poprawnosc)


);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "emojify",
    category: "Inne",
    description: "-",
    usage: "emojify [tekst]",
    wiecej: "Bot pomija litery z \"kreseczkami i kropeczkami\" np. ą, ę, ó etc."
  };