module.exports.run = async (client, message, args) => {
  
    const Discord = require("discord.js");
    const Client = require('fortnite');
    const fortnite = new Client("81af330e-397f-4022-87f4-b68804c7ffdf");
    let poprawnosc = client.emojis.find('name', 'poprawnosc');
    let username = args[0];
    let platform = args[1];
    let data = fortnite.user(username, platform).then(data => {
    let stats = data.stats;
    let lifetime = stats.lifetime;
    let score = lifetime[6]['Score'];
    let mplayed = lifetime[7]['Matches Played'];
    let wins = lifetime[8]['Wins'];
    let winper = lifetime[9]['Win%'];
    let kills = lifetime[10]['Kills'];
    let kd = lifetime[11]['K/d'];

    if(!username) return message.channel.send(`**${message.author.tag}** podaj prawidłowy nick gracza Fortnite aby wyświetlić jego statystyki.`)
    if(!platform) return message.channel.send(`**${message.author.tag}** podaj prawidłową platformę z której chcesz wyświetlić statystyki użytkownika.`) 

        let embed = new Discord.RichEmbed()
        .setTitle(`**Statystyki gracza ${data.username}** `)
        .setDescription(`Statystyki wybranego przez ciebie gracza Fortnite zostały wyświetlone poniżej.`)
        .setColor("#42f4dc")
        .addField("**Zabójstw**", kills, true)
        .addField("**Score**", score, true)
        .addField("**K/D**", kd, true)
        .addBlankField()
        .addField("**Zagranych meczy**", mplayed, true)
        .addField("**Procent wygranych meczy**", winper, true)
        .addField("**Wygranych meczy**", wins, true)
        .setFooter(`Komenda użyta przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)

        message.channel.send(embed);
        message.react(poprawnosc)

    }).catch((err) => {
      message.channel.send(`**${message.author.tag}** nie znaleziono użytkownika o takiej nazwie.`);
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "fortnite",
    category: "TESTOWE",
    description: "-",
    usage: "fortnite",
    wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
  };
