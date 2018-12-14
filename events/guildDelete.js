module.exports = (client, guild) => {
  client.logger.cmd(`[GUILD LEAVE] Z serwera ${guild.name} (ID: ${guild.id}) usunięto bota.`);

  // If the settings Enmap contains any guild overrides, remove them.
  // No use keeping stale data!
  if (client.settings.has(guild.id)) {
    client.settings.delete(guild.id);
  }
};
