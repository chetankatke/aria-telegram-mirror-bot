module.exports = Object.freeze({
  TOKEN: '809373319:AAFJbnYTjKSXpUuGl6cee5ZhB-LyIllnppI',
  ARIA_SECRET: '1',
  ARIA_DOWNLOAD_LOCATION: '/home/c_katke/down',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/home/c_katke', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1eVJgFaCCihll-msqM06hId3goU5DY5Fq',
  SUDO_USERS: [374920359,602293934],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 10000, // A smaller number will update faster, but might cause rate limiting
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});