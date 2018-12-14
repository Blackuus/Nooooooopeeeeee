

exports.run = async (client, message, [action, key, ...value], level) => { 
  
  const { inspect } = require("util");
  let poprawnosc = client.emojis.find('name', 'poprawnosc');
  const defaults = client.settings.get("default");
  
  
  if (action === "add") {
    if (!key) return message.reply("Podaj **klucz** do dodania.");
    if (defaults[key]) return message.reply("Ten **klucz** już znajduje się w globalnej konfiguracji.");
    if (value.length < 1) return message.reply("Podaj **wartość**!");

    
    defaults[key] = value.join(" ");
  
    
    client.settings.set("default", defaults);
    message.channel.send(`Klucz o nazwie **${key}** został pomyślnie dodany, jego wartość to **${value.join(" ")}**.`);
    message.react(poprawnosc)
  } else
  

  if (action === "set") {
    if (!key) return message.reply("Podaj **klucz** do edytowania.");
    if (!defaults[key]) return message.reply("Ten **klucz** nie znajduje się w globalnej konfiguracji!");
    if (value.length < 1) return message.reply("Podaj nową **wartość**!");

    defaults[key] = value.join(" ");

    client.settings.set("default", defaults);
    message.channel.send(`Klucz **${key}** został prawidłowo zedytowany, jego obecna wartość to **${value.join(" ")}**.`);
    message.react(poprawnosc)
  } else
  

  if (action === "delete") {
    if (!key) return message.reply("Podaj **klucz** do usunięcia.");
    if (!defaults[key]) return message.reply("Ten **klucz** nie znajduje się w globalnej konfiguracji!");
    
   
    const response = await client.awaitReply(message, `Czy jesteś pewien, że chcesz usunąć **${key}** z konfiguracji dla wszystkich serwerów na domyślną wersję? Poniżej napisz odpowiedź **tak** lub **nie**.`);


    if (["tak"].includes(response)) {

      
      delete defaults[key];
      client.settings.set("default", defaults);
      
      
      for (const [guildid, conf] of client.settings.filter((setting, id) => setting[key] && id !== "default")) {
        delete conf[key];
        client.settings.set(guildid, conf);
      }
      
      message.reply(`Klucz **${key}** został prawidłowo usunięty.`);
      message.react(poprawnosc)
    } else
    
    if (["nie"].includes(response)) {
      message.reply(`Klucz **${key}** nie został usunięty.`);
    }
  } else
  
  
  if (action === "get") {
    if (!key) return message.reply("Podaj **klucz** aby otrzymać więcej informacji na jego temat.");
    if (!defaults[key]) return message.reply("Ten **klucz** nie znajduje się w globalnej konfiguracji!");
    message.reply(`Wartość klucza **${key}** to: \`${defaults[key]}\``);
    message.react(poprawnosc)

  
  } else {
    const array = [];
      Object.entries(defaults).forEach(([key, value]) => {
        array.push(`${key}${" ".repeat(20 - key.length)}::  ${value}`); 
      });
      await message.channel.send(`= Globalna konfiguracja =\n${array.join("\n")}`, {code: "asciidoc"});
      message.react(poprawnosc)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["config"],
  permLevel: "Vice Developer"
};

exports.help = {
  name: "conf",
  category: "System",
  description: "-",
  usage: "conf <add/delete/set/get> /<klucz> <wartość>",
  wiecej: `Brak dodatkowych informacji do pomocy dotyczących tej komendy.`
};
