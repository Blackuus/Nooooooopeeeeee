module.exports = async client => {

  await client.wait(1000);

  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);

  
  if (!client.settings.has("default")) {
    if (!client.config.defaultSettings) throw new Error("Domyślne ustawienia nie zostały ustawione w pliku config.js. Bot nie może się uruchomić.");
    client.settings.set("default", client.config.defaultSettings);
  }

 
  require("../modules/dashboard")(client);  


  client.user.setPresence({game: {name: `${client.settings.get("default").prefix}help | ${client.guilds.size} serwerów`, type:1}});
  
  
  client.log("Ready log", ` ${client.user.tag} został poprawnie uruchomiony. Statystyki: ${client.users.size} użytkowników na ${client.guilds.size} serwerach.`, "ZAŁADOWANO");
};
