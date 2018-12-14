exports.run = async (client, message, args, level) => { 
  
  const msg = await message.channel.send("Ping");
  let poprawnosc = client.emojis.find('name', 'poprawnosc');

  msg.edit(`Pong! Różnica w wysyłaniu/edytowaniu wiadomości: ${msg.createdTimestamp - message.createdTimestamp}ms. Ping w stosunku do **API** discorda ${Math.round(client.ping)}ms`);
  message.react(poprawnosc)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Użytkownik"
};

exports.help = {
  name: "ping",
  category: "Inne",
  description: "-",
  usage: "ping",
  wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};
