const telegramBotApi = require('node-telegram-bot-api');
const {quiet} = require("nodemon/lib/utils");
const token = '5391660001:AAGQd7SgJECb3GdPary7QzAu7e-5TkjcTWg';
const bot = new telegramBotApi(token, {polling: true})
const exspress = require('express');

const app = exspress()
const PORT = process.env.PORT || 3000;



// const button = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: 'go', callback_data: '1'}]
//         ]
//
//     })
// }
// button

bot.on('message', msg => {
    const text = msg.text
    const chatID = msg.chat.id;
    // message

    const button = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'go', callback_data: '1'}]
            ]

        })
    }

    const go = async () => {
       const randomNumber = Math.floor(Math.random() * 10)
        // Random

        if (chatID === chatID & (randomNumber % 2 === 0) || text === '/start' & (randomNumber % 2 === 0)) {
            await bot.sendSticker(chatID, 'CAACAgIAAxkBAAEFQthizsQ84J6jCPbF7yWjwgSPebi0lAACUx0AAtfzaUqygSLXQdkB4ikE')
            await bot.sendMessage(chatID, 'Решка', button,
            )
        }
        if (chatID === chatID & (randomNumber % 2 === 1) || text === '/start' & (randomNumber % 2 === 1)) {
            await bot.sendSticker(chatID, 'CAACAgIAAxkBAAEFR6hi0JO8UVRs6oG_8_lFrM7IAAEnpuYAApYUAAIk34hK6VCO6-8kkIApBA')
            await bot.sendMessage(chatID, 'Орел', button
            )
        }
    }


    bot.on('callback_query', async data => {
        if ( chatID) {
            go()
        }
    })

    // action
if (text === '/start' & chatID === chatID){
   return  go()
}
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

// app.listen(1997, () => {
//     console.log('PORT  1997');
// });
