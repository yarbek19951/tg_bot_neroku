const TgBot = require("node-telegram-bot-api")
const token = "947744233:AAGo6O4hwcL9DqGe7nXaajNBgphw8Z98v4Q";
const bot = new TgBot(token,{polling:true});
bot.on("message",msg =>{
	var text = msg.text.toString();
	var day = new Date();
	var hafta = 0;
	if(text=="bugun" || text == "1"){
		hafta = day.getDay() 
	}else if(text=="ertaga" || text == "2"){

		hafta = day.getDay()+1
		if(hafta==7){
			hafta=0;
		}
	}
	var guruh_408 = 
	[
		[
			"Yakshanba kuni dars bo'lmaydi"
		],
		//Dushanba

		[
			"1.Informatikani o'qitish texnalogiyalari. o'q Xaitova 106\n",
			"2.Fuqorolik jamiyati,o'q Toshboey, 111\n",
			"3.Kompyuterga serviz va texnik xizmat ko'rsatish, o'q Bekbotaev A\n",
		],
		//Seshanba
		[
			"1.Web dizayn. o'q Tangirov 117\n",
			"2.Kompyuterga serviz o'q Bekbotaev A \\ Pedagogik dasturiy vositalar, Aliboev S \n",
			"3.Kompyuterga modellashtirish, o'q Shodmonqulov M 109\n",
			"4.Amaliy ingliz tili, o'q Pozilov M 118\n",				
		],
		//Chorshanba
		[
			"1.Pedagogik dasturiy vositalar, Aliboev S \n",
			"2.Web dizayn. o'q Tangirov 117 \\ Axborot tizimlari, Sattarov A\n ",
			"3.Axborot tizimlari, o'q Sattarov A 103\n ",
							
		],
		//Payshanba
		[
			"1.Pedagogik dasturiy vositalar, Aliboev S \n",
			"2.Informatikani o'qitish texnalogiyalari. o'q F.Axmedov 111\n ",
			"3.Fuqorolik jamiyati,o'q Toshboey, 118\n",
							
		],
		//Juma
		[
			"1.Web dizayn. o'q Tangirov 117\n",
			"2.Kompyuterga modellashtirish, o'q Shodmonqulov M 111\n ",
			
							
		],
		//Shanba
		[
			"1.Web dizayn. o'q Tangirov 117\n",
			"2.Kompyuterga modellashtirish, o'q Shodmonqulov M 111\n ",
			
							
		],
		
	]
	var darsjadval = "";
	for (var i = 0; i < guruh_408[hafta].length; i++) {
		darsjadval = darsjadval + guruh_408[hafta][i];
	}
	bot.sendMessage(msg.chat.id,darsjadval )
})