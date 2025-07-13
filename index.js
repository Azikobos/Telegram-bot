require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const math = require('mathjs');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  try {
    const result = math.evaluate(text);
    bot.sendMessage(chatId, `✅ Natija: ${result}`);
  } catch (error) {
    bot.sendMessage(chatId, '❌ Noto‘g‘ri ifoda. Masalan: 2 + 3 * (5 - 1)');
  }
});

bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});
