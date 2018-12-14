module.exports.run = async (client, message, args, level) => {

const Discord = require("discord.js");

var member = message.mentions.members.first();
member.kick().then((member) => {
    message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ")
},




  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  });
  
  exports.help = {
    name: "kick",
    category: "Administracyjne",
    description: "-",
    usage: "emojify [tekst]",
    wiecej: "Bot pomija litery z \"kreseczkami i kropeczkami\" np. ą, ę, ó etc."
  }}