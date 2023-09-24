const TelegramBot = require('node-telegram-bot-api');

const token = '6128741356:AAGP3xyeajzR2jfdxS_Lni2yyUQkenH8cpg';
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'https://m.vk.com'; 

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;
  bot.sendMessage(chatId, `Привет, ${firstName}! Я ваш телеграм-бот.`, { 
  reply_markup: {
    inline_keyboard: [
      [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
    ]
  }
  }); 
});

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;
bot.sendMessage(chatId, `Привет, ${firstName}! ваше меню:`, { 
  reply_markup: {
    keyboard: [[]],
    resize_keyboard: true,
  }
  });
});


bot.on('polling_error', (error) => {
  console.error(error);
});

console.log('Бот запущен');
