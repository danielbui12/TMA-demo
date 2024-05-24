require("dotenv").config();
const {Telegraf} = require("telegraf");
const {message} = require("telegraf/filters");

const url = "https://danielbui12.github.io/TMA-demo/";

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome', {
    reply_markup: { keyboard: [[{ text: "TCB mini app", web_app: { url: url } }]]},
}))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
