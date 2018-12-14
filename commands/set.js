const { inspect } = require("util");

exports.run = async (client, message, [action, key, ...value], level) => { 
let poprawnosc = client.emojis.find('name', 'poprawnosc');
const settings = message.settings;
const defaults = client.settings.get("default");
if (action === "set") {
if (!key) return message.reply("Podaj **klucz do ustawienia**.")
if (!settings[key]) return message.reply("Ten **klucz** nie istnieje.");
if (value.length < 1) return message.reply("Podaj inną **wartość**");

settings[key] = value.join(" ");

client.settings.set(message.guild.id, settings);
message.reply(`**${key}** został pomyślnie ustawiony na: **${value.join(" ")}**`);
message.react(poprawnosc)
} else
if (action === "reset") {
if (!key) return message.reply("Podaj **klucz** do zresetowania.");
if (!settings[key]) return message.reply("Ten **klucz** nie istnieje.");
const response = await client.awaitReply(message, `Czy jesteś pewien, że chcesz zresetować **${key}** na domyślną wersję? Poniżej napisz odpowiedź **tak** lub **nie**.`);

if (["tak"].includes(response)) {

delete settings[key];
client.settings.set(message.guild.id, settings);
message.channel.send(`Klucz **${key}** został pomyślnie zresetowany do domyślnej wersji.`);
message.react(poprawnosc)
} else
if (["nie"].includes(response)) {
message.channel.send(`Klucz **${key}** nie został zresetowany do domyślnej wersji.`);
}
} else
if (action === "get") {
if (!key) return message.reply("Podaj **klucz** aby otrzymać więcej informacji na jego temat.");
if (!settings[key]) return message.reply("Ten **klucz nie istnieje**");
message.channel.send(`Wartość klucza **${key}** to: \`${settings[key]}\``);
message.react(poprawnosc)
} else {
  const array = [];
  Object.entries(settings).forEach(([key, value]) => {
    array.push(`${key}${" ".repeat(20 - key.length)}::  ${value}`); 
  });
  await message.channel.send(`= Konfiguracja serwera =\n${array.join("\n")}`, {code: "asciidoc"});
  message.react(poprawnosc)
}
};

exports.conf = {
enabled: false,
guildOnly: true,
aliases: [],
permLevel: "Administrator"
};

exports.help = {
name: "set",
category: "System",
description: "-",
usage: "set <reset/get/set> <klucz> <wartość>",
wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
};
