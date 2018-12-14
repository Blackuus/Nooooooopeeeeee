exports.run = async (client, message, args, level) => { 

    let poprawnosc = client.emojis.find('name', 'poprawnosc');
    
    message.channel.send(`**Witaj ${message.author.tag}**\nAby dodać bota **BlackuuuBOT** na swój serwer kliknij na link poniżej. Bot jest inspirowany botem FratikBOT.\n**Link** \nhttps://discordapp.com/oauth2/authorize?client_id=487323241065611265&permissions=8&scope=bot`);
    message.react(poprawnosc)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "zaproszenie",
    category: "Inne",
    description: "-",
    usage: "zaproszenie",
    wiecej: "Brak dodatkowych informacji do pomocy dotyczących tej komendy."
  };
  