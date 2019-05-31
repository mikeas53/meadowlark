var fortunes = [
	"Conquer your fears or they will conquer you/Победи свои страхи или они победят тебя.",
	"Rivers need springs/Рекам нужны истоки.",
	"Do not fear what you don't know/Не бойся неведомого.",
	"You will have a pleasant surprise/Тебя ждет приятный сюрприз.",
	"Whenever possible, keep it simple/Будь проше везде, где только можно.",
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};