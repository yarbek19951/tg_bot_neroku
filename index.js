const TgBot = require("node-telegram-bot-api")
const token = "947744233:AAGo6O4hwcL9DqGe7nXaajNBgphw8Z98v4Q";
const bot = new TgBot(token,{polling:true});

bot.on("message",msg =>{
	bot.sendMessage(msg.chat.id,"Salom tentak")
})