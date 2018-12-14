const config = {
  "ownerID": "",
  "admins": [],
  "support": ["429585324826558464", "311188953497862154"],
  "token": "NDg3MzIzMjQxMDY1NjExMjY1.DsJFXQ.iLw-wZh_J2MgqS0sfs0qdGwTmu8",
  "dashboard" : {
    "oauthSecret": "_dPxJb9-oQWZ-bVe1mUpl1lWzsdGoSHh",
    "callbackURL": `http:///callback`,
    "sessionSecret": "Blackuuu",
    "domain": "",
    "port": 81
  },
  permLevels: [
    { level: 0,
      name: "Użytkownik", 
      check: () => true
    },
    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    { level: 3,
      name: "Administrator", 
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 4,
      name: "Właściciel serwera", 
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },
    { level: 8,
      name: "Administrator bota",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 9,
      name: "Vice developer",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 10,
      name: "Developer", 
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
