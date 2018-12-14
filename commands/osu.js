module.exports.run = async (client, message, args) => { 

  const Discord = require('discord.js')
  const osu = require('node-osu');
  const api = new osu.Api("1f5c22df840784e99407fc3291e846e7c56e074a" , {
    notFoundAsError: true,
    completeScores: false })
  let poprawnosc = client.emojis.find('name', 'poprawnosc');
  let username = args[0]
  
  
  if (!args[0]) return message.channel.send(`**${message.author.tag}** podaj prawidłowy nick gracza OSU aby wyświetlić jego statystyki.`)
  
api.getUser({u: username}).then(user => {
  const embed = new Discord.RichEmbed()
  .setTitle('**Statystyki gracza OSU**')
  .setDescription(`Statystyki wybranego przez ciebie gracza osu zostały wyświetlone poniżej.`)
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("#D0436A")
  .addField('**Nick**', user.name, true)
  .addField('**PP**', Math.round(user.pp.raw), true)
  .addField('**Ranking**', user.pp.rank, true)
  .addField('**Poziom**', Math.round(user.level), true)
  .addBlankField()
  .addField('**Kraj**', user.country, true)
  .addField('**Miejsce w rankingu kraju**', user.pp.countryRank, true)
  .addField('**Zagrane gry**', user.counts.plays, true)
  .addField('**Celność**', `${user.accuracyFormatted}`, true)
  .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
  message.channel.send(embed)
  
  message.react(poprawnosc)
})

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "osu",
    category: "TESTOWE",
    description: "-",
    usage: "osu",
    wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
  };