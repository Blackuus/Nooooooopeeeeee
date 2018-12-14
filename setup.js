const inquirer = require("inquirer");
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
const fs = require("fs");

let baseConfig = fs.readFileSync("./setup_base.txt", "utf8");

const defaultSettings = `
  prefix: "!",
  modLogChannel: "mod-log",
  modRole: "Moderator",
  adminRole: "Administrator",
  systemNotice: "true",
  welcomeChannel: "Brak kanału do powitań, ustaw go w !set",
  welcomeMessage: "Brak domyślnego powitania, ustaw je w !set",
  welcomeEnabled: "false"`

const settings = new Enmap({provider: new EnmapLevel({name: "settings"})}); 

let prompts = [
  {
    type: "list", 
    name: "resetDefaults", 
    message: "Czy chcesz zresetować ustawienia do domyślnych?", 
    choices: ["Tak", "Nie"]
  },
  {
    type: "input",
    name: "token",
    message: "Wstaw token bota."
  },
  {
    type: "input",
    name: "ownerID",
    message: "Wstaw ID użytkownika który jest właścicielem bota"
  },
  {
    type: "input",
    name: "oauthSecret",
    message: "Wstaw Client Secret bota."
  },
  {
    type: "input",
    name: "saltyKey",
    message: "Wprowadź hasło (wymyśl hasło chroniące bota)"
  },
  {
    type: "input",
    name: "host",
    message: "Wpisz domenę i port (opcjonalne)"
  }
];

(async function() {
  console.log("Rozpoczęto konfigurację bota.");
  await settings.defer;
  if (!settings.has("default")) {
    prompts = prompts.slice(1);
    console.log("Na początek! Ustaw domyślne ustawienia do bazy danych ...");
    await settings.setAsync("default", defaultSettings);
  }
  const isGlitch = await inquirer.prompt([{type: "confirm", name: "glitch", message: "Czy twój bot jest hostowany na Glitch.com?", default: false}]);

  if (isGlitch.glitch) {
    baseConfig = baseConfig
      .replace("{{fullURL}}", "${process.env.PROJECT_DOMAIN}")
      .replace("{{domain}}", "`${process.env.PROJECT_DOMAIN}.glitch.me`")
      .replace("{{port}}", "process.env.PORT")
      .replace("{{token}}", "process.env.TOKEN")
      .replace("{{oauthSecret}}", "process.env.SECRET")
      .replace("{{sessionSecret}}", "process.env.SESSION_SECRET");
    console.log("Pamiętaj o umieszczeniu tokenu oraz secret_id bota w pliku konfiguracyjnym!");
    const ownerID = await inquirer.prompt([{name: "data", message: "Podaj ID użytkownika który jest właścicielem bota"}]);
    baseConfig = baseConfig.replace("{{ownerID}}", ownerID.data);
    fs.writeFileSync("./config.js", baseConfig);
    console.log("Konfiguracja została zapisana, miłej zabawy!");
    return;
  }

  const answers = await inquirer.prompt(prompts);

  if (answers.resetDefaults && answers.resetDefaults === "Yes") {
    console.log("Resetowanie domyślnych ustawień serwera.");
    await settings.setAsync("default", defaultSettings);
  }

  const port = answers.host.split(":")[1] || "81";

  baseConfig = baseConfig
    .replace("{{ownerID}}", answers.ownerID)
    .replace("{{fullURL}}", answers.host)
    .replace("{{domain}}", `"${answers.host.split(":")[0]}"`)
    .replace("{{port}}", port)
    .replace("{{token}}", `"${answers.token}"`)
    .replace("{{oauthSecret}}", `"${answers.oauthSecret}"`)
    .replace("{{sessionSecret}}", `"${answers.saltyKey}"`);
  
  fs.writeFileSync("./config.js", baseConfig);
  console.log("Nigdy nie podawaj tokenu bota!");
  console.log("Konfiguracja została zapisana, miłej zabawy!");
  await settings.close();
}());