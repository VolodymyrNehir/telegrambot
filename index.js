const telegramBotApi = require('node-telegram-bot-api');
const token = '5391660001:AAGQd7SgJECb3GdPary7QzAu7e-5TkjcTWg';
const bot = new telegramBotApi(token, {polling: true})

bot.setMyCommands([
    {command: '/go', description: 'підкинути монетку'}
])
// Command

bot.on('message', msg => {
    const text = msg.text
    const chatID = msg.chat.id;
    const randomNumber = Math.floor(Math.random() * 10)
    // Random

    const go = async () => {
        if (text === '/go' & (randomNumber % 2 === 0) || text === '/start' & (randomNumber % 2 === 0)) {
            await bot.sendSticker(chatID, 'CAACAgIAAxkBAAEFQthizsQ84J6jCPbF7yWjwgSPebi0lAACUx0AAtfzaUqygSLXQdkB4ikE')
            await bot.sendMessage(chatID, '/go'
            )
        }
        if (text === '/go' & (randomNumber % 2 === 1) || text === '/start' & (randomNumber % 2 === 1)) {
            await bot.sendSticker(chatID, 'CAACAgIAAxkBAAEFR6hi0JO8UVRs6oG_8_lFrM7IAAEnpuYAApYUAAIk34hK6VCO6-8kkIApBA')
            await bot.sendMessage(chatID, '/go'
            )
        }
    }

    go()

})
