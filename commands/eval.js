
exports.run = async (client, message, args, level) => { 

  const Discord = require("discord.js");
  const code = args.join(" ");
  try {
  const evaled = eval(code);
  const clean = await client.clean(client, evaled);
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  const embedeval = new Discord.RichEmbed()
    .setColor("#e8ff56")  
    .setFooter(`Kod evalowany przez użytkownika ${message.author.tag}.`, `${message.author.avatarURL}`)
    .setTitle(`Eval`)
    .addField(`Input :inbox_tray:`, `${code}`)
    .addField(`Output :outbox_tray:`, `${clean}`);

    message.channel.send(embedeval);
    message.react(poprawnosc)

  } catch (err) {
    message.channel.send(`**${message.author.tag}** podczas evalowania kodu wystąpił error, oto jego treść:`)
    message.channel.send(` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Developer"
};

exports.help = {
  name: "eval",
  category: "System",
  description: "-",
  usage: "eval <eval code>",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};