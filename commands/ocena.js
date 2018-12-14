exports.run = async (client, message, args, level) => { 
  
    let replies = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"];
    let poprawnosc = client.emojis.find('name', 'poprawnosc');
    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(1).join(" ");

    if (!args[0]) return message.channel.send(`${message.author.tag} **Błąd** Nie podałeś tego co mam ocenić.`);
    
    message.channel.send(`**${message.author.tag}** moja ocena dotycząca wpisanego przez ciebie słowa to **${replies[result]}**.`);
    message.react(poprawnosc)
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Użytkownik"
  };
  
  exports.help = {
    name: "ocena",
    category: "Inne",
    description: "-",
    usage: "ocena [coś_do_oceny]",
    wiecej: "Uwaga! Oceny bota są w 100% losowe. Patrz na nie z przymrużeniem oka."
  };