const telegramBotApi = require('node-telegram-bot-api');
const url = require("url");
const {debug} = require("nodemon/lib/utils");

const token = '5391660001:AAGQd7SgJECb3GdPary7QzAu7e-5TkjcTWg';

const bot = new telegramBotApi(token,{polling:true})

bot.setMyCommands([
    {command:'/go', description:'підкинути монетку'}
])



bot.on('message',msg =>{
   const text = msg.text
   const chatID = msg.chat.id;
   const randomNumber = Math.floor(Math.random()*10)



   const options =
    {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'google',
                    callback_data: '/go'
                }]

            ]
        })
    }


    bot.on('callback_query', query =>{
        const go = query.data.search('/go')
       return  bot.sendMessage(query.message.chat.id, 'ik',options)
    })

     if (text === '/go' & (randomNumber % 2 === 0) ){
        bot.sendSticker(chatID, 'CAACAgIAAxkBAAEFQthizsQ84J6jCPbF7yWjwgSPebi0lAACUx0AAtfzaUqygSLXQdkB4ikE')
    } if (text === '/go' & (randomNumber % 2 === 1) ) {
        bot.sendSticker(chatID,'./img/img.png')
    }

})
