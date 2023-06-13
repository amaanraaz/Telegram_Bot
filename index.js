const { Telegraf } = require('telegraf');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);

console.log(bot);

bot.start((ctx) => ctx.reply('Welcome to my bottttt'));

bot.launch();