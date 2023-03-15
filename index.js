const TelegramBot = require('node-telegram-bot-api');

const token = '6279161210:AAGC5HZ5zCanzE2pDCeyJQJ4hIuDE-FY1sM';

const webAppUrl = 'https://regal-cocada-a3f4f5.netlify.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Сделайте заказ', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }
  if (text === '/start') {
    await bot.sendMessage(chatId, 'Заполните форму, чтобы продолжить', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполнить форму'}]
            ]
        }
    })
  }
});