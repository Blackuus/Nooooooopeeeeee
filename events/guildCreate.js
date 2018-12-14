
module.exports = (client, guild) => {
  client.user.setPresence({game: {name: `${client.settings.get("default").prefix}help | ${client.guilds.size} serwerów`, type:1}});  
  client.log("log", ` Dodano bota na kolejny serwer. Nazwa serwera: ${guild.name}  (ID: ${guild.id}) na serwerze użytkowników: ${guild.memberCount}`, "JOINED");
};
