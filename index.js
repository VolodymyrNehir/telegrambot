const telegramBotApi = require('node-telegram-bot-api');
const url = require("url");

const token = '5391660001:AAGQd7SgJECb3GdPary7QzAu7e-5TkjcTWg'

const bot = new telegramBotApi(token,{polling:true})
bot.on('message',msg =>{
   const chatID = msg.chat.id;
   const randomNumber = Math.floor(Math.random()*10)
    if (randomNumber > 5){
        bot.sendPhoto(chatID, './img/telegram-cloud-photo-size-2-5361854923882479983-x.jpg')
    } else {
        bot.sendSticker(chatID,'./img/img.png')
    }

})
