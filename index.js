const telegramBotApi = require('node-telegram-bot-api');
const {quiet} = require("nodemon/lib/utils");
const exspress = require('express');

const token = '5391660001:AAGQd7SgJECb3GdPary7QzAu7e-5TkjcTWg';
const bot = new telegramBotApi(token, {polling: true})

const app = exspress()
const PORT = process.env.PORT || 3000;
// PORT

const button = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'go', callback_data: '1'}]
        ]

    })
}
// button

const go = async (id, text) => {
    const randomNumber = Math.floor(Math.random() * 10)
    // Random

    if (id & (randomNumber % 2 === 0) || text === ('/start' & '/go') & (randomNumber % 2 === 0)) {
        await bot.sendSticker(id, 'CAACAgIAAxkBAAEFQthizsQ84J6jCPbF7yWjwgSPebi0lAACUx0AAtfzaUqygSLXQdkB4ikE')
        return  bot.sendMessage(id, 'Решка', button,
        )
    }
    if (id & (randomNumber % 2 === 1) || text === ('/start' & '/go') & (randomNumber % 2 === 1)) {
        await bot.sendSticker(id, 'CAACAgIAAxkBAAEFR6hi0JO8UVRs6oG_8_lFrM7IAAEnpuYAApYUAAIk34hK6VCO6-8kkIApBA')
        return  bot.sendMessage(id, 'Орел', button
        )
    }
}
// action


bot.on('message', msg => {
    const text = msg.text
    const chatID = msg.chat.id;
    if (text === ('/start' & '/go') & chatID === chatID) {
        go(chatID, text)
    }
})
// message

bot.on('callback_query', async data => {
    const text = data.message.text
    const id = data.message.chat.id
    if (id || id & text === '/start') {
        go(data.message.chat.id, data.message.chat.text)
    }
})
// callback_query

app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});


