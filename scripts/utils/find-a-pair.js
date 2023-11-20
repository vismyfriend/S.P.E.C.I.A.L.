// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allCardsGameFindAPair = {
    testOneSeven: [
        {
            id: 1,
            eng: "one test",
            ru: "один тест"
        },
        {
            id: 2,
            eng: "two",
            ru: "два"
        },
        {
            id: 3,
            eng: "three",
            ru: "три"
        },
        {
            id: 4,
            eng: "four",
            ru: "четыре"
        },
        {
            id: 5,
            eng: "five",
            ru: "пять"
        },
        {
            id: 6,
            eng: "six",
            ru: "шесть"
        },
        {
            id: 7,
            eng: "seven",
            ru: "семь"
        },
    ],
    adjectivesa2: [
        {
            id:1,
            eng:"boring /бОрин/",
            ru:"скучный"
            },
            {
            id:2,
            eng:"awesome /Осм/",
            ru:"офигенный"
            },
            {
            id:3,
            eng:"angry /Энгри/",
            ru:"сердитый"
            },
            {
            id:4,
            eng:"big",
            ru:"большой"
            },
            {
            id:5,
            eng:"black /блЭк/",
            ru:"Черный"
            },
            {
            id:6,
            eng:"blue /блУ/",
            ru:"синий"
            },
            {
            id:7,
            eng:"bald /бОлд/",
            ru:"лысый"
            },
            {
            id:8,
            eng:"bossy /бОсси/",
            ru:"властный"
            },
            {
            id:9,
            eng:"brave /брЭйв/",
            ru:"храбрый"
            },
            {
            id:10,
            eng:"interesting /ИНТрЭСтин/",
            ru:"интересный"
            },
            {
            id:11,
            eng:"bright /брАйт/",
            ru:"яркий"
            },
            {
            id:12,
            eng:"green /грин/",
            ru:"зелёный"
            },
            {
            id:13,
            eng:"busy /бИзи/",
            ru:"занятой"
            },
            {
            id:14,
            eng:"calm /кам/",
            ru:"спокойный"
            },
            {
            id:15,
            eng:"cheap /чип/",
            ru:"дешевый"
            },
            {
            id:16,
            eng:"attractive /этрЭктив/",
            ru:"привлекательный"
            },
            {
            id:17,
            eng:"overweight /ОувэУэйт/",
            ru:"полноватый"
            },
            {
            id:18,
            eng:"fashionable /фЭшэнэбл/",
            ru:"модный"
            },
            {
            id:19,
            eng:"clean /клин/",
            ru:"чистый"
            },
            {
            id:20,
            eng:"clumsy /клАмзи/",
            ru:"неуклюжий"
            },
            {
            id:21,
            eng:"disgusting /дисгАстин/",
            ru:"отвратительный"
            },
            {
            id:22,
            eng:"cold /коУлд/",
            ru:"холодный"
            },
            {
            id:23,
            eng:"cool /кул/",
            ru:"крутой"
            },
            {
            id:24,
            eng:"crazy /крЭйзи/",
            ru:"сумасшедший"
            },
            {
            id:25,
            eng:"beautiful",
            ru:"красивая"
            },
            {
            id:26,
            eng:"wonderful",
            ru:"замечательный"
            },
            {
            id:27,
            eng:"amazing /эмЭйзин/",
            ru:"удивительный"
            },
            {
            id:28,
            eng:"cute /кьЮт/",
            ru:"милый"
            },
            {
            id:29,
            eng:"sexy",
            ru:"сексуальный"
            },
            {
            id:30,
            eng:"dark",
            ru:"темный"
            },
            {
            id:31,
            eng:"expensive /экспЭнсив/",
            ru:"дорогой"
            },
            {
            id:32,
            eng:"dirty /дёти/",
            ru:"грязный"
            },
            {
            id:33,
            eng:"dusty /дАсти/",
            ru:"пыльный"
            },
            {
            id:34,
            eng:"early /ёли/",
            ru:"ранний, рано"
            },
            {
            id:35,
            eng:"easy /Изи/",
            ru:"легкий"
            },
            {
            id:36,
            eng:"fantastic",
            ru:"фантастичный"
            },
            {
            id:37,
            eng:"fancy /фЭнси/",
            ru:"изысканный"
            },
            {
            id:38,
            eng:"fast",
            ru:"быстрый"
            },
            {
            id:39,
            eng:"fat /фэт/",
            ru:"жирный"
            },
            {
            id:40,
            eng:"handsome /хЭнсам/",
            ru:"красивый (муж)"
            },
            {
            id:41,
            eng:"incredible /инкрЭдбл/",
            ru:"невероятный"
            },
            {
            id:42,
            eng:"shocking /шОкин/",
            ru:"шокирующий"
            },
            {
            id:43,
            eng:"fresh /фрЭш/",
            ru:"свежий"
            },
            {
            id:44,
            eng:"friendly /фрЭндли/",
            ru:"дружелюбный"
            },
            {
            id:45,
            eng:"funny /фАнни/",
            ru:"смешной"
            },
            {
            id:46,
            eng:"shitty /щИти/",
            ru:"дерьмовенький"
            },
            {
            id:47,
            eng:"great /грЭйт/",
            ru:"великий"
            },
            {
            id:48,
            eng:"shiny /шАйни/",
            ru:"светящийся"
            },
            {
            id:49,
            eng:"hairy /хЭйри/",
            ru:"волосатый"
            },
            {
            id:50,
            eng:"cozy /кОузи/",
            ru:"уютный"
            },
            {
            id:51,
            eng:"happy /хЭппи/",
            ru:"счастливый"
            },
            {
            id:52,
            eng:"hard /хАрд/",
            ru:"трудный"
            },
            {
            id:53,
            eng:"heavy /хЭви/",
            ru:"тяжелый"
            },
            {
            id:54,
            eng:"tall /тОл/",
            ru:"высокий"
            },
            {
            id:55,
            eng:"hot",
            ru:"горячий"
            },
            {
            id:56,
            eng:"hungry /хАнгри/",
            ru:"голодный"
            },
            {
            id:57,
            eng:"kind /кАйнд/",
            ru:"добрый"
            },
            {
            id:58,
            eng:"large /лАдж/",
            ru:"крупный"
            },
            {
            id:59,
            eng:"late /лЭйт/",
            ru:"поздний, поздно"
            },
            {
            id:60,
            eng:"lazy /лЭйзи/",
            ru:"ленивый"
            },
            {
            id:61,
            eng:"light /лАйт/",
            ru:"легкий"
            },
            {
            id:62,
            eng:"favorite /фЭйворит/",
            ru:"любимый"
            },
            {
            id:63,
            eng:"long /лОн/",
            ru:"длинный"
            },
            {
            id:64,
            eng:"loud /лАуд/",
            ru:"громкий"
            },
            {
            id:65,
            eng:"drunk /дрАнк/",
            ru:"пьяный"
            },
            {
            id:66,
            eng:"mad /мЭд/",
            ru:"безумный"
            },
            {
            id:67,
            eng:"messy /мЭси/",
            ru:"неряшливый"
            },
            {
            id:68,
            eng:"merry /мЭри/",
            ru:"веселый"
            },
            {
            id:69,
            eng:"nasty /нЭсти/",
            ru:"противный"
            },
            {
            id:70,
            eng:"naughty /нОти/",
            ru:"непослушный"
            },
            {
            id:71,
            eng:"neat /нит/",
            ru:"аккуратный"
            },
            {
            id:72,
            eng:"nervous /нЁвэс/",
            ru:"нервный"
            },
            {
            id:73,
            eng:"new /ньЮ/",
            ru:"новый"
            },
            {
            id:74,
            eng:"nice /нАйс/",
            ru:"приятный"
            },
            {
            id:75,
            eng:"noisy /нОйзи/",
            ru:"шумный"
            },
            {
            id:76,
            eng:"breathtaking /брэth тэйкин/",
            ru:"захватывающий дух"
            },
            {
            id:77,
            eng:"old /оУлд/",
            ru:"старый"
            },
            {
            id:78,
            eng:"simple /симпл/",
            ru:"простой"
            },
            {
            id:79,
            eng:"polite /полАйт/",
            ru:"вежливый"
            },
            {
            id:80,
            eng:"poor /пУэ/",
            ru:"бедный"
            },
            {
            id:81,
            eng:"pretty /прИти/",
            ru:"симпотный"
            },
            {
            id:82,
            eng:"proud /прАуд/",
            ru:"гордый"
            },
            {
            id:83,
            eng:"quiet /куАйет/",
            ru:"тихий"
            },
            {
            id:84,
            eng:"rare/рЭа/",
            ru:"редкий"
            },
            {
            id:85,
            eng:"rich /рич/",
            ru:"богатый"
            },
            {
            id:86,
            eng:"risky /рИски/",
            ru:"рискованный"
            },
            {
            id:87,
            eng:"rude /рУд/",
            ru:"грубый в общении"
            },
            {
            id:88,
            eng:"rusty /рАсти/",
            ru:"ржавый"
            },
            {
            id:89,
            eng:"sad /сЭд/",
            ru:"грустный"
            },
            {
            id:90,
            eng:"scary /скЭри/",
            ru:"пугающий"
            },
            {
            id:91,
            eng:"short /шорт/",
            ru:"короткий, низкий"
            },
            {
            id:92,
            eng:"shy /шАй/",
            ru:"застенчивый"
            },
            {
            id:93,
            eng:"silly /сИли/",
            ru:"глупый"
            },
            {
            id:94,
            eng:"stupid /стьЮпид/",
            ru:"тупо"
            },
            {
            id:95,
            eng:"sincere /синсИэ/",
            ru:"искренний"
            },
            {
            id:96,
            eng:"skinny /скИни/",
            ru:"тощий"
            },
            {
            id:97,
            eng:"sleepy /слИпи/",
            ru:"сонный"
            },
            {
            id:98,
            eng:"slim /слИм/",
            ru:"стройный"
            },
            {
            id:99,
            eng:"slow /слОу/",
            ru:"медленный"
            },
            {
            id:100,
            eng:"small /смОл/",
            ru:"маленький"
            },
            {
            id:101,
            eng:"smart /смАрт/",
            ru:"сообразительный"
            },
            {
            id:102,
            eng:"smelly /смЭли/",
            ru:"вонючий"
            },
            {
            id:103,
            eng:"soft",
            ru:"мягкий"
            },
            {
            id:104,
            eng:"weird /вИед/",
            ru:"чудной"
            },
            {
            id:105,
            eng:"strange",
            ru:"странный"
            },
            {
            id:106,
            eng:"strict /стрИкт/",
            ru:"строгий"
            },
            {
            id:107,
            eng:"strong /стрОн/",
            ru:"сильный"
            },
            {
            id:108,
            eng:"sweet",
            ru:"сладкий"
            },
            {
            id:109,
            eng:"tiny /тАйни/",
            ru:"крошечный"
            },
            {
            id:110,
            eng:"legendary /лэДЖэндэри/",
            ru:"легендарный"
            },
            {
            id:111,
            eng:"ugly /Агли/",
            ru:"уродливый"
            },
            {
            id:112,
            eng:"weak /уИк/",
            ru:"слабый"
            },
            {
            id:113,
            eng:"wealthy /уЭлTHи/",
            ru:"состоятельный"
            },
            {
            id:114,
            eng:"wet /уЭт/",
            ru:"мокрый"
            },
            {
            id:115,
            eng:"wild /уАйлд/",
            ru:"дикий"
            },
            {
            id:116,
            eng:"wise /уАйз/",
            ru:"мудрый"
            },
            {
            id:117,
            eng:"young /ян/",
            ru:"молодой"
            },
            {
            id:118,
            eng:"reliable /рилАибл/",
            ru:"надёжный"
            },
            {
            id:119,
            eng:"successful /саксЭсфул/",
            ru:"успешный"
            },
            {
            id:120,
            eng:"tricky /трИки/",
            ru:"хитрый"
            },
            {
            id:121,
            eng:"good",
            ru:"хороший"
            },
            {
            id:122,
            eng:"bad /бЭд/",
            ru:"плохой"
            },
    ],
    
    part11awc1: [
        {
            id: 1,
            eng: "arise, arose, arisen",
            ru: "возникнуть"
        },
        {
            id: 2,
            eng: "awake, awoke, awoken",
            ru: "пробудиться"
        },
        {
            id: 3,
            eng: "abide, abode, abidden",
            ru: "соблюдать"
        },
        {
            id: 4,
            eng: "break, broke, broken",
            ru: "ломать"
        },
        {
            id: 5,
            eng: "beat, beat, beaten",
            ru: "побить"
        },
        {
            id: 6,
            eng: "become, became, become",
            ru: "становиться"
        },
        {
            id: 7,
            eng: "begin, began, begun",
            ru: "начинать"
        },
        {
            id: 8,
            eng: "blow, blew, blown",
            ru: "дуть"
        },
        {
            id: 9,
            eng: "borrow, borrowed, borrowed",
            ru: "брать в долг"
        },
        {
            id: 10,
            eng: "build, built, built",
            ru: "строить"
        },
        {
            id: 11,
            eng: "burn, burnt, burnt",
            ru: "сжигать, гореть"
        },
        {
            id: 12,
            eng: "buy, bought, bought",
            ru: "покупать"
        },
        {
            id: 13,
            eng: "bring, brought, brought",
            ru: "приносить"
        },
        {
            id: 14,
            eng: "be, (was,were), been",
            ru: "быть"
        },
        {
            id: 15,
            eng: "bite, bit, bit",
            ru: "кусать"
        },
        {
            id: 16,
            eng: "come, came, come",
            ru: "приходить"
        },
        {
            id: 17,
            eng: "choose, chose, chosen",
            ru: "выбирать"
        },
        {
            id: 18,
            eng: "catch, caught, caught",
            ru: "ловить"
        },
        {
            id: 19,
            eng: "creep, crept, crept",
            ru: "ползать"
        },
        {
            id: 20,
            eng: "cost, cost, cost",
            ru: "стоить"
        },
        {
            id: 21,
            eng: "cut, cut, cut",
            ru: "резать"
        },
        {
            id: 22,
            eng: "deal, dealt, dealt",
            ru: "иметь дела"
        },
        {
            id: 23,
            eng: "dig, dug, dug",
            ru: "копать"
        },
        {
            id: 24,
            eng: "do, did, done",
            ru: "делать"
        },
        {
            id: 25,
            eng: "drive, drove, driven",
            ru: "водить"
        },
        {
            id: 26,
            eng: "draw, drew, drawn",
            ru: "рисовать"
        },
        {
            id: 27,
            eng: "drink, drank, drunk",
            ru: "пить"
        },
        {
            id: 28,
            eng: "eat, ate, eaten",
            ru: "кушать"
        },
        {
            id: 29,
            eng: "fall, fell, fallen",
            ru: "падать"
        },
        {
            id: 30,
            eng: "feed, fed, fed",
            ru: "кормить"
        },
        {
            id: 31,
            eng: "feel, felt, felt",
            ru: "чувствовать"
        },
        {
            id: 32,
            eng: "fight, fought, fought",
            ru: "сражаться"
        },
        {
            id: 33,
            eng: "find, found, found",
            ru: "находить"
        },
        {
            id: 34,
            eng: "fly, flew, flown",
            ru: "летать"
        },
        {
            id: 35,
            eng: "forbid, forbade, forbidden",
            ru: "запрещать"
        },
        {
            id: 36,
            eng: "forget, forgot, forgotten",
            ru: "забывать"
        },
        {
            id: 37,
            eng: "forgive, forgave, forgiven",
            ru: "прощать"
        },
        {
            id: 38,
            eng: "freeze, froze, frozen",
            ru: "замерзать"
        },
        {
            id: 39,
            eng: "grow, grew, grown",
            ru: "расти"
        },
        {
            id: 40,
            eng: "get, got, got",
            ru: "получать"
        },
        {
            id: 41,
            eng: "give, gave, given",
            ru: "давать"
        },
        {
            id: 42,
            eng: "go, went, gone",
            ru: "ходить"
        },
        {
            id: 43,
            eng: "have, had, had",
            ru: "иметь"
        },
        {
            id: 44,
            eng: "hear, heard, heard",
            ru: "слышать"
        },
        {
            id: 45,
            eng: "hide, hid, hidden",
            ru: "прятать"
        },
        {
            id: 46,
            eng: "hit, hit, hit",
            ru: "ударять"
        },
        {
            id: 47,
            eng: "hurt, hurt, hurt",
            ru: "причинять боль"
        },
        {
            id: 48,
            eng: "hold, held, held",
            ru: "держать"
        },
        {
            id: 49,
            eng: "keep, kept, kept",
            ru: "хранить"
        },
        {
            id: 50,
            eng: "know, knew, known",
            ru: "знать"
        },
        {
            id: 51,
            eng: "lead, led, led",
            ru: "вести, приводить"
        },
        {
            id: 52,
            eng: "learn, learnt, learnt",
            ru: "изучать"
        },
        {
            id: 53,
            eng: "leave, left, left",
            ru: "покидать"
        },
        {
            id: 54,
            eng: "lend, lent, lent",
            ru: "давать в долг"
        },
        {
            id: 55,
            eng: "let, let, let",
            ru: "позволять"
        },
        {
            id: 56,
            eng: "lose, lost, lost",
            ru: "терять"
        },
        {
            id: 57,
            eng: "tell a lie, told a lie, told a lie",
            ru: "говорить ложь"
        },
        {
            id: 58,
            eng: "lie, lay, lain",
            ru: "лежать"
        },
        {
            id: 59,
            eng: "make, made, made",
            ru: "создавать"
        },
        {
            id: 60,
            eng: "mean, meant, meant",
            ru: "иметь ввиду"
        },
        {
            id: 61,
            eng: "meet, met, met",
            ru: "встречать(ся)"
        },
        {
            id: 62,
            eng: "pay, paid, paid",
            ru: "платить"
        },
        {
            id: 63,
            eng: "put, put, put",
            ru: "класть"
        },
        {
            id: 64,
            eng: "read, read, read",
            ru: "читать"
        },
        {
            id: 65,
            eng: "ride, rode, ridden",
            ru: "ездить верхом"
        },
        {
            id: 66,
            eng: "ring, rang, rung",
            ru: "звенеть, звонить"
        },
        {
            id: 67,
            eng: "run, ran, run",
            ru: "бегать"
        },
        {
            id: 68,
            eng: "rise, rose, risen",
            ru: "подниматься"
        },
        {
            id: 69,
            eng: "say, said, said",
            ru: "сказать, произнести"
        },
        {
            id: 70,
            eng: "see, saw, seen",
            ru: "увидеть"
        },
        {
            id: 71,
            eng: "sell, sold, sold",
            ru: "продавать"
        },
        {
            id: 72,
            eng: "send, sent, sent",
            ru: "отправлять"
        },
        {
            id: 73,
            eng: "shake, shook, shaken",
            ru: "трясти"
        },
        {
            id: 74,
            eng: "shoot, shot, shot",
            ru: "стрелять"
        },
        {
            id: 75,
            eng: "shut, shut, shut",
            ru: "захлопнуть"
        },
        {
            id: 76,
            eng: "sing, sang, sung",
            ru: "петь"
        },
        {
            id: 77,
            eng: "sink, sank, sunk",
            ru: "затонуть"
        },
        {
            id: 78,
            eng: "sit, sat, sat",
            ru: "сидеть"
        },
        {
            id: 79,
            eng: "sleep, slept, slept",
            ru: "спать"
        },
        {
            id: 80,
            eng: "slide, slid, slid",
            ru: "скользить"
        },
        {
            id: 81,
            eng: "speak, spoke, spoken",
            ru: "разговаривать"
        },
        {
            id: 82,
            eng: "spend, spent, spent",
            ru: "тратить"
        },
        {
            id: 83,
            eng: "spit, spat, spat",
            ru: "плеваться"
        },
        {
            id: 84,
            eng: "stand, stood, stood",
            ru: "встать, стоять"
        },
        {
            id: 85,
            eng: "steal, stole, stolen",
            ru: "воровать"
        },
        {
            id: 86,
            eng: "stick, stuck, stuck",
            ru: "приклеить, застрять "
        },
        {
            id: 87,
            eng: "stink, stank, stunk",
            ru: "вонять"
        },
        {
            id: 88,
            eng: "strike, struck, struck",
            ru: "ударять"
        },
        {
            id: 89,
            eng: "swear, swore, sworn",
            ru: "клясться, материться "
        },
        {
            id: 90,
            eng: "sweep, swept, swept",
            ru: "подметать"
        },
        {
            id: 91,
            eng: "swim, swam, swum",
            ru: "плавать"
        },
        {
            id: 92,
            eng: "swing, swung, swung",
            ru: "качаться"
        },
        {
            id: 93,
            eng: "take, took, taken",
            ru: "брать"
        },
        {
            id: 94,
            eng: "teach, taught, taught",
            ru: "обучать"
        },
        {
            id: 95,
            eng: "tear, tore, torn",
            ru: "порвать"
        },
        {
            id: 96,
            eng: "tell, told, told",
            ru: "рассказывать"
        },
        {
            id: 97,
            eng: "think, thought, thought",
            ru: "думать"
        },
        {
            id: 98,
            eng: "throw, threw, thrown",
            ru: "бросать"
        },
        {
            id: 99,
            eng: "understand, understood, understood",
            ru: "понимать"
        },
        {
            id: 100,
            eng: "wake up, woke up, woken up",
            ru: "просыпаться"
        },
        {
            id: 101,
            eng: "wear, wore, worn",
            ru: "носить одежду"
        },
        {
            id: 102,
            eng: "write, wrote, written",
            ru: "писАть"
        },
        {
            id: 103,
            eng: "weep, wept, wept",
            ru: "хныкать"
        },
        {
            id: 104,
            eng: "win, won, won",
            ru: "выигрывать"
        },
        {
            id: 105,
            eng: "misunderstand, misunderstood, misunderstood",
            ru: "неправильно понять"
        },
        {
            id: 106,
            eng: "misspell, misspelt, misspelt",
            ru: "неправильно написать"
        },
        {
            id: 107,
            eng: "mistake, mistook, mistaken",
            ru: "ошибаться"
        },
        {
            id: 108,
            eng: "mishear, misheard, misheard",
            ru: "неправильно услышать"
        },
        {
            id: 109,
            eng: "oversleep, overslept, overslept",
            ru: "проспать"
        },
        {
            id: 110,
            eng: "overeat, overate, overeaten",
            ru: "переесть "
        },
        {
            id: 111,
            eng: "overpay, overpaid, overpaid",
            ru: "переплатить"
        },
    ],
    part10awb2: [
        {
            id: 4,
            eng: "break, broke, broken",
            ru: "/брЭйк/ ломать"
        },
        {
            id: 5,
            eng: "beat, beat, beaten",
            ru: "/бит/ побить"
        },
        {
            id: 6,
            eng: "become, became, become",
            ru: "/бекАм/ становиться"
        },
        {
            id: 7,
            eng: "begin, began, begun",
            ru: "/бегИн/ начинать"
        },
        {
            id: 8,
            eng: "blow, blew, blown",
            ru: "/блОу/ дуть"
        },
        {
            id: 9,
            eng: "borrow, borrowed, borrowed",
            ru: "/бОроу/ брать в долг"
        },
        {
            id: 10,
            eng: "build, built, built",
            ru: "/билд/ строить"
        },
        {
            id: 11,
            eng: "burn, burnt, burnt",
            ru: "/бЁрн/ сжигать, гореть"
        },
        {
            id: 12,
            eng: "buy, bought, bought",
            ru: "/бАй/ покупать"
        },
        {
            id: 13,
            eng: "bring, brought, brought",
            ru: "/брин/ приносить"
        },
        {
            id: 14,
            eng: "be (am,is,are), (was,were), been",
            ru: "/эм,из,а/ быть"
        },
        {
            id: 15,
            eng: "bite, bit, bit",
            ru: "/бАйт/ кусать"
        },
        {
            id: 16,
            eng: "come, came, come",
            ru: "/кАм/ приходить"
        },
        {
            id: 17,
            eng: "choose, chose, chosen",
            ru: "/чУз/ выбирать"
        },
        {
            id: 18,
            eng: "catch, caught, caught",
            ru: "/кЭч/ ловить"
        },
        {
            id: 19,
            eng: "creep, crept, crept",
            ru: "/крИп/ ползать"
        },
        {
            id: 20,
            eng: "cost, cost, cost",
            ru: "/кост/ стоить"
        },
        {
            id: 21,
            eng: "cut, cut, cut",
            ru: "/кАт/ резать"
        },
        {
            id: 22,
            eng: "deal, dealt, dealt",
            ru: "/дИл/ иметь дела"
        },
        {
            id: 23,
            eng: "dig, dug, dug",
            ru: "/диГ/ копать"
        },
        {
            id: 24,
            eng: "do, did, done",
            ru: "/ду/ делать"
        },
        {
            id: 25,
            eng: "drive, drove, driven",
            ru: "/дрАйв/ водить"
        },
        {
            id: 26,
            eng: "draw, drew, drawn",
            ru: "/дрО/ рисовать"
        },
        {
            id: 27,
            eng: "drink, drank, drunk",
            ru: "/дринк/ пить"
        },
        {
            id: 28,
            eng: "eat, ate, eaten",
            ru: "/ит/ кушать"
        },
        {
            id: 29,
            eng: "fall, fell, fallen",
            ru: "/фол/ падать"
        },
        {
            id: 30,
            eng: "feed, fed, fed",
            ru: "/фиД/ кормить"
        },
        {
            id: 31,
            eng: "feel, felt, felt",
            ru: "/фил/ чувствовать"
        },
        {
            id: 32,
            eng: "fight, fought, fought",
            ru: "/фАйт/ сражаться"
        },
        {
            id: 33,
            eng: "find, found, found",
            ru: "/фАйнд/ находить"
        },
        {
            id: 34,
            eng: "fly, flew, flown",
            ru: "/флАй/ летать"
        },
        {
            id: 35,
            eng: "forbid, forbade, forbidden",
            ru: "/фобИд/ запрещать"
        },
        {
            id: 36,
            eng: "forget, forgot, forgotten",
            ru: "/фогОт/ забывать"
        },
        {
            id: 37,
            eng: "forgive, forgave, forgiven",
            ru: "/фогИв/ прощать"
        },
        {
            id: 38,
            eng: "freeze, froze, frozen",
            ru: "/фриз/ замерзать"
        },
        {
            id: 39,
            eng: "grow, grew, grown",
            ru: "/грОу/ расти"
        },
        {
            id: 40,
            eng: "get, got, got",
            ru: "/гет/ получать"
        },
        {
            id: 41,
            eng: "give, gave, given",
            ru: "/гив/ давать"
        },
        {
            id: 42,
            eng: "go, went, gone",
            ru: "/гОУ/ ходить"
        },
        {
            id: 43,
            eng: "have, had, had",
            ru: "/хэв/ иметь"
        },
        {
            id: 44,
            eng: "hear, heard, heard",
            ru: "/хИэ/ слышать"
        },
        {
            id: 45,
            eng: "hide, hid, hidden",
            ru: "/хайд/ прятать"
        },
        {
            id: 46,
            eng: "hit, hit, hit",
            ru: "/хит/ ударять"
        },
        {
            id: 47,
            eng: "hurt, hurt, hurt",
            ru: "/хЁрт/ причинять боль"
        },
        {
            id: 48,
            eng: "hold, held, held",
            ru: "/хОулд/ держать"
        },
        {
            id: 49,
            eng: "keep, kept, kept",
            ru: "/кип/ хранить"
        },
        {
            id: 50,
            eng: "know, knew, known",
            ru: "/нОу/ знать"
        },
        {
            id: 51,
            eng: "lead, led, led",
            ru: "/лид/ вести, приводить"
        },
        {
            id: 52,
            eng: "learn, learnt, learnt",
            ru: "/лЁрн/ изучать"
        },
        {
            id: 53,
            eng: "leave, left, left",
            ru: "/лив/ покидать"
        },
        {
            id: 54,
            eng: "lend, lent, lent",
            ru: "/лЭнд/ давать в долг"
        },
        {
            id: 55,
            eng: "let, let, let",
            ru: "/лЭт/ позволять"
        },
        {
            id: 56,
            eng: "lose, lost, lost",
            ru: "/лУз/ терять"
        },
        {
            id: 57,
            eng: "tell  a  lie , told  a  lie , told  a  lie ",
            ru: "/тэл э лай/ говорить ложь"
        },
        {
            id: 58,
            eng: "lie, lay, lain",
            ru: "/лай/ лежать"
        },
        {
            id: 59,
            eng: "make, made, made",
            ru: "/мЭйк/ создавать"
        },
        {
            id: 60,
            eng: "mean, meant, meant",
            ru: "/мИн/ иметь ввиду"
        },
        {
            id: 61,
            eng: "meet, met, met",
            ru: "/мит/ встречать(ся)"
        },
        {
            id: 62,
            eng: "pay, paid, paid",
            ru: "/пЭй/ платить"
        },
        {
            id: 63,
            eng: "put, put, put",
            ru: "/пУт/ класть"
        },
        {
            id: 64,
            eng: "read, read, read",
            ru: "/рИд/ читать"
        },
        {
            id: 65,
            eng: "ride, rode, ridden",
            ru: "/рАйд/ ездить верхом"
        },
        {
            id: 66,
            eng: "ring, rang, rung",
            ru: "/рИн/ звенеть, звонить"
        },
        {
            id: 67,
            eng: "run, ran, run",
            ru: "/рАн/ бегать"
        },
        {
            id: 68,
            eng: "rise, rose, risen",
            ru: "/рАйз/ подниматься"
        },
        {
            id: 69,
            eng: "say, said, said",
            ru: "/сЭй/ сказать, произнести"
        },
        {
            id: 70,
            eng: "see, saw, seen",
            ru: "/си/ увидеть"
        },
        {
            id: 71,
            eng: "sell, sold, sold",
            ru: "/сЭл/ продавать"
        },
        {
            id: 72,
            eng: "send, sent, sent",
            ru: "/сэнД/ отправлять"
        },
        {
            id: 73,
            eng: "shake, shook, shaken",
            ru: "/шЭйк/ трясти"
        },
        {
            id: 74,
            eng: "shoot, shot, shot",
            ru: "/шУт/ стрелять"
        },
        {
            id: 75,
            eng: "shut, shut, shut",
            ru: "/щАт/ захлопнуть"
        },
        {
            id: 76,
            eng: "sing, sang, sung",
            ru: "/сИн/ петь"
        },
        {
            id: 77,
            eng: "sink, sank, sunk",
            ru: "/синк/ затонуть"
        },
        {
            id: 78,
            eng: "sit, sat, sat",
            ru: "/сит/ сидеть"
        },
        {
            id: 79,
            eng: "sleep, slept, slept",
            ru: "/слИп/ спать"
        },
        {
            id: 80,
            eng: "slide, slid, slid",
            ru: "/слайд/ скользить"
        },
        {
            id: 81,
            eng: "speak, spoke, spoken",
            ru: "/спИк/ разговаривать"
        },
        {
            id: 82,
            eng: "spend, spent, spent",
            ru: "/спЭнд/ тратить"
        },
        {
            id: 83,
            eng: "spit, spat, spat",
            ru: "/спИт/ плеваться"
        },
        {
            id: 84,
            eng: "stand, stood, stood",
            ru: "/стЭнд/ встать, стоять"
        },
        {
            id: 85,
            eng: "steal, stole, stolen",
            ru: "/стИл/ воровать"
        },
        {
            id: 86,
            eng: "stick, stuck, stuck",
            ru: "/стик/ приклеить, застрять "
        },
        {
            id: 87,
            eng: "stink, stank, stunk",
            ru: "/стинк/ вонять"
        },
        {
            id: 88,
            eng: "strike, struck, struck",
            ru: "/стрАйк/ ударять"
        },
        {
            id: 89,
            eng: "swear, swore, sworn",
            ru: "/суЭа/ клясться, материться "
        },
        {
            id: 90,
            eng: "sweep, swept, swept",
            ru: "/свип/ подметать"
        },
        {
            id: 91,
            eng: "swim, swam, swum",
            ru: "/свим/ плавать"
        },
        {
            id: 92,
            eng: "swing, swung, swung",
            ru: "/свИн/ качаться"
        },
        {
            id: 93,
            eng: "take, took, taken",
            ru: "/тЭйк/ брать"
        },
        {
            id: 94,
            eng: "teach, taught, taught",
            ru: "/тИч/ обучать"
        },
        {
            id: 95,
            eng: "tear, tore, torn",
            ru: "/тЭа/ порвать"
        },
        {
            id: 96,
            eng: "tell, told, told",
            ru: "/тЭл/ рассказывать"
        },
        {
            id: 97,
            eng: "think, thought, thought",
            ru: "/thЫНК/ думать"
        },
        {
            id: 98,
            eng: "throw, threw, thrown",
            ru: "/thрОу/ бросать"
        },
        {
            id: 99,
            eng: "understand, understood, understood",
            ru: "/андэстЭнд/ понимать"
        },
        {
            id: 100,
            eng: "wake up, woke up, woken up",
            ru: "/уЭйк ап/ просыпаться"
        },
        {
            id: 101,
            eng: "wear, wore, worn",
            ru: "/уЭа/ носить одежду"
        },
        {
            id: 102,
            eng: "write, wrote, written",
            ru: "/рАйт/ писАть"
        },
        {
            id: 103,
            eng: "weep, wept, wept",
            ru: "/уИп/ хныкать"
        },
        {
            id: 104,
            eng: "win, won, won",
            ru: "/уИн/ выигрывать"
        },
        {
            id: 105,
            eng: "misunderstand, misunderstood, misunderstood",
            ru: "/мисандэстЭнд/ неправильно понять"
        },
        {
            id: 106,
            eng: "misspell, misspelt, misspelt",
            ru: "/миспЭл/ неправильно написать"
        },
        {
            id: 107,
            eng: "mistake, mistook, mistaken",
            ru: "/мистЭйк/ ошибаться"
        },
        {
            id: 108,
            eng: "mishear, misheard, misheard",
            ru: "/мисхИа/ неправильно услышать"
        },
        {
            id: 109,
            eng: "oversleep, overslept, overslept",
            ru: "/оУвэслип/ проспать"
        },
        {
            id: 110,
            eng: "overeat, overate, overeaten",
            ru: "/оУвэИт/ переесть "
        },
        {
            id: 111,
            eng: "overpay, overpaid, overpaid",
            ru: "/оУвэпЭй/ переплатить"
        },
    ],
    part9tw: [

        {
            id: 93,
            eng: "take, took, taken",
            ru: "/тЭйк/ брать"
        },
        {
            id: 94,
            eng: "teach, taught, taught",
            ru: "/тИч/ обучать"
        },
        {
            id: 95,
            eng: "tear, tore, torn",
            ru: "/тЭа/ порвать"
        },
        {
            id: 96,
            eng: "tell, told, told",
            ru: "/тЭл/ рассказывать"
        },
        {
            id: 97,
            eng: "think, thought, thought",
            ru: "/thЫНК/ думать"
        },
        {
            id: 98,
            eng: "throw, threw, thrown",
            ru: "/thрОу/ бросать"
        },
        {
            id: 99,
            eng: "understand, understood, understood",
            ru: "/андэстЭнд/ понимать"
        },
        {
            id: 100,
            eng: "wake up, woke up, woken up",
            ru: "/уЭйк ап/ просыпаться"
        },
        {
            id: 101,
            eng: "wear, wore, worn",
            ru: "/уЭа/ носить одежду"
        },
        {
            id: 102,
            eng: "write, wrote, written",
            ru: "/рАйт/ писАть"
        },
        {
            id: 103,
            eng: "weep, wept, wept",
            ru: "/уИп/ хныкать"
        },
        {
            id: 104,
            eng: "win, won, won",
            ru: "/уИн/ выигрывать"
        },

    ],
    part8ss: [

        {
            id: 69,
            eng: "say, said, said",
            ru: "/сЭй/ сказать, произнести"
        },
        {
            id: 70,
            eng: "see, saw, seen",
            ru: "/си/ увидеть"
        },
        {
            id: 71,
            eng: "sell, sold, sold",
            ru: "/сЭл/ продавать"
        },
        {
            id: 72,
            eng: "send, sent, sent",
            ru: "/сэнД/ отправлять"
        },
        {
            id: 73,
            eng: "shake, shook, shaken",
            ru: "/шЭйк/ трясти"
        },
        {
            id: 74,
            eng: "shoot, shot, shot",
            ru: "/шУт/ стрелять"
        },
        {
            id: 75,
            eng: "shut, shut, shut",
            ru: "/щАт/ захлопнуть"
        },
        {
            id: 76,
            eng: "sing, sang, sung",
            ru: "/сИн/ петь"
        },
        {
            id: 77,
            eng: "sink, sank, sunk",
            ru: "/синк/ затонуть"
        },
        {
            id: 78,
            eng: "sit, sat, sat",
            ru: "/сит/ сидеть"
        },
        {
            id: 79,
            eng: "sleep, slept, slept",
            ru: "/слИп/ спать"
        },
        {
            id: 80,
            eng: "slide, slid, slid",
            ru: "/слайд/ скользить"
        },
        {
            id: 81,
            eng: "speak, spoke, spoken",
            ru: "/спИк/ разговаривать"
        },
        {
            id: 82,
            eng: "spend, spent, spent",
            ru: "/спЭнд/ тратить"
        },
        {
            id: 83,
            eng: "spit, spat, spat",
            ru: "/спИт/ плеваться"
        },
        {
            id: 84,
            eng: "stand, stood, stood",
            ru: "/стЭнд/ встать, стоять"
        },
        {
            id: 85,
            eng: "steal, stole, stolen",
            ru: "/стИл/ воровать"
        },
        {
            id: 86,
            eng: "stick, stuck, stuck",
            ru: "/стик/ приклеить, застрять "
        },
        {
            id: 87,
            eng: "stink, stank, stunk",
            ru: "/стинк/ вонять"
        },
        {
            id: 88,
            eng: "strike, struck, struck",
            ru: "/стрАйк/ ударять"
        },
        {
            id: 89,
            eng: "swear, swore, sworn",
            ru: "/суЭа/ клясться, материться "
        },
        {
            id: 90,
            eng: "sweep, swept, swept",
            ru: "/свип/ подметать"
        },
        {
            id: 91,
            eng: "swim, swam, swum",
            ru: "/свим/ плавать"
        },
        {
            id: 92,
            eng: "swing, swung, swung",
            ru: "/свИн/ качаться"
        },

    ],
    part7hr: [

        {
            id: 43,
            eng: "have, had, had",
            ru: "/хэв/ иметь"
        },
        {
            id: 44,
            eng: "hear, heard, heard",
            ru: "/хИэ/ слышать"
        },
        {
            id: 45,
            eng: "hide, hid, hidden",
            ru: "/хайд/ прятать"
        },
        {
            id: 46,
            eng: "hit, hit, hit",
            ru: "/хит/ ударять"
        },
        {
            id: 47,
            eng: "hurt, hurt, hurt",
            ru: "/хЁрт/ причинять боль"
        },
        {
            id: 48,
            eng: "hold, held, held",
            ru: "/хОулд/ держать"
        },
        {
            id: 49,
            eng: "keep, kept, kept",
            ru: "/кип/ хранить"
        },
        {
            id: 50,
            eng: "know, knew, known",
            ru: "/нОу/ знать"
        },
        {
            id: 51,
            eng: "lead, led, led",
            ru: "/лид/ вести, приводить"
        },
        {
            id: 52,
            eng: "learn, learnt, learnt",
            ru: "/лЁрн/ изучать"
        },
        {
            id: 53,
            eng: "leave, left, left",
            ru: "/лив/ покидать"
        },
        {
            id: 54,
            eng: "lend, lent, lent",
            ru: "/лЭнд/ давать в долг"
        },
        {
            id: 55,
            eng: "let, let, let",
            ru: "/лЭт/ позволять"
        },
        {
            id: 56,
            eng: "lose, lost, lost",
            ru: "/лУз/ терять"
        },
        {
            id: 57,
            eng: "tell  a  lie , told  a  lie , told  a  lie ",
            ru: "/тэл э лай/ говорить ложь"
        },
        {
            id: 58,
            eng: "lie, lay, lain",
            ru: "/лай/ лежать"
        },
        {
            id: 59,
            eng: "make, made, made",
            ru: "/мЭйк/ создавать"
        },
        {
            id: 60,
            eng: "mean, meant, meant",
            ru: "/мИн/ иметь ввиду"
        },
        {
            id: 61,
            eng: "meet, met, met",
            ru: "/мит/ встречать(ся)"
        },
        {
            id: 62,
            eng: "pay, paid, paid",
            ru: "/пЭй/ платить"
        },
        {
            id: 63,
            eng: "put, put, put",
            ru: "/пУт/ класть"
        },
        {
            id: 64,
            eng: "read, read, read",
            ru: "/рИд/ читать"
        },
        {
            id: 65,
            eng: "ride, rode, ridden",
            ru: "/рАйд/ ездить верхом"
        },
        {
            id: 66,
            eng: "ring, rang, rung",
            ru: "/рИн/ звенеть, звонить"
        },
        {
            id: 67,
            eng: "run, ran, run",
            ru: "/рАн/ бегать"
        },
        {
            id: 68,
            eng: "rise, rose, risen",
            ru: "/рАйз/ подниматься"
        },

    ],
    part6lp: [

        {
            id: 51,
            eng: "lead, led, led",
            ru: "/лид/ вести, приводить"
        },
        {
            id: 52,
            eng: "learn, learnt, learnt",
            ru: "/лЁрн/ изучать"
        },
        {
            id: 53,
            eng: "leave, left, left",
            ru: "/лив/ покидать"
        },
        {
            id: 54,
            eng: "lend, lent, lent",
            ru: "/лЭнд/ давать в долг"
        },
        {
            id: 55,
            eng: "let, let, let",
            ru: "/лЭт/ позволять"
        },
        {
            id: 56,
            eng: "lose, lost, lost",
            ru: "/лУз/ терять"
        },
        {
            id: 57,
            eng: "tell  a  lie , told  a  lie , told  a  lie ",
            ru: "/тэл э лай/ говорить ложь"
        },
        {
            id: 58,
            eng: "lie, lay, lain",
            ru: "/лай/ лежать"
        },
        {
            id: 59,
            eng: "make, made, made",
            ru: "/мЭйк/ создавать"
        },
        {
            id: 60,
            eng: "mean, meant, meant",
            ru: "/мИн/ иметь ввиду"
        },
        {
            id: 61,
            eng: "meet, met, met",
            ru: "/мит/ встречать(ся)"
        },
        {
            id: 62,
            eng: "pay, paid, paid",
            ru: "/пЭй/ платить"
        },
        {
            id: 63,
            eng: "put, put, put",
            ru: "/пУт/ класть"
        },

    ],
    part5hl: [

        {
            id: 43,
            eng: "have, had, had",
            ru: "/хэв/ иметь"
        },
        {
            id: 44,
            eng: "hear, heard, heard",
            ru: "/хИэ/ слышать"
        },
        {
            id: 45,
            eng: "hide, hid, hidden",
            ru: "/хайд/ прятать"
        },
        {
            id: 46,
            eng: "hit, hit, hit",
            ru: "/хит/ ударять"
        },
        {
            id: 47,
            eng: "hurt, hurt, hurt",
            ru: "/хЁрт/ причинять боль"
        },
        {
            id: 48,
            eng: "hold, held, held",
            ru: "/хОулд/ держать"
        },
        {
            id: 49,
            eng: "keep, kept, kept",
            ru: "/кип/ хранить"
        },
        {
            id: 50,
            eng: "know, knew, known",
            ru: "/нОу/ знать"
        },
        {
            id: 51,
            eng: "lead, led, led",
            ru: "/лид/ вести, приводить"
        },
        {
            id: 52,
            eng: "learn, learnt, learnt",
            ru: "/лЁрн/ изучать"
        },
        {
            id: 53,
            eng: "leave, left, left",
            ru: "/лив/ покидать"
        },
        {
            id: 54,
            eng: "lend, lent, lent",
            ru: "/лЭнд/ давать в долг"
        },
        {
            id: 55,
            eng: "let, let, let",
            ru: "/лЭт/ позволять"
        },
        {
            id: 56,
            eng: "lose, lost, lost",
            ru: "/лУз/ терять"
        },
        {
            id: 57,
            eng: "tell  a  lie , told  a  lie , told  a  lie ",
            ru: "/тэл э лай/ говорить ложь"
        },
        {
            id: 58,
            eng: "lie, lay, lain",
            ru: "/лай/ лежать"
        },
    ],
    part4bg: [
        {
            id: 4,
            eng: "break, broke, broken",
            ru: "/брЭйк/ ломать"
        },
        {
            id: 5,
            eng: "beat, beat, beaten",
            ru: "/бит/ побить"
        },
        {
            id: 6,
            eng: "become, became, become",
            ru: "/бекАм/ становиться"
        },
        {
            id: 7,
            eng: "begin, began, begun",
            ru: "/бегИн/ начинать"
        },
        {
            id: 8,
            eng: "blow, blew, blown",
            ru: "/блОу/ дуть"
        },
        {
            id: 9,
            eng: "borrow, borrowed, borrowed",
            ru: "/бОроу/ брать в долг"
        },
        {
            id: 10,
            eng: "build, built, built",
            ru: "/билд/ строить"
        },
        {
            id: 11,
            eng: "burn, burnt, burnt",
            ru: "/бЁрн/ сжигать, гореть"
        },
        {
            id: 12,
            eng: "buy, bought, bought",
            ru: "/бАй/ покупать"
        },
        {
            id: 13,
            eng: "bring, brought, brought",
            ru: "/брин/ приносить"
        },
        {
            id: 14,
            eng: "be (am,is,are), (was,were), been",
            ru: "/эм,из,а/ быть"
        },
        {
            id: 15,
            eng: "bite, bit, bit",
            ru: "/бАйт/ кусать"
        },
        {
            id: 16,
            eng: "come, came, come",
            ru: "/кАм/ приходить"
        },
        {
            id: 17,
            eng: "choose, chose, chosen",
            ru: "/чУз/ выбирать"
        },
        {
            id: 18,
            eng: "catch, caught, caught",
            ru: "/кЭч/ ловить"
        },
        {
            id: 19,
            eng: "creep, crept, crept",
            ru: "/крИп/ ползать"
        },
        {
            id: 20,
            eng: "cost, cost, cost",
            ru: "/кост/ стоить"
        },
        {
            id: 21,
            eng: "cut, cut, cut",
            ru: "/кАт/ резать"
        },
        {
            id: 22,
            eng: "deal, dealt, dealt",
            ru: "/дИл/ иметь дела"
        },
        {
            id: 23,
            eng: "dig, dug, dug",
            ru: "/диГ/ копать"
        },
        {
            id: 24,
            eng: "do, did, done",
            ru: "/ду/ делать"
        },
        {
            id: 25,
            eng: "drive, drove, driven",
            ru: "/дрАйв/ водить"
        },
        {
            id: 26,
            eng: "draw, drew, drawn",
            ru: "/дрО/ рисовать"
        },
        {
            id: 27,
            eng: "drink, drank, drunk",
            ru: "/дринк/ пить"
        },
        {
            id: 28,
            eng: "eat, ate, eaten",
            ru: "/ит/ кушать"
        },
        {
            id: 29,
            eng: "fall, fell, fallen",
            ru: "/фол/ падать"
        },
        {
            id: 30,
            eng: "feed, fed, fed",
            ru: "/фиД/ кормить"
        },
        {
            id: 31,
            eng: "feel, felt, felt",
            ru: "/фил/ чувствовать"
        },
        {
            id: 32,
            eng: "fight, fought, fought",
            ru: "/фАйт/ сражаться"
        },
        {
            id: 33,
            eng: "find, found, found",
            ru: "/фАйнд/ находить"
        },
        {
            id: 34,
            eng: "fly, flew, flown",
            ru: "/флАй/ летать"
        },
        {
            id: 35,
            eng: "forbid, forbade, forbidden",
            ru: "/фобИд/ запрещать"
        },
        {
            id: 36,
            eng: "forget, forgot, forgotten",
            ru: "/фогОт/ забывать"
        },
        {
            id: 37,
            eng: "forgive, forgave, forgiven",
            ru: "/фогИв/ прощать"
        },
        {
            id: 38,
            eng: "freeze, froze, frozen",
            ru: "/фриз/ замерзать"
        },
        {
            id: 39,
            eng: "grow, grew, grown",
            ru: "/грОу/ расти"
        },
        {
            id: 40,
            eng: "get, got, got",
            ru: "/гет/ получать"
        },
        {
            id: 41,
            eng: "give, gave, given",
            ru: "/гив/ давать"
        },
        {
            id: 42,
            eng: "go, went, gone",
            ru: "/гОУ/ ходить"
        },

    ],
    part3fg: [

        {
            id: 28,
            eng: "eat, ate, eaten",
            ru: "/ит/ кушать"
        },
        {
            id: 29,
            eng: "fall, fell, fallen",
            ru: "/фол/ падать"
        },
        {
            id: 30,
            eng: "feed, fed, fed",
            ru: "/фиД/ кормить"
        },
        {
            id: 31,
            eng: "feel, felt, felt",
            ru: "/фил/ чувствовать"
        },
        {
            id: 32,
            eng: "fight, fought, fought",
            ru: "/фАйт/ сражаться"
        },
        {
            id: 33,
            eng: "find, found, found",
            ru: "/фАйнд/ находить"
        },
        {
            id: 34,
            eng: "fly, flew, flown",
            ru: "/флАй/ летать"
        },
        {
            id: 35,
            eng: "forbid, forbade, forbidden",
            ru: "/фобИд/ запрещать"
        },
        {
            id: 36,
            eng: "forget, forgot, forgotten",
            ru: "/фогОт/ забывать"
        },
        {
            id: 37,
            eng: "forgive, forgave, forgiven",
            ru: "/фогИв/ прощать"
        },
        {
            id: 38,
            eng: "freeze, froze, frozen",
            ru: "/фриз/ замерзать"
        },
        {
            id: 39,
            eng: "grow, grew, grown",
            ru: "/грОу/ расти"
        },
        {
            id: 40,
            eng: "get, got, got",
            ru: "/гет/ получать"
        },
        {
            id: 41,
            eng: "give, gave, given",
            ru: "/гив/ давать"
        },
        {
            id: 42,
            eng: "go, went, gone",
            ru: "/гОУ/ ходить"
        },

    ],
    part2cd: [

        {
            id: 16,
            eng: "come, came, come",
            ru: "/кАм/ приходить"
        },
        {
            id: 17,
            eng: "choose, chose, chosen",
            ru: "/чУз/ выбирать"
        },
        {
            id: 18,
            eng: "catch, caught, caught",
            ru: "/кЭч/ ловить"
        },
        {
            id: 19,
            eng: "creep, crept, crept",
            ru: "/крИп/ ползать"
        },
        {
            id: 20,
            eng: "cost, cost, cost",
            ru: "/кост/ стоить"
        },
        {
            id: 21,
            eng: "cut, cut, cut",
            ru: "/кАт/ резать"
        },
        {
            id: 22,
            eng: "deal, dealt, dealt",
            ru: "/дИл/ иметь дела"
        },
        {
            id: 23,
            eng: "dig, dug, dug",
            ru: "/диГ/ копать"
        },
        {
            id: 24,
            eng: "do, did, done",
            ru: "/ду/ делать"
        },
        {
            id: 25,
            eng: "drive, drove, driven",
            ru: "/дрАйв/ водить"
        },
        {
            id: 26,
            eng: "draw, drew, drawn",
            ru: "/дрО/ рисовать"
        },
        {
            id: 27,
            eng: "drink, drank, drunk",
            ru: "/дринк/ пить"
        },
        {
            id: 28,
            eng: "eat, ate, eaten",
            ru: "/ит/ кушать"
        }
    ],
    part1bc: [
        {
            id: 4,
            eng: "break, broke, broken",
            ru: "/брЭйк/ ломать"
        },
        {
            id: 5,
            eng: "beat, beat, beaten",
            ru: "/бит/ побить"
        },
        {
            id: 6,
            eng: "become, became, become",
            ru: "/бекАм/ становиться"
        },
        {
            id: 7,
            eng: "begin, began, begun",
            ru: "/бегИн/ начинать"
        },
        {
            id: 8,
            eng: "blow, blew, blown",
            ru: "/блОу/ дуть"
        },
        {
            id: 9,
            eng: "borrow, borrowed, borrowed",
            ru: "/бОроу/ брать в долг"
        },
        {
            id: 10,
            eng: "build, built, built",
            ru: "/билд/ строить"
        },
        {
            id: 11,
            eng: "burn, burnt, burnt",
            ru: "/бЁрн/ сжигать, гореть"
        },
        {
            id: 12,
            eng: "buy, bought, bought",
            ru: "/бАй/ покупать"
        },
        {
            id: 13,
            eng: "bring, brought, brought",
            ru: "/брин/ приносить"
        },
        {
            id: 14,
            eng: "be (am,is,are), (was,were), been",
            ru: "/эм,из,а/ быть"
        },
        {
            id: 15,
            eng: "bite, bit, bit",
            ru: "/бАйт/ кусать"
        },
        {
            id: 16,
            eng: "come, came, come",
            ru: "/кАм/ приходить"
        },
        {
            id: 17,
            eng: "choose, chose, chosen",
            ru: "/чУз/ выбирать"
        },
        {
            id: 18,
            eng: "catch, caught, caught",
            ru: "/кЭч/ ловить"
        },
        {
            id: 19,
            eng: "creep, crept, crept",
            ru: "/крИп/ ползать"
        },
        {
            id: 20,
            eng: "cost, cost, cost",
            ru: "/кост/ стоить"
        },
        {
            id: 21,
            eng: "cut, cut, cut",
            ru: "/кАт/ резать"
        },

    ],
    understand: [
        {
            id: 4,
            eng: "break , broke , broken",
            ru: "ломать"
        },
        {
            id: 5,
            eng: "beat , beat , beaten",
            ru: "бить, побить в соревновании"
        },
        {
            id: 6,
            eng: "become , became , become",
            ru: "становиться"
        },
        {
            id: 7,
            eng: "begin , began , begun",
            ru: "начинать"
        },
        {
            id: 8,
            eng: "blow , blew , blown",
            ru: "дуть"
        },
        {
            id: 9,
            eng: "borrow , borrowed , borrowed",
            ru: "брать в долг, занимать"
        },
        {
            id: 10,
            eng: "build , built , built",
            ru: "строить"
        },
        {
            id: 11,
            eng: "burn , burnt , burnt",
            ru: "сжигать, гореть"
        },
        {
            id: 12,
            eng: "buy , bought , bought",
            ru: "покупать"
        },
        {
            id: 13,
            eng: "bring , brought , brought",
            ru: "приносить"
        },
        {
            id: 14,
            eng: "be , was/were , been",
            ru: "быть"
        },
        {
            id: 15,
            eng: "bite , bit , bit",
            ru: "кусать"
        },
        {
            id: 16,
            eng: "come , came , come",
            ru: "приходить"
        },
        {
            id: 17,
            eng: "choose , chose , chosen",
            ru: "выбирать"
        },
        {
            id: 18,
            eng: "catch , caught , caught",
            ru: "ловить"
        },
        {
            id: 19,
            eng: "creep , crept , crept",
            ru: "ползать"
        },
        {
            id: 20,
            eng: "cost , cost , cost",
            ru: "стоить"
        },
        {
            id: 21,
            eng: "cut , cut , cut",
            ru: "резать"
        },
        {
            id: 22,
            eng: "deal , dealt , dealt",
            ru: "иметь дела"
        },
        {
            id: 23,
            eng: "dig , dug , dug",
            ru: "копать"
        },
        {
            id: 24,
            eng: "do , did , done",
            ru: "выполнять, делать, заниматься"
        },
        {
            id: 25,
            eng: "drive , drove , driven",
            ru: "водить"
        },
        {
            id: 26,
            eng: "draw , drew , drawn",
            ru: "рисовать"
        },
        {
            id: 27,
            eng: "drink , drank , drunk",
            ru: "пить"
        },
        {
            id: 28,
            eng: "eat , ate , eaten",
            ru: "кушать"
        },
        {
            id: 29,
            eng: "fall , fell , fallen",
            ru: "падать"
        },
        {
            id: 30,
            eng: "feed , fed , fed",
            ru: "кормить"
        },
        {
            id: 31,
            eng: "feel , felt , felt",
            ru: "чувствовать"
        },
        {
            id: 32,
            eng: "fight , fought , fought",
            ru: "сражаться"
        },
        {
            id: 33,
            eng: "find , found , found",
            ru: "находить"
        },
        {
            id: 34,
            eng: "fly , flew , flown",
            ru: "летать"
        },
        {
            id: 35,
            eng: "forbid , forbade , forbidden",
            ru: "запрещать"
        },
        {
            id: 36,
            eng: "forget , forgot , forgotten",
            ru: "забывать"
        },
        {
            id: 37,
            eng: "forgive , forgave , forgiven",
            ru: "прощать"
        },
        {
            id: 38,
            eng: "freeze , froze , frozen",
            ru: "замерзать"
        },
        {
            id: 39,
            eng: "grow , grew , grown",
            ru: "расти"
        },
        {
            id: 40,
            eng: "get , got , got",
            ru: "получать"
        },
        {
            id: 41,
            eng: "give , gave , given",
            ru: "давать"
        },
        {
            id: 42,
            eng: "go , went , gone",
            ru: "ходить"
        },
        {
            id: 43,
            eng: "have , had , had",
            ru: "иметь"
        },
        {
            id: 44,
            eng: "hear , heard , heard",
            ru: "слышать"
        },
        {
            id: 45,
            eng: "hide , hid , hidden",
            ru: "прятать"
        },
        {
            id: 46,
            eng: "hit , hit , hit",
            ru: "ударять"
        },
        {
            id: 47,
            eng: "hurt , hurt , hurt",
            ru: "причинять боль"
        },
        {
            id: 48,
            eng: "hold , held , held",
            ru: "держать"
        },
        {
            id: 49,
            eng: "keep , kept , kept",
            ru: "хранить"
        },
        {
            id: 50,
            eng: "know , knew , known",
            ru: "знать"
        },
        {
            id: 51,
            eng: "lead , led , led",
            ru: "вести, приводить"
        },
        {
            id: 52,
            eng: "learn , learnt , learnt",
            ru: "изучать"
        },
        {
            id: 53,
            eng: "leave , left , left",
            ru: "покидать"
        },
        {
            id: 54,
            eng: "lend , lent , lent",
            ru: "давать в долг"
        },
        {
            id: 55,
            eng: "let , let , let",
            ru: "позволять"
        },
        {
            id: 56,
            eng: "lose , lost , lost",
            ru: "терять"
        },
        {
            id: 57,
            eng: "tell a lie, told_a_lie, told_a_lie",
            ru: "/тэл э лай/ говорить ложь"
        },
        {
            id: 58,
            eng: "lie , lay , lain",
            ru: "лежать"
        },
        {
            id: 59,
            eng: "make , made , made",
            ru: "создавать, делать"
        },
        {
            id: 60,
            eng: "mean , meant , meant",
            ru: "иметь ввиду"
        },
        {
            id: 61,
            eng: "meet , met , met",
            ru: "встречать(ся)"
        },
        {
            id: 62,
            eng: "pay , paid , paid",
            ru: "платить"
        },
        {
            id: 63,
            eng: "put , put , put",
            ru: "класть"
        },
        {
            id: 64,
            eng: "read , read , read",
            ru: "читать"
        },
        {
            id: 65,
            eng: "ride , rode , ridden",
            ru: "ездить верхом"
        },
        {
            id: 66,
            eng: "ring , rang , rung",
            ru: "звенеть, звонить"
        },
        {
            id: 67,
            eng: "run , ran , run",
            ru: "бегать"
        },
        {
            id: 68,
            eng: "rise , rose , risen",
            ru: "подниматься"
        },
        {
            id: 69,
            eng: "say , said , said",
            ru: "сказать, произнести"
        },
        {
            id: 70,
            eng: "see , saw , seen",
            ru: "(у)видеть"
        },
        {
            id: 71,
            eng: "sell , sold , sold",
            ru: "продавать"
        },
        {
            id: 72,
            eng: "send , sent , sent",
            ru: "отправлять"
        },
        {
            id: 73,
            eng: "shake , shook , shaken",
            ru: "трясти"
        },
        {
            id: 74,
            eng: "shoot , shot , shot",
            ru: "стрелять"
        },
        {
            id: 75,
            eng: "shut , shut , shut",
            ru: "захлопнуть"
        },
        {
            id: 76,
            eng: "sing , sang , sung",
            ru: "петь"
        },
        {
            id: 77,
            eng: "sink , sank , sunk",
            ru: "затонуть"
        },
        {
            id: 78,
            eng: "sit , sat , sat",
            ru: "сидеть"
        },
        {
            id: 79,
            eng: "sleep , slept , slept",
            ru: "спать"
        },
        {
            id: 80,
            eng: "slide , slid , slid",
            ru: "скользить"
        },
        {
            id: 81,
            eng: "speak , spoke , spoken",
            ru: "разговаривать"
        },
        {
            id: 82,
            eng: "spend , spent , spent",
            ru: "тратить"
        },
        {
            id: 83,
            eng: "spit , spat , spat",
            ru: "плеваться"
        },
        {
            id: 84,
            eng: "stand , stood , stood",
            ru: "встать, стоять"
        },
        {
            id: 85,
            eng: "steal , stole , stolen",
            ru: "воровать"
        },
        {
            id: 86,
            eng: "stick , stuck , stuck",
            ru: "приклеить, застрять "
        },
        {
            id: 87,
            eng: "stink , stank , stunk",
            ru: "вонять"
        },
        {
            id: 88,
            eng: "strike , struck , struck",
            ru: "ударять"
        },
        {
            id: 89,
            eng: "swear , swore , sworn",
            ru: "клясться/материться "
        },
        {
            id: 90,
            eng: "sweep , swept , swept",
            ru: "подметать"
        },
        {
            id: 91,
            eng: "swim , swam , swum",
            ru: "плавать"
        },
        {
            id: 92,
            eng: "swing , swung , swung",
            ru: "качаться"
        },
        {
            id: 93,
            eng: "take , took , taken",
            ru: "брать"
        },
        {
            id: 94,
            eng: "teach , taught , taught",
            ru: "обучать"
        },
        {
            id: 95,
            eng: "tear , tore , torn",
            ru: "рвать, вырывать"
        },
        {
            id: 96,
            eng: "tell , told , told",
            ru: "рассказывать"
        },
        {
            id: 97,
            eng: "think , thought , thought",
            ru: "думать"
        },
        {
            id: 98,
            eng: "throw , threw , thrown",
            ru: "бросать"
        },
        {
            id: 99,
            eng: "understand , understood , understood",
            ru: "понимать"
        },
    ],
    sara: [
        {
            id:1,
            eng:"wake up early /Ёли/",
            ru:"просыпаться рано"
            },
            {
            id:2,
            eng:"get up",
            ru:"вставать"
            },
            {
            id:3,
            eng:"have a shower /шАуэ/",
            ru:"принимать душ  “иметь душ”"
            },
            {
            id:4,
            eng:"take a shower /шАуэ/",
            ru:"принимать душ  “взять душ”"
            },
            {
            id:5,
            eng:"brush /брАш/ teeth",
            ru:"начищать зубы  "
            },
            {
            id:6,
            eng:"clean /клИн/ teeth",
            ru:"чистить зубы"
            },
            {
            id:7,
            eng:"get dressed /дрЭСТ/",
            ru:"одеваться"
            },
            {
            id:8,
            eng:"go to the kitchen",
            ru:"идти на кухню"
            },
            {
            id:9,
            eng:"go to the bathroom /бАthрум/",
            ru:"в уборную"
            },
            {
            id:10,
            eng:"go to the bedroom /бЭдрум/",
            ru:"идти в спальню"
            },
            {
            id:11,
            eng:"go to the living /лИвин/ room",
            ru:"идти в гостиную"
            },
            {
            id:12,
            eng:"have a cup of coffee or tea /тИ/",
            ru:"пить чашечку кофе или чая"
            },
            {
            id:13,
            eng:"take a cup of tea /тИ/",
            ru:"взять чашку чая"
            },
            {
            id:14,
            eng:"get a glass of wine /уАйн/",
            ru:"достать бокал вина"
            },
            {
            id:15,
            eng:"drink a bottle of milk",
            ru:"выпить бутылку молока"
            },
            {
            id:16,
            eng:"leave the house",
            ru:"покидать дом"
            },
            {
            id:17,
            eng:"walk /вОлк/",
            ru:"гулять"
            },
            {
            id:18,
            eng:"walk to the station",
            ru:"гулять до станции"
            },
            {
            id:19,
            eng:"wait for something",
            ru:"ждать чего-то"
            },
            {
            id:20,
            eng:"wait for the train",
            ru:"ждать поезда"
            },
            {
            id:21,
            eng:"look at the phone",
            ru:"смотреть на телефон"
            },
            {
            id:22,
            eng:"walk somewhere /сАмуЭэ/",
            ru:"гулять где-то"
            },
            {
            id:23,
            eng:"work for a big company",
            ru:"работать на большую компанию"
            },
            {
            id:24,
            eng:"walk to a bus stop",
            ru:"прогуляться до остановки автобуса"
            },
            {
            id:25,
            eng:"talk to somebody",
            ru:"говорить с кем-то"
            },
            {
            id:26,
            eng:"talk /тОк/",
            ru:"говорить"
            },
            {
            id:27,
            eng:"talk on the phone ",
            ru:"говорить по телефону"
            },
            {
            id:28,
            eng:"speak with somebody",
            ru:"разговаривать с кем-то"
            },
            {
            id:29,
            eng:"write /рАйт/",
            ru:"писАть"
            },
            {
            id:30,
            eng:"write an e-mail ",
            ru:"писать письма"
            },
            {
            id:31,
            eng:"have meetings ",
            ru:"иметь встречи"
            },
            {
            id:32,
            eng:"have lunch in a café /кЭфи/",
            ru:"обедать в кафе"
            },
            {
            id:33,
            eng:"have lunch at work",
            ru:"обедать на работе"
            },
            {
            id:34,
            eng:"work all day  /Ол дЭй/",
            ru:"работать весь день"
            },
            {
            id:35,
            eng:"finish work day",
            ru:"заканчивать рабочий день"
            },
            {
            id:36,
            eng:"go home ",
            ru:"идти домой"
            },
            {
            id:37,
            eng:"cook dinner ",
            ru:"готовить ужин"
            },
            {
            id:38,
            eng:"watch TeleVision  (TV) ",
            ru:"смотреть телевизор"
            },
            {
            id:39,
            eng:"have dinner",
            ru:"ужинать"
            },
            {
            id:40,
            eng:"go to bed ",
            ru:"идти в постель"
            },
            {
            id:41,
            eng:"have dreams /дрИмз/",
            ru:"иметь мечты"
            },
            {
            id:42,
            eng:"dream /дрИм/",
            ru:"мечтать"
            },
            {
            id:43,
            eng:"get e-mails",
            ru:"получать письма"
            },
            {
            id:44,
            eng:"check e-mails",
            ru:"проверять почту"
            },
            {
            id:45,
            eng:"wait for somebody /сАмбади/",
            ru:"ждать кого-то"
            },
            {
            id:46,
            eng:"sing a song /сИн Э сОн/",
            ru:"петь песню"
            },
            {
            id:47,
            eng:"do number one",
            ru:"ходить 'по-маленькому' (писать)"
            },
            {
            id:48,
            eng:"do number two",
            ru:"ходить 'по-большому' (какать)"
            },
            {
            id:49,
            eng:"oversleep /оУвЭслип/",
            ru:"проспать"
            },
    ],
    anika: [
        {
            id:1,
            eng:"wake up early /Ёли/",
            ru:"просыпаться рано"
            },
            {
            id:2,
            eng:"get up",
            ru:"вставать"
            },
            {
            id:3,
            eng:"have a shower /шАуэ/",
            ru:"принимать душ  “иметь душ”"
            },
            {
            id:4,
            eng:"take a shower /шАуэ/",
            ru:"принимать душ  “взять душ”"
            },
            {
            id:5,
            eng:"brush /брАш/ teeth",
            ru:"начищать зубы  "
            },
            {
            id:6,
            eng:"clean /клИн/ teeth",
            ru:"чистить зубы"
            },
            {
            id:7,
            eng:"get dressed /дрЭСТ/",
            ru:"одеваться"
            },
            {
            id:8,
            eng:"go to the kitchen",
            ru:"идти на кухню"
            },
            {
            id:9,
            eng:"go to the bathroom /бАthрум/",
            ru:"в уборную"
            },
            {
            id:10,
            eng:"go to the bedroom /бЭдрум/",
            ru:"идти в спальню"
            },
            {
            id:11,
            eng:"go to the living /лИвин/ room",
            ru:"идти в гостиную"
            },
            {
            id:12,
            eng:"have a cup of coffee or tea /тИ/",
            ru:"пить чашечку кофе или чая"
            },
            {
            id:13,
            eng:"take a cup of tea /тИ/",
            ru:"взять чашку чая"
            },
            {
            id:14,
            eng:"get a glass of wine /уАйн/",
            ru:"достать бокал вина"
            },
            {
            id:15,
            eng:"drink a bottle of milk",
            ru:"выпить бутылку молока"
            },
            {
            id:16,
            eng:"leave the house",
            ru:"покидать дом"
            },
            {
            id:17,
            eng:"walk /вОлк/",
            ru:"гулять"
            },
            {
            id:18,
            eng:"walk to the station",
            ru:"гулять до станции"
            },
            {
            id:19,
            eng:"wait for something",
            ru:"ждать чего-то"
            },
            {
            id:20,
            eng:"wait for the train",
            ru:"ждать поезда"
            },
            {
            id:21,
            eng:"look at the phone",
            ru:"смотреть на телефон"
            },
            {
            id:22,
            eng:"walk somewhere /сАмуЭэ/",
            ru:"гулять где-то"
            },
            {
            id:23,
            eng:"work for a big company",
            ru:"работать на большую компанию"
            },
            {
            id:24,
            eng:"walk to a bus stop",
            ru:"прогуляться до остановки автобуса"
            },
            {
            id:25,
            eng:"talk to somebody",
            ru:"говорить с кем-то"
            },
            {
            id:26,
            eng:"talk /тОк/",
            ru:"говорить"
            },
            {
            id:27,
            eng:"talk on the phone ",
            ru:"говорить по телефону"
            },
            {
            id:28,
            eng:"speak with somebody",
            ru:"разговаривать с кем-то"
            },
            {
            id:29,
            eng:"write /рАйт/",
            ru:"писАть"
            },
            {
            id:30,
            eng:"write an e-mail ",
            ru:"писать письма"
            },
            {
            id:31,
            eng:"have meetings ",
            ru:"иметь встречи"
            },
            {
            id:32,
            eng:"have lunch in a café /кЭфи/",
            ru:"обедать в кафе"
            },
            {
            id:33,
            eng:"have lunch at work",
            ru:"обедать на работе"
            },
            {
            id:34,
            eng:"work all day  /Ол дЭй/",
            ru:"работать весь день"
            },
            {
            id:35,
            eng:"finish work day",
            ru:"заканчивать рабочий день"
            },
            {
            id:36,
            eng:"go home ",
            ru:"идти домой"
            },
            {
            id:37,
            eng:"cook dinner ",
            ru:"готовить ужин"
            },
            {
            id:38,
            eng:"watch TeleVision  (TV) ",
            ru:"смотреть телевизор"
            },
            {
            id:39,
            eng:"have dinner",
            ru:"ужинать"
            },
            {
            id:40,
            eng:"go to bed ",
            ru:"идти в постель"
            },
            {
            id:41,
            eng:"have dreams /дрИмз/",
            ru:"иметь мечты"
            },
            {
            id:42,
            eng:"dream /дрИм/",
            ru:"мечтать"
            },
            {
            id:43,
            eng:"get e-mails",
            ru:"получать письма"
            },
            {
            id:44,
            eng:"check e-mails",
            ru:"проверять почту"
            },
            {
            id:45,
            eng:"wait for somebody /сАмбади/",
            ru:"ждать кого-то"
            },
            {
            id:46,
            eng:"break /брЭйк/ something",
            ru:"ломать что-нибудь"
            },
            {
            id:47,
            eng:"beat /бит/ somebody",
            ru:"побить кого-то"
            },
            {
            id:48,
            eng:"become /бекАм/ smarter",
            ru:"становиться умнее"
            },
            {
            id:49,
            eng:"begin /бегИн/ a new hobby",
            ru:"начинать новое хобби"
            },
            {
            id:50,
            eng:"blow /блОу/ balloons",
            ru:"надувать шарики"
            },
            {
            id:51,
            eng:"borrow /бОроу/ money",
            ru:"брать деньги в долг"
            },
            {
            id:52,
            eng:"build /билд/ something",
            ru:"строить  что-то"
            },
            {
            id:53,
            eng:"burn /бЁрн/ something",
            ru:"сжигать что-то"
            },
            {
            id:54,
            eng:"buy /бАй/ something",
            ru:"покупать что-то"
            },
            {
            id:55,
            eng:"bring /брин/ food",
            ru:"принести еду"
            },
            {
            id:56,
            eng:"bite /бАйт/ nails",
            ru:"кусать ногти"
            },
            {
            id:57,
            eng:"come /кАм/ home",
            ru:"приходить домой"
            },
            {
            id:58,
            eng:"choose /чУз/ a new car",
            ru:"выбирать новую тачку"
            },
            {
            id:59,
            eng:"catch /кЭч/ something",
            ru:"ловить что-то"
            },
            {
            id:60,
            eng:"creep /крИп/ under the table",
            ru:"ползать под столом"
            },
            {
            id:61,
            eng:"cut /кАт/ something",
            ru:"резать что-то"
            },
            {
            id:62,
            eng:"deal /дИл/ with Vincent",
            ru:"иметь дела c Vincent"
            },
            {
            id:63,
            eng:"dig /диГ трЭжэ/ treasure",
            ru:"копать сокровища"
            },
            {
            id:64,
            eng:"do /ду/ homework",
            ru:"делать домашнюю"
            },
            {
            id:65,
            eng:"drive /дрАйв/ a car",
            ru:"водить машину"
            },
            {
            id:66,
            eng:"draw /дрО/ pictures",
            ru:"рисовать картинки"
            },
            {
            id:67,
            eng:"drink /дринк/ something",
            ru:"пить что-то"
            },
            {
            id:68,
            eng:"eat /ит/ something",
            ru:"кушать что-то"
            },
            {
            id:69,
            eng:"fall /фол/ on the floor",
            ru:"падать на пол"
            },
            {
            id:70,
            eng:"feed /фиД/ pets",
            ru:"кормить питомцев"
            },
            {
            id:71,
            eng:"feel /фил/ happy",
            ru:"чувствовать себя счастливой"
            },
            {
            id:72,
            eng:"fight /фАйт/ with Vincent",
            ru:"сражаться с тичером"
            },
            {
            id:73,
            eng:"find /фАйнд/ cool videos",
            ru:"находить классные видео"
            },
    ],
    adjquest: [
        {
            id: 1,
            eng: "boring /бОрин/",
            ru: "скучный , more , the most"
        },
        {
            id: 2,
            eng: "awesome /Осм/",
            ru: "офигенный , more , the most"
        },
        {
            id: 3,
            eng: "angry /Энгри/",
            ru: "сердитый , angrier , angriest"
        },
        {
            id: 4,
            eng: "big",
            ru: "большой , bigger , biggest"
        },
        {
            id: 5,
            eng: "black /блЭк/",
            ru: "Черный , blacker , blackest"
        },
        {
            id: 6,
            eng: "bold",
            ru: "смелый , bolder , boldest"
        },
        {
            id: 7,
            eng: "blue /блУ/",
            ru: "синий , bluer , bluest"
        },
        {
            id: 8,
            eng: "bald /бОлд/",
            ru: "лысый , balder , baldest"
        },
        {
            id: 9,
            eng: "bossy",
            ru: "властный , bossier , bossiest"
        },
        {
            id: 10,
            eng: "brave /брЭйв/",
            ru: "храбрый , braver , bravest"
        },
        {
            id: 11,
            eng: "interesting",
            ru: "интересный , more , the most"
        },
        {
            id: 12,
            eng: "bright /брАйт/",
            ru: "яркий , brighter , brightest"
        },
        {
            id: 13,
            eng: "green /грин/",
            ru: "зелёный , greener , greenest"
        },
        {
            id: 14,
            eng: "busy /бИзи/",
            ru: "занятой , busier , busiest"
        },
        {
            id: 15,
            eng: "calm /кам/",
            ru: "спокойный , calmer , calmest"
        },
        {
            id: 16,
            eng: "cheap /чип/",
            ru: "дешевый , cheaper , cheapest"
        },
        {
            id: 17,
            eng: "attractive",
            ru: "привлекательный , more , the most"
        },
        {
            id: 18,
            eng: "overweight /ОувэУэйт/",
            ru: "полноватый , more , the most"
        },
        {
            id: 19,
            eng: "fashionable /фЭшэнэбл/",
            ru: "модный , more , the most"
        },
        {
            id: 20,
            eng: "clean /клин/",
            ru: "чистый , cleaner , cleanest"
        },
        {
            id: 21,
            eng: "intelligent",
            ru: "образованный , more , the most"
        },
        {
            id: 22,
            eng: "close /клоуС/",
            ru: "близкий , closer , closest"
        },
        {
            id: 23,
            eng: "cloudy /клАуди",
            ru: "облачный , cloudier , cloudiest"
        },
        {
            id: 24,
            eng: "clumsy /клАмзи/",
            ru: "неуклюжий , clumsier , clumsiest"
        },
        {
            id: 25,
            eng: "disgusting",
            ru: "отвратительный , more , the most"
        },
        {
            id: 26,
            eng: "cold",
            ru: "холодный , colder , coldest"
        },
        {
            id: 27,
            eng: "cool /кул/",
            ru: "крутой , cooler , coolest"
        },
        {
            id: 28,
            eng: "crazy",
            ru: "сумасшедший , crazier , craziest"
        },
        {
            id: 29,
            eng: "beautiful",
            ru: "красивая , more , the most"
        },
        {
            id: 30,
            eng: "annoying /энОин/",
            ru: "бесящий , more , the most"
        },
        {
            id: 31,
            eng: "crispy /крИспи/",
            ru: "хрустящий , crispier , crispiest"
        },
        {
            id: 32,
            eng: "wonderful",
            ru: "замечательный , more , the most"
        },
        {
            id: 33,
            eng: "curly /кёли/",
            ru: "кудрявый , curlier , curliest"
        },
        {
            id: 34,
            eng: "amazing /эмЭйзин/",
            ru: "удивительный , more , the most"
        },
        {
            id: 35,
            eng: "cute /кьЮт/",
            ru: "милый , cuter , cutest"
        },
        {
            id: 36,
            eng: "sexy",
            ru: "сексуальный , sexier , sexiest"
        },
        {
            id: 37,
            eng: "dark",
            ru: "темный , darker , darkest"
        },
        {
            id: 38,
            eng: "deadly /дЭдли/",
            ru: "смертельный , deadlier , deadliest"
        },
        {
            id: 39,
            eng: "deep /дип/",
            ru: "глубокий , deeper , deepest"
        },
        {
            id: 40,
            eng: "expensive",
            ru: "дорогой , more , the most"
        },
        {
            id: 41,
            eng: "dirty /дёти/",
            ru: "грязный , dirtier , dirtiest"
        },
        {
            id: 42,
            eng: "dry /дрАй/",
            ru: "сухой , drier , driest"
        },
        {
            id: 43,
            eng: "dull /дал/",
            ru: "затупившийся , duller , dullest"
        },
        {
            id: 44,
            eng: "dumb /дам/",
            ru: "болван , dumber , dumbest"
        },
        {
            id: 45,
            eng: "dusty /дАсти/",
            ru: "пыльный , dustier , dustiest"
        },
        {
            id: 46,
            eng: "early /ёли/",
            ru: "ранний , earlier , earliest"
        },
        {
            id: 47,
            eng: "easy /Изи/",
            ru: "легкий , easier , easiest"
        },
        {
            id: 48,
            eng: "evil /Ивэл/",
            ru: "злой , more evil , most evil"
        },
        {
            id: 49,
            eng: "fantastic",
            ru: "фантастичный , more , the most"
        },
        {
            id: 50,
            eng: "fair /фЭа/",
            ru: "справедливый , fairer , fairest"
        },
        {
            id: 51,
            eng: "fancy /фЭнси/",
            ru: "изысканный , fancier , fanciest"
        },
        {
            id: 52,
            eng: "far",
            ru: "далекий , farther , farthest"
        },
        {
            id: 53,
            eng: "fast",
            ru: "быстрый , faster , fastest"
        },
        {
            id: 54,
            eng: "fat /фэт/",
            ru: "жирный , fatter , fattest"
        },
        {
            id: 55,
            eng: "few /фью/",
            ru: "несколько , fewer , fewest"
        },
        {
            id: 56,
            eng: "fierce /фИрс/",
            ru: "свирепый , fiercer , fiercest"
        },
        {
            id: 57,
            eng: "filthy /филTHи/",
            ru: "мерзкий , filthier , filthiest"
        },
        {
            id: 58,
            eng: "handsome /хЭнсам/",
            ru: "красивый (муж) , more , the most"
        },
        {
            id: 59,
            eng: "firm /фЁрм/",
            ru: "упругий , firmer , firmest"
        },
        {
            id: 60,
            eng: "incredible /инкрЭдбл/",
            ru: "невероятный , more , the most"
        },
        {
            id: 61,
            eng: "shocking /шОкин/",
            ru: "шокирующий , more , the most"
        },
        {
            id: 62,
            eng: "flat /флЭт/",
            ru: "плоский , flatter , flattest"
        },
        {
            id: 63,
            eng: "fresh",
            ru: "свежий , fresher , freshest"
        },
        {
            id: 64,
            eng: "friendly",
            ru: "дружелюбный , friendlier , friendliest"
        },
        {
            id: 65,
            eng: "full",
            ru: "полный , fuller , fullest"
        },
        {
            id: 66,
            eng: "funny /фАнни/",
            ru: "смешной , funnier , funniest"
        },
        {
            id: 67,
            eng: "gentle /джЭнтл/",
            ru: "нежный , gentler , gentlest"
        },
        {
            id: 68,
            eng: "gloomy /глУми/",
            ru: "мрачный , gloomier , gloomiest"
        },
        {
            id: 69,
            eng: "shitty /щИти/",
            ru: "дерьмовенький , shittier , shittiest"
        },
        {
            id: 70,
            eng: "great /грЭйт/",
            ru: "великий , greater , greatest"
        },
        {
            id: 71,
            eng: "greedy /грИди/",
            ru: "жадный , greedier , greediest"
        },
        {
            id: 72,
            eng: "shiny /шАйни/",
            ru: "светящийся , shinier , shiniest"
        },
        {
            id: 73,
            eng: "hairy /хЭйри/",
            ru: "волосатый , hairier , hairiest"
        },
        {
            id: 74,
            eng: "cozy /кОузи/",
            ru: "уютный , handier , handiest"
        },
        {
            id: 75,
            eng: "happy",
            ru: "счастливый , happier , happiest"
        },
        {
            id: 76,
            eng: "hard",
            ru: "трудный , harder , hardest"
        },
        {
            id: 77,
            eng: "harsh /хАрш/",
            ru: "суровый , harsher , harshest"
        },
        {
            id: 78,
            eng: "healthy /хЭлTHи/",
            ru: "здоровый , healthier , healthiest"
        },
        {
            id: 79,
            eng: "heavy /хЭви/",
            ru: "тяжелый , heavier , heaviest"
        },
        {
            id: 80,
            eng: "/тол/ tall or high /хай/",
            ru: "высокий , higher , highest"
        },
        {
            id: 81,
            eng: "scared /скЭад/",
            ru: "напуганный , more , the most"
        },
        {
            id: 82,
            eng: "hot",
            ru: "горячий , hotter , hottest"
        },
        {
            id: 83,
            eng: "humble /хАмбл/",
            ru: "скромный , humbler , humblest"
        },
        {
            id: 84,
            eng: "hungry /хАнгри/",
            ru: "голодный , hungrier , hungriest"
        },
        {
            id: 85,
            eng: "icy /Айси/",
            ru: "ледяной , icier , iciest"
        },
        {
            id: 86,
            eng: "itchy /Итчи/",
            ru: "зудящий , itchier , itchiest"
        },
        {
            id: 87,
            eng: "juicy /джУси/",
            ru: "сочный , juicier , juiciest"
        },
        {
            id: 88,
            eng: "kind /кАйнд/",
            ru: "добрый , kinder , kindest"
        },
        {
            id: 89,
            eng: "large /лАдж/",
            ru: "большой , larger , largest"
        },
        {
            id: 90,
            eng: "late /лЭйт/",
            ru: "поздний , later , latest"
        },
        {
            id: 91,
            eng: "lazy /лЭйзи/",
            ru: "ленивый , lazier , laziest"
        },
        {
            id: 92,
            eng: "light /лАйт/",
            ru: "светлый , lighter , lightest"
        },
        {
            id: 93,
            eng: "favorite /фЭйворит/",
            ru: "любимый , more , the most"
        },
        {
            id: 94,
            eng: "little /лИтл/",
            ru: "мало , less , the least"
        },
        {
            id: 95,
            eng: "alive /элАйв/",
            ru: "живой , more , the most"
        },
        {
            id: 96,
            eng: "long",
            ru: "длинный , longer , longest"
        },
        {
            id: 97,
            eng: "loud /лАуд/",
            ru: "громкий , louder , loudest"
        },
        {
            id: 98,
            eng: "drunk /дрАнк/",
            ru: "пьяный , drunker , drunkest"
        },
        {
            id: 99,
            eng: "low /лОу/",
            ru: "низкий , lower , lowest"
        },
        {
            id: 100,
            eng: "mad /мЭд/",
            ru: "безумный , madder , maddest"
        },
        {
            id: 101,
            eng: "mean /мин/",
            ru: "злобный , meaner , meanest"
        },
        {
            id: 102,
            eng: "messy /мЭси/",
            ru: "неряшливый , messier , messiest"
        },
        {
            id: 103,
            eng: "bothering /бАthэрин/",
            ru: "раздражающий , more , the most"
        },
        {
            id: 104,
            eng: "merry",
            ru: "веселый , merrier , merriest"
        },
        {
            id: 105,
            eng: "narrow /нЭроу/",
            ru: "узкий , narrower , narrowest"
        },
        {
            id: 106,
            eng: "nasty /нЭсти/",
            ru: "противный , nastier , nastiest"
        },
        {
            id: 107,
            eng: "naughty /нОти/",
            ru: "непослушный , naughtier , naughtiest"
        },
        {
            id: 108,
            eng: "near /нИа/",
            ru: "ближайший , nearer , nearest"
        },
        {
            id: 109,
            eng: "neat /нит/",
            ru: "аккуратный , neater , neatest"
        },
        {
            id: 110,
            eng: "needy /нИди/",
            ru: "нуждающийся , needier , neediest"
        },
        {
            id: 111,
            eng: "nervous /нЁвэс/",
            ru: "нервный , more nervous , most nervous"
        },
        {
            id: 112,
            eng: "new /ньЮ/",
            ru: "новый , newer , newest"
        },
        {
            id: 113,
            eng: "nice /нАйс/",
            ru: "приятный , nicer , nicest"
        },
        {
            id: 114,
            eng: "noisy /нОйзи/",
            ru: "шумный , noisier , noisiest"
        },
        {
            id: 115,
            eng: "breathtaking /брэth тэйкин/",
            ru: "захватывающий дух , more , the most"
        },
        {
            id: 116,
            eng: "oily /Ойли/",
            ru: "маслянистый , oilier , oiliest"
        },
        {
            id: 117,
            eng: "old",
            ru: "старый , older/elder , oldest/eldest"
        },
        {
            id: 118,
            eng: "simple or plain",
            ru: "простой , plainer , plainest"
        },
        {
            id: 119,
            eng: "polite /полАйт/",
            ru: "вежливый , politer , politest"
        },
        {
            id: 120,
            eng: "poor /пУэ/",
            ru: "бедный , poorer , poorest"
        },
        {
            id: 121,
            eng: "pretty /прИти/",
            ru: "симпотный , prettier , prettiest"
        },
        {
            id: 122,
            eng: "proud /прАуд/",
            ru: "гордый , prouder , proudest"
        },
        {
            id: 123,
            eng: "pure /пьЮэ/",
            ru: "безпримесный , purer , purest"
        },
        {
            id: 124,
            eng: "quick куИк/",
            ru: "быстрый , quicker , quickest"
        },
        {
            id: 125,
            eng: "quiet /куАйет/",
            ru: "тихий , quieter , quietest"
        },
        {
            id: 126,
            eng: "rare/рЭа/",
            ru: "редкий , rarer , rarest"
        },
        {
            id: 127,
            eng: "raw /ро/",
            ru: "сырой , rawer , rawest"
        },
        {
            id: 128,
            eng: "rich /рич/",
            ru: "богатый , richer , richest"
        },
        {
            id: 129,
            eng: "ripe /рАйп/",
            ru: "спелый , riper , ripest"
        },
        {
            id: 130,
            eng: "risky /рИски/",
            ru: "рискованный , riskier , riskiest"
        },
        {
            id: 131,
            eng: "spacious /спЭйшэс/",
            ru: "просторный , more , the most"
        },
        {
            id: 132,
            eng: "rough /рАф/",
            ru: "черствый, грубый , rougher , roughest"
        },
        {
            id: 133,
            eng: "rude /рУд/",
            ru: "грубый в общении , ruder , rudest"
        },
        {
            id: 134,
            eng: "rusty /рАсти/",
            ru: "ржавый , rustier , rustiest"
        },
        {
            id: 135,
            eng: "sad /сЭд/",
            ru: "грустный , sadder , saddest"
        },
        {
            id: 136,
            eng: "safe /сЭйф/",
            ru: "безопасный , safer , safest"
        },
        {
            id: 137,
            eng: "salty /сОлти/",
            ru: "соленый , saltier , saltiest"
        },
        {
            id: 138,
            eng: "spoiled /спОйлд/",
            ru: "здравый , saner , sanest"
        },
        {
            id: 139,
            eng: "scary /скЭри/",
            ru: "пугающий , scarier , scariest"
        },
        {
            id: 140,
            eng: "correct /корЭкт/",
            ru: "верный , more , the most"
        },
        {
            id: 141,
            eng: "sharp /шАрп/",
            ru: "острый , sharper , sharpest"
        },
        {
            id: 142,
            eng: "hollow /хОлоу/",
            ru: "пустотелый , more , the most"
        },
        {
            id: 143,
            eng: "short /шорт/",
            ru: "короткий, низкий , shorter , shortest"
        },
        {
            id: 144,
            eng: "shy шАй/",
            ru: "застенчивый , shyer , shyest"
        },
        {
            id: 145,
            eng: "silly /сИли/",
            ru: "глупый , sillier , silliest"
        },
        {
            id: 146,
            eng: "stupid /стьЮпид/",
            ru: "тупо , more , the most"
        },
        {
            id: 147,
            eng: "sincere /синсИэ/",
            ru: "искренний , sincerer , sincerest"
        },
        {
            id: 148,
            eng: "skinny /скИни/",
            ru: "тощий , skinnier , skinniest"
        },
        {
            id: 149,
            eng: "sleepy /слИпи/",
            ru: "сонный , sleepier , sleepiest"
        },
        {
            id: 150,
            eng: "slim /слИм/",
            ru: "стройный , slimmer , slimmest"
        },
        {
            id: 151,
            eng: "slimy /слАйми/",
            ru: "слизкий , slimier , slimiest"
        },
        {
            id: 152,
            eng: "slow /слОу/",
            ru: "медленный , slower , slowest"
        },
        {
            id: 153,
            eng: "small /смОл/",
            ru: "маленький , smaller , smallest"
        },
        {
            id: 154,
            eng: "smart /смАрт/",
            ru: "сообразительный , smarter , smartest"
        },
        {
            id: 155,
            eng: "smelly /смЭли/",
            ru: "вонючий , smellier , smelliest"
        },
        {
            id: 156,
            eng: "smoky /смОуки/",
            ru: "дымный , smokier , smokiest"
        },
        {
            id: 157,
            eng: "smooth /смуз/",
            ru: "гладкий , smoother , smoothest"
        },
        {
            id: 158,
            eng: "soft",
            ru: "мягкий , softer , softest"
        },
        {
            id: 159,
            eng: "soon /сун/",
            ru: "скоро , sooner , soonest"
        },
        {
            id: 160,
            eng: "vulgar /вАлгар/",
            ru: "вульгарный , more , the most"
        },
        {
            id: 161,
            eng: "sorry",
            ru: "сожалеющий , sorrier , sorriest"
        },
        {
            id: 162,
            eng: "sour /сАуэ/",
            ru: "кислый , sourer , sourest"
        },
        {
            id: 163,
            eng: "spicy /спАйси/",
            ru: "острый , spicier , spiciest"
        },
        {
            id: 164,
            eng: "steep",
            ru: "крутой (наклон) , steeper , steepest"
        },
        {
            id: 165,
            eng: "bloody /блАди/",
            ru: "кровавый , bloodier , bloodiest"
        },
        {
            id: 166,
            eng: "strange/weird",
            ru: "странный , stranger , strangest"
        },
        {
            id: 167,
            eng: "strict /стрИкт/",
            ru: "строгий , stricter , strictest"
        },
        {
            id: 168,
            eng: "strong",
            ru: "сильный , stronger , strongest"
        },
        {
            id: 169,
            eng: "sunny",
            ru: "солнечный , sunnier , sunniest"
        },
        {
            id: 170,
            eng: "sweaty /свЭти/",
            ru: "потный , sweatier , sweatiest"
        },
        {
            id: 171,
            eng: "sweet",
            ru: "сладкий , sweeter , sweetest"
        },
        {
            id: 172,
            eng: "fabulous /фЭбьюлэс/",
            ru: "поразительный , more , the most"
        },
        {
            id: 173,
            eng: "tanned /тЭнд/",
            ru: "загорелый , more , the most"
        },
        {
            id: 174,
            eng: "tasty /тЭйсти/",
            ru: "вкусный , tastier , tastiest"
        },
        {
            id: 175,
            eng: "thin or thick",
            ru: "тонкий/толстый , предметы , thicker, thickest"
        },
        {
            id: 176,
            eng: "immortal",
            ru: "бессмертный , more , the most"
        },
        {
            id: 177,
            eng: "thirsty /Thёсти/",
            ru: "жаждущий , thirstier , thirstiest"
        },
        {
            id: 178,
            eng: "tiny /тАйни/",
            ru: "крошечный , tinier , tiniest"
        },
        {
            id: 179,
            eng: "legendary",
            ru: "легендарный , more , the most"
        },
        {
            id: 180,
            eng: "true /тру/",
            ru: "верный , truer , truest"
        },
        {
            id: 181,
            eng: "ugly /Агли/",
            ru: "уродливый , uglier , ugliest"
        },
        {
            id: 182,
            eng: "warm /вОм/",
            ru: "теплый , warmer , warmest"
        },
        {
            id: 183,
            eng: "weak /уИк/",
            ru: "слабый , weaker , weakest"
        },
        {
            id: 184,
            eng: "wealthy /уЭлTHи/",
            ru: "состоятельный , wealthier , wealthiest"
        },
        {
            id: 185,
            eng: "wet /уЭт/",
            ru: "мокрый , wetter , wettest"
        },
        {
            id: 186,
            eng: "wide /уАйд/",
            ru: "широкий , wider , widest"
        },
        {
            id: 187,
            eng: "wild /уАйлд/",
            ru: "дикий , wilder , wildest"
        },
        {
            id: 188,
            eng: "windy /уИнди/",
            ru: "ветреный , windier , windiest"
        },
        {
            id: 189,
            eng: "wise /уАйз/",
            ru: "мудрый , wiser , wisest"
        },
        {
            id: 190,
            eng: "worthy /уОрTHи/",
            ru: "достойный , worthier , worthiest"
        },
        {
            id: 191,
            eng: "young /ян/",
            ru: "молодой , younger , youngest"
        },
        {
            id: 192,
            eng: "reliable /рилАибл/",
            ru: "надёжный , more , the most"
        },
        {
            id: 193,
            eng: "picky /пИки/",
            ru: "придирчивый , pickier , pickiest"
        },
        {
            id: 194,
            eng: "successful /саксЭсфул/",
            ru: "успешный , more , the most"
        },
        {
            id: 195,
            eng: "tricky /трИки/",
            ru: "хитрый , trickier , trickiest"
        },
        {
            id: 196,
            eng: "good",
            ru: "хороший , better , the best"
        },
        {
            id: 197,
            eng: "bad /бЭд/",
            ru: "плохой , worse , the worst"
        },
        {
            id: 198,
            eng: "much or many",
            ru: "много , more , the most"
        },
    ],
    adjectivesb1compare: [
        {
            id:410,
            eng:"boring /бОрин/",
            ru:"скучный , more , the  most"
            },
            {
            id:411,
            eng:"awesome /Осм/",
            ru:"офигенный , more , the  most"
            },
            {
            id:412,
            eng:"angry /Энгри/",
            ru:"сердитый , angrier , the  angriest"
            },
            {
            id:413,
            eng:"big",
            ru:"большой , bigger , the  biggest"
            },
            {
            id:414,
            eng:"black /блЭк/",
            ru:"Черный , blacker , the  blackest"
            },
            {
            id:415,
            eng:"bold and bald /бОлд/",
            ru:"смелый , bolder , the  boldest"
            },
            {
            id:416,
            eng:"blue /блУ/",
            ru:"синий , bluer , the  bluest"
            },
            {
            id:417,
            eng:"bald /бОлд/",
            ru:"лысый , balder , the  baldest"
            },
            {
            id:418,
            eng:"bossy /бОсси/",
            ru:"властный , bossier , the  bossiest"
            },
            {
            id:419,
            eng:"brave /брЭйв/",
            ru:"храбрый , braver , the  bravest"
            },
            {
            id:420,
            eng:"interesting /ИНтрэстин/",
            ru:"интересный , more , the  most"
            },
            {
            id:421,
            eng:"bright /брАйт/",
            ru:"яркий , brighter , the  brightest"
            },
            {
            id:422,
            eng:"green /грин/",
            ru:"зелёный , greener , the  greenest"
            },
            {
            id:423,
            eng:"busy /бИзи/",
            ru:"занятой , busier , the  busiest"
            },
            {
            id:424,
            eng:"calm /кам/",
            ru:"спокойный , calmer , the  calmest"
            },
            {
            id:425,
            eng:"cheap /чип/",
            ru:"дешевый , cheaper , the  cheapest"
            },
            {
            id:426,
            eng:"attractive /этрЭктив/",
            ru:"привлекательный , more , the  most"
            },
            {
            id:427,
            eng:"overweight /ОувэУэйт/",
            ru:"полноватый , more , the  most"
            },
            {
            id:428,
            eng:"fashionable /фЭшэнэбл/",
            ru:"модный , more , the  most"
            },
            {
            id:429,
            eng:"clean /клин/",
            ru:"чистый , cleaner , the  cleanest"
            },
            {
            id:430,
            eng:"intelligent",
            ru:"образованный , more , the  most"
            },
            {
            id:431,
            eng:"close /клоуС/",
            ru:"близкий , closer , the  closest"
            },
            {
            id:432,
            eng:"cloudy /клАуди",
            ru:"облачный , cloudier , the  cloudiest"
            },
            {
            id:433,
            eng:"clumsy /клАмзи/",
            ru:"неуклюжий , clumsier , the  clumsiest"
            },
            {
            id:434,
            eng:"disgusting /дисгАстин/",
            ru:"отвратительный , more , the  most"
            },
            {
            id:435,
            eng:"cold /коУлд/",
            ru:"холодный , colder , the  coldest"
            },
            {
            id:436,
            eng:"cool /кул/",
            ru:"крутой , cooler , the  coolest"
            },
            {
            id:437,
            eng:"crazy /крЭйзи/",
            ru:"сумасшедший , crazier , the  craziest"
            },
            {
            id:438,
            eng:"beautiful",
            ru:"красивая , more , the  most"
            },
            {
            id:439,
            eng:"annoying /энОин/",
            ru:"бесящий , more , the  most"
            },
            {
            id:440,
            eng:"crispy /крИспи/",
            ru:"хрустящий , crispier , the  crispiest"
            },
            {
            id:441,
            eng:"wonderful",
            ru:"замечательный , more , the  the most"
            },
            {
            id:442,
            eng:"curly /кёли/",
            ru:"кудрявый , curlier , the  curliest"
            },
            {
            id:443,
            eng:"amazing /эмЭйзин/",
            ru:"удивительный , more , the  most"
            },
            {
            id:444,
            eng:"cute /кьЮт/",
            ru:"милый , cuter , the  cutest"
            },
            {
            id:445,
            eng:"sexy",
            ru:"сексуальный , sexier , the  sexiest"
            },
            {
            id:446,
            eng:"dark",
            ru:"темный , darker , the  darkest"
            },
            {
            id:447,
            eng:"deadly /дЭдли/",
            ru:"смертельный , deadlier , the  deadliest"
            },
            {
            id:448,
            eng:"deep /дип/",
            ru:"глубокий , deeper , the  deepest"
            },
            {
            id:449,
            eng:"expensive /экспЭнсив/",
            ru:"дорогой , more , the  most"
            },
            {
            id:450,
            eng:"dirty /дёти/",
            ru:"грязный , dirtier , the  dirtiest"
            },
            {
            id:451,
            eng:"dry /дрАй/",
            ru:"сухой , drier , the  driest"
            },
            {
            id:452,
            eng:"dull /дал/",
            ru:"затупившийся , duller , the  dullest"
            },
            {
            id:453,
            eng:"dumb /дам/",
            ru:"болван , dumber , the  dumbest"
            },
            {
            id:454,
            eng:"dusty /дАсти/",
            ru:"пыльный , dustier , the  dustiest"
            },
            {
            id:455,
            eng:"early /ёли/",
            ru:"ранний , earlier , the  earliest"
            },
            {
            id:456,
            eng:"easy /Изи/",
            ru:"легкий , easier , the  easiest"
            },
            {
            id:457,
            eng:"evil /Ивэл/",
            ru:"злой , more evil , the  most"
            },
            {
            id:458,
            eng:"fantastic",
            ru:"фантастичный , more , the  most"
            },
            {
            id:459,
            eng:"fair /фЭа/",
            ru:"справедливый , fairer , the  fairest"
            },
            {
            id:460,
            eng:"fancy /фЭнси/",
            ru:"изысканный , fancier , the  fanciest"
            },
            {
            id:461,
            eng:"far",
            ru:"далекий , farther , the  farthest"
            },
            {
            id:462,
            eng:"fast",
            ru:"быстрый , faster , the  fastest"
            },
            {
            id:463,
            eng:"fat /фэт/",
            ru:"жирный , fatter , the  fattest"
            },
            {
            id:464,
            eng:"few /фью/",
            ru:"несколько , fewer , the  fewest"
            },
            {
            id:465,
            eng:"fierce /фИрс/",
            ru:"свирепый , fiercer , the  fiercest"
            },
            {
            id:466,
            eng:"filthy /филTHи/",
            ru:"мерзкий , filthier , the  filthiest"
            },
            {
            id:467,
            eng:"handsome /хЭнсам/",
            ru:"красивый (муж) , more , the  most"
            },
            {
            id:468,
            eng:"firm /фЁрм/",
            ru:"упругий , firmer , the  firmest"
            },
            {
            id:469,
            eng:"incredible /инкрЭдбл/",
            ru:"невероятный , more , the  most"
            },
            {
            id:470,
            eng:"shocking /шОкин/",
            ru:"шокирующий , more , the  most"
            },
            {
            id:471,
            eng:"flat /флЭт/",
            ru:"плоский , flatter , the  flattest"
            },
            {
            id:472,
            eng:"fresh /фрЭш/",
            ru:"свежий , fresher , the  freshest"
            },
            {
            id:473,
            eng:"friendly /фрЭндли/",
            ru:"дружелюбный , friendlier , the  friendliest"
            },
            {
            id:474,
            eng:"full /фУл/",
            ru:"полный , fuller , the  fullest"
            },
            {
            id:475,
            eng:"funny /фАнни/",
            ru:"смешной , funnier , the  funniest"
            },
            {
            id:476,
            eng:"gentle /джЭнтл/",
            ru:"нежный , gentler , the  gentlest"
            },
            {
            id:477,
            eng:"gloomy /глУми/",
            ru:"мрачный , gloomier , the  gloomiest"
            },
            {
            id:478,
            eng:"shitty /щИти/",
            ru:"дерьмовенький , shittier , the  shittiest"
            },
            {
            id:479,
            eng:"great /грЭйт/",
            ru:"великий , greater , the  greatest"
            },
            {
            id:480,
            eng:"greedy /грИди/",
            ru:"жадный , greedier , the  greediest"
            },
            {
            id:481,
            eng:"shiny /шАйни/",
            ru:"светящийся , shinier , the  shiniest"
            },
            {
            id:482,
            eng:"hairy /хЭйри/",
            ru:"волосатый , hairier , the  hairiest"
            },
            {
            id:483,
            eng:"cozy /кОузи/",
            ru:"уютный , handier , the  handiest"
            },
            {
            id:484,
            eng:"happy /хЭппи/",
            ru:"счастливый , happier , the  happiest"
            },
            {
            id:485,
            eng:"hard /хАрд/",
            ru:"трудный , harder , the  hardest"
            },
            {
            id:486,
            eng:"harsh /хАрш/",
            ru:"суровый , harsher , the  harshest"
            },
            {
            id:487,
            eng:"healthy /хЭлTHи/",
            ru:"здоровый , healthier , the  healthiest"
            },
            {
            id:488,
            eng:"heavy /хЭви/",
            ru:"тяжелый , heavier , the  heaviest"
            },
            {
            id:489,
            eng:"high /хай/",
            ru:"высокий , higher , the  highest"
            },
            {
            id:490,
            eng:"scared /скЭад/",
            ru:"напуганный , more , the  the most"
            },
            {
            id:491,
            eng:"hot",
            ru:"горячий , hotter , the  hottest"
            },
            {
            id:492,
            eng:"humble /хАмбл/",
            ru:"скромный , humbler , the  humblest"
            },
            {
            id:493,
            eng:"hungry /хАнгри/",
            ru:"голодный , hungrier , the  hungriest"
            },
            {
            id:494,
            eng:"icy /Айси/",
            ru:"ледяной , icier , the  iciest"
            },
            {
            id:495,
            eng:"itchy /Итчи/",
            ru:"зудящий , itchier , the  itchiest"
            },
            {
            id:496,
            eng:"juicy /джУси/",
            ru:"сочный , juicier , the  juiciest"
            },
            {
            id:497,
            eng:"kind /кАйнд/",
            ru:"добрый , kinder , the  kindest"
            },
            {
            id:498,
            eng:"large /лАдж/",
            ru:"большой , larger , the  largest"
            },
            {
            id:499,
            eng:"late /лЭйт/",
            ru:"поздний , later , the  latest"
            },
            {
            id:500,
            eng:"lazy /лЭйзи/",
            ru:"ленивый , lazier , the  laziest"
            },
            {
            id:501,
            eng:"light /лАйт/",
            ru:"светлый , lighter , the  lightest"
            },
            {
            id:502,
            eng:"favorite /фЭйворит/",
            ru:"любимый , more , the  most"
            },
            {
            id:503,
            eng:"little /лИтл/",
            ru:"мало , less , the  the least"
            },
            {
            id:504,
            eng:"alive /элАйв/",
            ru:"живой , more , the  most"
            },
            {
            id:505,
            eng:"long /лОн/",
            ru:"длинный , longer , the  longest"
            },
            {
            id:506,
            eng:"loud /лАуд/",
            ru:"громкий , louder , the  loudest"
            },
            {
            id:507,
            eng:"drunk /дрАнк/",
            ru:"пьяный , drunker , the  drunkest"
            },
            {
            id:508,
            eng:"low /лОу/",
            ru:"низкий , lower , the  lowest"
            },
            {
            id:509,
            eng:"mad /мЭд/",
            ru:"безумный , madder , the  maddest"
            },
            {
            id:510,
            eng:"mean /мин/",
            ru:"злобный , meaner , the  meanest"
            },
            {
            id:511,
            eng:"messy /мЭси/",
            ru:"неряшливый , messier , the  messiest"
            },
            {
            id:512,
            eng:"bothering /бАthэрин/",
            ru:"раздражающий , more , the  most"
            },
            {
            id:513,
            eng:"merry /мЭри/",
            ru:"веселый , merrier , the  merriest"
            },
            {
            id:514,
            eng:"narrow /нЭроу/",
            ru:"узкий , narrower , the  narrowest"
            },
            {
            id:515,
            eng:"nasty /нЭсти/",
            ru:"противный , nastier , the  nastiest"
            },
            {
            id:516,
            eng:"naughty /нОти/",
            ru:"непослушный , naughtier , the  naughtiest"
            },
            {
            id:517,
            eng:"near /нИа/",
            ru:"ближайший , nearer , the  nearest"
            },
            {
            id:518,
            eng:"neat /нит/",
            ru:"аккуратный , neater , the  neatest"
            },
            {
            id:519,
            eng:"needy /нИди/",
            ru:"нуждающийся , needier , the  neediest"
            },
            {
            id:520,
            eng:"nervous /нЁвэс/",
            ru:"нервный , more nervous , the  most"
            },
            {
            id:521,
            eng:"new /ньЮ/",
            ru:"новый , newer , the  newest"
            },
            {
            id:522,
            eng:"nice /нАйс/",
            ru:"приятный , nicer , the  nicest"
            },
            {
            id:523,
            eng:"noisy /нОйзи/",
            ru:"шумный , noisier , the  noisiest"
            },
            {
            id:524,
            eng:"breathtaking /брэth тэйкин/",
            ru:"захватывающий дух , more , the  most"
            },
            {
            id:525,
            eng:"oily /Ойли/",
            ru:"маслянистый , oilier , the  oiliest"
            },
            {
            id:526,
            eng:"old /оУлд/",
            ru:"старый , older/elder , the  oldest/eldest"
            },
            {
            id:527,
            eng:"simple or plain",
            ru:"простой , plainer , the  plainest"
            },
            {
            id:528,
            eng:"polite /полАйт/",
            ru:"вежливый , politer , the  politest"
            },
            {
            id:529,
            eng:"poor /пУэ/",
            ru:"бедный , poorer , the  poorest"
            },
            {
            id:530,
            eng:"pretty /прИти/",
            ru:"симпотный , prettier , the  prettiest"
            },
            {
            id:531,
            eng:"proud /прАуд/",
            ru:"гордый , prouder , the  proudest"
            },
            {
            id:532,
            eng:"pure /пьЮэ/",
            ru:"безпримесный , purer , the  purest"
            },
            {
            id:533,
            eng:"quick куИк/",
            ru:"быстрый , quicker , the  quickest"
            },
            {
            id:534,
            eng:"quiet /куАйет/",
            ru:"тихий , quieter , the  quietest"
            },
            {
            id:535,
            eng:"rare/рЭа/",
            ru:"редкий , rarer , the  rarest"
            },
            {
            id:536,
            eng:"raw /ро/",
            ru:"сырой , rawer , the  rawest"
            },
            {
            id:537,
            eng:"rich /рич/",
            ru:"богатый , richer , the  richest"
            },
            {
            id:538,
            eng:"ripe /рАйп/",
            ru:"спелый , riper , the  ripest"
            },
            {
            id:539,
            eng:"risky /рИски/",
            ru:"рискованный , riskier , the  riskiest"
            },
            {
            id:540,
            eng:"spacious /спЭйшэс/",
            ru:"просторный , more , the  most"
            },
            {
            id:541,
            eng:"rough /рАф/",
            ru:"черствый, грубый , rougher , the  roughest"
            },
            {
            id:542,
            eng:"rude /рУд/",
            ru:"грубый в общении , ruder , the  rudest"
            },
            {
            id:543,
            eng:"rusty /рАсти/",
            ru:"ржавый , rustier , the  rustiest"
            },
            {
            id:544,
            eng:"sad /сЭд/",
            ru:"грустный , sadder , the  saddest"
            },
            {
            id:545,
            eng:"safe /сЭйф/",
            ru:"безопасный , safer , the  safest"
            },
            {
            id:546,
            eng:"salty /сОлти/",
            ru:"соленый , saltier , the  saltiest"
            },
            {
            id:547,
            eng:"spoiled /спОйлд/",
            ru:"здравомыслящий , more , the most"
            },
            {
            id:548,
            eng:"scary /скЭри/",
            ru:"пугающий , scarier , the  scariest"
            },
            {
            id:549,
            eng:"correct /корЭкт/",
            ru:"верный , more , the  most"
            },
            {
            id:550,
            eng:"sharp /шАрп/",
            ru:"острый , sharper , the  sharpest"
            },
            {
            id:551,
            eng:"hollow /хОлоу/",
            ru:"пустотелый , more , the  most"
            },
            {
            id:552,
            eng:"short /шорт/",
            ru:"короткий, низкий , shorter , the  shortest"
            },
            {
            id:553,
            eng:"shy /шАй/",
            ru:"застенчивый , shyer , the  shyest"
            },
            {
            id:554,
            eng:"silly /сИли/",
            ru:"глупый , sillier , the  silliest"
            },
            {
            id:555,
            eng:"stupid /стьЮпид/",
            ru:"тупо , more , the  most"
            },
            {
            id:556,
            eng:"sincere /синсИэ/",
            ru:"искренний , sincerer , the  sincerest"
            },
            {
            id:557,
            eng:"skinny /скИни/",
            ru:"тощий , skinnier , the  skinniest"
            },
            {
            id:558,
            eng:"sleepy /слИпи/",
            ru:"сонный , sleepier , the  sleepiest"
            },
            {
            id:559,
            eng:"slim /слИм/",
            ru:"стройный , slimmer , the  slimmest"
            },
            {
            id:560,
            eng:"slimy /слАйми/",
            ru:"слизкий , slimier , the  slimiest"
            },
            {
            id:561,
            eng:"slow /слОу/",
            ru:"медленный , slower , the  slowest"
            },
            {
            id:562,
            eng:"small /смОл/",
            ru:"маленький , smaller , the  smallest"
            },
            {
            id:563,
            eng:"smart /смАрт/",
            ru:"сообразительный , smarter , the  smartest"
            },
            {
            id:564,
            eng:"smelly /смЭли/",
            ru:"вонючий , smellier , the  smelliest"
            },
            {
            id:565,
            eng:"smoky /смОуки/",
            ru:"дымный , smokier , the  smokiest"
            },
            {
            id:566,
            eng:"smooth /смуз/",
            ru:"гладкий , smoother , the  smoothest"
            },
            {
            id:567,
            eng:"soft",
            ru:"мягкий , softer , the  softest"
            },
            {
            id:568,
            eng:"soon /сун/",
            ru:"скоро , sooner , the  soonest"
            },
            {
            id:569,
            eng:"vulgar /вАлгар/",
            ru:"вульгарный , more , the  most"
            },
            {
            id:570,
            eng:"sorry",
            ru:"сожалеющий , sorrier , the  sorriest"
            },
            {
            id:571,
            eng:"sour /сАуэ/",
            ru:"кислый , sourer , the  sourest"
            },
            {
            id:572,
            eng:"spicy /спАйси/",
            ru:"острый , spicier , the  spiciest"
            },
            {
            id:573,
            eng:"steep /стИп/",
            ru:"крутой (наклон) , steeper , the  steepest"
            },
            {
            id:574,
            eng:"bloody /блАди/",
            ru:"кровавый , bloodier , the  bloodiest"
            },
            {
            id:575,
            eng:"strange/weird",
            ru:"странный , stranger , the  strangest"
            },
            {
            id:576,
            eng:"strict /стрИкт/",
            ru:"строгий , stricter , the  strictest"
            },
            {
            id:577,
            eng:"strong /стрОн/",
            ru:"сильный , stronger , the  strongest"
            },
            {
            id:578,
            eng:"sunny /сАнни/",
            ru:"солнечный , sunnier , the  sunniest"
            },
            {
            id:579,
            eng:"sweaty /свЭти/",
            ru:"потный , sweatier , the  sweatiest"
            },
            {
            id:580,
            eng:"sweet",
            ru:"сладкий , sweeter , the  sweetest"
            },
            {
            id:581,
            eng:"fabulous /фЭбьюлэс/",
            ru:"поразительный , more , the  most"
            },
            {
            id:582,
            eng:"tanned /тЭнд/",
            ru:"загорелый , more , the  most"
            },
            {
            id:583,
            eng:"tasty /тЭйсти/",
            ru:"вкусный , tastier , the  tastiest"
            },
            {
            id:584,
            eng:"thin or thick",
            ru:"тонкий/толстый , thicker , the  thickest"
            },
            {
            id:585,
            eng:"immortal",
            ru:"бессмертный , more , the  most"
            },
            {
            id:586,
            eng:"thirsty /Thёсти/",
            ru:"жаждущий , thirstier , the  thirstiest"
            },
            {
            id:587,
            eng:"tiny /тАйни/",
            ru:"крошечный , tinier , the  tiniest"
            },
            {
            id:588,
            eng:"legendary /лэДЖэндэри/",
            ru:"легендарный , more , the  most"
            },
            {
            id:589,
            eng:"true /тру/",
            ru:"верный , truer , the  truest"
            },
            {
            id:590,
            eng:"ugly /Агли/",
            ru:"уродливый , uglier , the  ugliest"
            },
            {
            id:591,
            eng:"warm /вОм/",
            ru:"теплый , warmer , the  warmest"
            },
            {
            id:592,
            eng:"weak /уИк/",
            ru:"слабый , weaker , the  weakest"
            },
            {
            id:593,
            eng:"wealthy /уЭлTHи/",
            ru:"состоятельный , wealthier , the  wealthiest"
            },
            {
            id:594,
            eng:"wet /уЭт/",
            ru:"мокрый , wetter , the  wettest"
            },
            {
            id:595,
            eng:"wide /уАйд/",
            ru:"широкий , wider , the  widest"
            },
            {
            id:596,
            eng:"wild /уАйлд/",
            ru:"дикий , wilder , the  wildest"
            },
            {
            id:597,
            eng:"windy /уИнди/",
            ru:"ветреный , windier , the  windiest"
            },
            {
            id:598,
            eng:"wise /уАйз/",
            ru:"мудрый , wiser , the  wisest"
            },
            {
            id:599,
            eng:"worthy /уОрTHи/",
            ru:"достойный , worthier , the  worthiest"
            },
            {
            id:600,
            eng:"young /ян/",
            ru:"молодой , younger , the  youngest"
            },
            {
            id:601,
            eng:"reliable /рилАибл/",
            ru:"надёжный , more , the  most"
            },
            {
            id:602,
            eng:"picky /пИки/",
            ru:"придирчивый , pickier , the  pickiest"
            },
            {
            id:603,
            eng:"successful /саксЭсфул/",
            ru:"успешный , more , the  most"
            },
            {
            id:604,
            eng:"tricky /трИки/",
            ru:"хитрый , trickier , the  trickiest"
            },
            {
            id:605,
            eng:"good",
            ru:"хороший , better , the  best"
            },
            {
            id:606,
            eng:"bad /бЭд/",
            ru:"плохой , worse , the  worst"
            },
            {
            id:607,
            eng:"much or many",
            ru:"много , more , the  most"
            },
            {
            id:608,
            eng:"special /спЭшл/",
            ru:"особенный , more , the  most"
            },
    ],
    xyz: [

        {
            id: 22,
            eng: "deal , dealt , dealt",
            ru: "иметь дела"
        },
        {
            id: 23,
            eng: "dig , dug , dug",
            ru: "копать"
        },
        {
            id: 24,
            eng: "do , did , done",
            ru: "выполнять, делать, заниматься"
        },
        {
            id: 25,
            eng: "drive , drove , driven",
            ru: "водить"
        },
        {
            id: 26,
            eng: "draw , drew , drawn",
            ru: "рисовать"
        },
        {
            id: 27,
            eng: "drink , drank , drunk",
            ru: "пить"
        },
        {
            id: 28,
            eng: "eat , ate , eaten",
            ru: "кушать"
        },
        {
            id: 29,
            eng: "fall , fell , fallen",
            ru: "падать"
        },
        {
            id: 30,
            eng: "feed , fed , fed",
            ru: "кормить"
        },
        {
            id: 31,
            eng: "feel , felt , felt",
            ru: "чувствовать"
        },
        {
            id: 32,
            eng: "fight , fought , fought",
            ru: "сражаться"
        },
        {
            id: 33,
            eng: "find , found , found",
            ru: "находить"
        },
        {
            id: 34,
            eng: "fly , flew , flown",
            ru: "летать"
        },
        {
            id: 35,
            eng: "forbid , forbade , forbidden",
            ru: "запрещать"
        },
        {
            id: 36,
            eng: "forget , forgot , forgotten",
            ru: "забывать"
        },
        {
            id: 37,
            eng: "forgive , forgave , forgiven",
            ru: "прощать"
        },
        {
            id: 38,
            eng: "freeze , froze , frozen",
            ru: "замерзать"
        },
        {
            id: 39,
            eng: "grow , grew , grown",
            ru: "расти"
        },
        {
            id: 40,
            eng: "get , got , got",
            ru: "получать"
        },
        {
            id: 41,
            eng: "give , gave , given",
            ru: "давать"
        },
        {
            id: 42,
            eng: "go , went , gone",
            ru: "ходить"
        },
        {
            id: 43,
            eng: "have , had , had",
            ru: "иметь"
        },
        {
            id: 44,
            eng: "hear , heard , heard",
            ru: "слышать"
        },
        {
            id: 45,
            eng: "hide , hid , hidden",
            ru: "прятать"
        },
        {
            id: 46,
            eng: "hit , hit , hit",
            ru: "ударять"
        },
        {
            id: 47,
            eng: "hurt , hurt , hurt",
            ru: "причинять боль"
        },
        {
            id: 48,
            eng: "hold , held , held",
            ru: "держать"
        },
        {
            id: 49,
            eng: "keep , kept , kept",
            ru: "хранить"
        },
        {
            id: 50,
            eng: "know , knew , known",
            ru: "знать"
        },

    ],
    spanish: [
        {
            id: 1,
            eng: "Я",
            ru: "Yo soy"
        },
        {
            id: 2,
            eng: "Ты",
            ru: "Tu eres"
        },
        {
            id: 3,
            eng: "Она",
            ru: "Ella es"
        },
        {
            id: 4,
            eng: "Он",
            ru: "El es"
        },
        {
            id: 5,
            eng: "Мы",
            ru: "Nosotros somos"
        },
        {
            id: 6,
            eng: "Вы",
            ru: "Vosotros sois"
        },
        {
            id: 7,
            eng: "Они",
            ru: "Ellos son"
        },
        {
            id: 8,
            eng: "Очень хорошо",
            ru: "muy bien"
        },
        {
            id: 9,
            eng: "Привет",
            ru: "Hola"
        },
        {
            id: 10,
            eng: "Добрый день",
            ru: "Buenos dias"
        },
        {
            id: 11,
            eng: "Добрый вечер",
            ru: "buenos tardes"
        },
        {
            id: 12,
            eng: "Как дела?",
            ru: "Que tal?"
        },
        {
            id: 13,
            eng: "Пока!",
            ru: "Adios!"
        },
        {
            id: 14,
            eng: "Скоро увидимся",
            ru: "Hasta luego"
        },
        {
            id: 15,
            eng: "Очень приятно",
            ru: "Mucho gusto"
        },
        {
            id: 16,
            eng: "Извините, не понял",
            ru: "Perdona"
        },
        {
            id: 17,
            eng: "Взаимно",
            ru: "Encantado(a)"
        },
        {
            id: 18,
            eng: "Кто вы?",
            ru: "Quien eres?"
        },
        {
            id: 19,
            eng: "Зеленый",
            ru: "Verde"
        },
        {
            id: 20,
            eng: "Синий",
            ru: "Azul"
        },
        {
            id: 21,
            eng: "Желтый",
            ru: "Amarilo"
        },
        {
            id: 22,
            eng: "Оранжевый",
            ru: "NaranjA"
        },
        {
            id: 23,
            eng: "Красный",
            ru: "Rojo"
        },
        {
            id: 24,
            eng: "Розовый",
            ru: "RosA"
        },
        {
            id: 25,
            eng: "Фиолетовый",
            ru: "VioletA"
        },
        {
            id: 26,
            eng: "Коричневый",
            ru: "Marron"
        },
        {
            id: 27,
            eng: "Черный",
            ru: "Negro"
        },
        {
            id: 28,
            eng: "Рюкзак",
            ru: "Mochila"
        },
        {
            id: 29,
            eng: "Народ",
            ru: "La gente"
        },
        {
            id: 30,
            eng: "Боже мой",
            ru: "Dios mio"
        },
        {
            id: 31,
            eng: "многоцветный",
            ru: "de mucho colores"
        },
        {
            id: 32,
            eng: "стыд, позор",
            ru: "verguenza"
        },
        {
            id: 33,
            eng: "мне кажется, что",
            ru: "Me parece que"
        },
        {
            id: 34,
            eng: "Где ты сейчас?",
            ru: "Donde estas?"
        },
        {
            id: 35,
            eng: "Откуда ты родом?",
            ru: "De donde eres?"
        },
        {
            id: 36,
            eng: "Я сейчас в России",
            ru: "Estoy en Rusia"
        },
        {
            id: 37,
            eng: "Я живу в США",
            ru: "Soy de Estados Unidos"
        },
        {
            id: 38,
            eng: "Германия",
            ru: "Alemania"
        },
        {
            id: 39,
            eng: "Парк",
            ru: "El parque"
        },
        {
            id: 40,
            eng: "здания, строения",
            ru: "Los edificios"
        },
        {
            id: 41,
            eng: "университет",
            ru: "La universidad"
        },
        {
            id: 42,
            eng: "администрация",
            ru: "El ayuntamiento"
        },
        {
            id: 43,
            eng: "театр",
            ru: "El teatro"
        },
        {
            id: 44,
            eng: "супермаркет",
            ru: "El supermercado"
        },
        {
            id: 45,
            eng: "аптека",
            ru: "La farmacia"
        },
        {
            id: 46,
            eng: "школа",
            ru: "La escuela"
        },
        {
            id: 47,
            eng: "церковь",
            ru: "La iglesia"
        },
        {
            id: 48,
            eng: "завод, фабрика",
            ru: "La fabrica"
        },
        {
            id: 49,
            eng: "аэропорт",
            ru: "El aeropuerto"
        },
        {
            id: 50,
            eng: "собор",
            ru: "La catedral"
        },
        {
            id: 51,
            eng: "магазин",
            ru: "La tienda"
        },
        {
            id: 52,
            eng: "ресторан",
            ru: "El restaurante"
        },
        {
            id: 53,
            eng: "станция метро",
            ru: "La estacion"
        },
        {
            id: 54,
            eng: "стадион",
            ru: "El estadio"
        },
        {
            id: 55,
            eng: "парковка",
            ru: "El aparcamiento"
        },
        {
            id: 56,
            eng: "музей",
            ru: "El museo"
        },
        {
            id: 57,
            eng: "почта",
            ru: "Correos"
        },
        {
            id: 58,
            eng: "отель",
            ru: "El hotel"
        },
        {
            id: 59,
            eng: "бар",
            ru: "El bar"
        },
        {
            id: 60,
            eng: "кино",
            ru: "El cine"
        },
        {
            id: 61,
            eng: "Больница",
            ru: "El hospital"
        },
        {
            id: 62,
            eng: "Что это?",
            ru: "Que es esto?"
        },
        {
            id: 63,
            eng: "кресло",
            ru: "la butaca"
        },
    ],
    abc: [
        {
            id: 1,
            eng: "eat , ate , eaten",
            ru: "кушать, есть"
        },
        {
            id: 2,
            eng: "like, liked, liked",
            ru: "нравиться"
        },
        {
            id: 3,
            eng: "love , loved , loved",
            ru: "любить"
        },
        {
            id: 4,
            eng: "break , broke , broken",
            ru: "ломать"
        },
        {
            id: 5,
            eng: "beat , beat , beaten",
            ru: "бить, побить в соревновании"
        },
        {
            id: 6,
            eng: "become , became , become",
            ru: "становиться"
        },
        {
            id: 7,
            eng: "begin , began , begun",
            ru: "начинать"
        },
        {
            id: 8,
            eng: "blow , blew , blown",
            ru: "дуть"
        },
        {
            id: 9,
            eng: "build , built , built",
            ru: "строить"
        },
        {
            id: 10,
            eng: "burn , burnt , burnt",
            ru: "сжигать или гореть"
        },
        {
            id: 11,
            eng: "buy , bought , bought",
            ru: "покупать"
        },
        {
            id: 12,
            eng: "bring , brought , brought",
            ru: "приносить"
        },
        {
            id: 13,
            eng: "be , was/were , been",
            ru: "быть"
        },
        {
            id: 14,
            eng: "bite , bit , bit",
            ru: "кусать"
        },
        {
            id: 15,
            eng: "come , came , come",
            ru: "приходить"
        },
        {
            id: 16,
            eng: "choose , chose , chosen",
            ru: "выбирать"
        },
        {
            id: 17,
            eng: "catch , caught , caught",
            ru: "ловить"
        },
        {
            id: 18,
            eng: "do , did , done",
            ru: "делать"
        },
    ],
    technologic: [
        {
            id:1,
            eng:"Buy /бАй/",
            ru:"Купи"
            },
            {
            id:2,
            eng:"Use /Юз/",
            ru:"Используй"
            },
            {
            id:3,
            eng:"Break /брЭйк/",
            ru:"Сломай"
            },
            {
            id:4,
            eng:"Fix /фИкс/",
            ru:"Отремонтируй"
            },
            {
            id:5,
            eng:"Trash /трЭш/",
            ru:"Выкини на мусорку"
            },
            {
            id:6,
            eng:"Change /чендж/",
            ru:"Поменяй"
            },
            {
            id:7,
            eng:"Mail /мэил/",
            ru:"Пошли по почте"
            },
            {
            id:8,
            eng:"Upgrade /АпгрЭйд/",
            ru:"Усовершенствуй, обнови"
            },
            {
            id:9,
            eng:"Charge /чАрдж/",
            ru:"Подзаряди"
            },
            {
            id:10,
            eng:"Point /пОинт/",
            ru:"Укажи на"
            },
            {
            id:11,
            eng:"Zoom /зУм/",
            ru:"Увеличь"
            },
            {
            id:12,
            eng:"Press /прЭс/",
            ru:"Нажми"
            },
            {
            id:13,
            eng:"Rename /ринЭйм/",
            ru:"Переименуй"
            },
            {
            id:14,
            eng:"Work /уОрк/",
            ru:"Проработай"
            },
            {
            id:15,
            eng:"Erase /ирЭйз/",
            ru:"Сотри"
            },
            {
            id:16,
            eng:"Write /рАйт/",
            ru:"Напиши"
            },
            {
            id:17,
            eng:"Cut /кАт/",
            ru:"Вырежи"
            },
            {
            id:18,
            eng:"Paste /пЭйст/",
            ru:"Вставь"
            },
            {
            id:19,
            eng:"Save /сЭйв/",
            ru:"Сохрани"
            },
            {
            id:20,
            eng:"Load /лОуд/",
            ru:"Загрузи"
            },
            {
            id:21,
            eng:"Check /чЕк/",
            ru:"Проверь"
            },
            {
            id:22,
            eng:"Rewrite /рирАйт/",
            ru:"Перепиши"
            },
            {
            id:23,
            eng:"Plug /плАг/",
            ru:"Включи в сеть"
            },
            {
            id:24,
            eng:"Play /плЭй/",
            ru:"Играй"
            },
            {
            id:25,
            eng:"Burn /бёрн/",
            ru:"Сожги"
            },
            {
            id:26,
            eng:"Drag /дрЭг/",
            ru:"Перетащи, перетяни"
            },
            {
            id:27,
            eng:"Zip, unzip /зИп, ан3Ип/",
            ru:"Застегни, расстегни"
            },
            {
            id:28,
            eng:"Lock /лок/",
            ru:"Закрой на замок"
            },
            {
            id:29,
            eng:"Fill /фил/",
            ru:"Заполни"
            },
            {
            id:30,
            eng:"Call /кОл/",
            ru:"Позови"
            },
            {
            id:31,
            eng:"Find /фАйнд/",
            ru:"Найди"
            },
            {
            id:32,
            eng:"View /вью/",
            ru:"Осмотри"
            },
            {
            id:33,
            eng:"Code /кОуд/",
            ru:"Закодируй"
            },
            {
            id:34,
            eng:"Jam /джЭм/",
            ru:"замятие, пробка, варенье"
            },
            {
            id:35,
            eng:"Unlock /анлОк/",
            ru:"Разблокируй"
            },
            {
            id:36,
            eng:"Scroll /скрОл/",
            ru:"Полистай, прокрути"
            },
            {
            id:37,
            eng:"Pause /ПОЗ/",
            ru:"Приостанови"
            },
            {
            id:38,
            eng:"Cross /крОс/",
            ru:"Перечеркни"
            },
            {
            id:39,
            eng:"Crack /скрЭк/",
            ru:"взломай"
            },
            {
            id:40,
            eng:"Switch /свИч/",
            ru:"Переключи"
            },
            {
            id:41,
            eng:"Name /нЭйм/",
            ru:"Назови"
            },
            {
            id:42,
            eng:"Tune /тьЮн/",
            ru:"Настрой (про муз.инструменты)"
            },
            {
            id:43,
            eng:"Touch /тАч/",
            ru:"Потрогай"
            },
            {
            id:44,
            eng:"Turn /тЁрн/",
            ru:"Поверни"
            },
            {
            id:45,
            eng:"Rip /рип/",
            ru:"Разорви"
            },
            {
            id:46,
            eng:"Leave /лив/",
            ru:"Покинь, оставь"
            },
            {
            id:47,
            eng:"Stop /стАп/",
            ru:"Прекрати, останови"
            },
            {
            id:48,
            eng:"Format /формАт/",
            ru:"Отформатируй"
            },
            {
            id:49,
            eng:"Print /принт/",
            ru:"Распечатай"
            },
            {
            id:50,
            eng:"Bring /брИн/",
            ru:"Принеси"
            },
            {
            id:51,
            eng:"Pay /пЭй/",
            ru:"Заплати быстро"
            },
            {
            id:52,
            eng:"Click /клИк/",
            ru:"Кликни, нажми"
            },
            {
            id:53,
            eng:"Drop /дрОп/",
            ru:"Урони"
            },
            {
            id:54,
            eng:"Rate /рЭйт/",
            ru:"Дайму оценку, оцени"
            },
            {
            id:55,
            eng:"Update /апдЭйт/",
            ru:"Обнови "
            },
            {
            id:56,
            eng:"Feel /фИл/",
            ru:"Почувствуй"
            },
            {
            id:57,
            eng:"Look at /лУк Эт/",
            ru:"Посмотри на"
            },
    ],
    stickyVerbs1: [
        {
            id: 1,
            eng: "Ты мне нравишься",
            ru: "I like you"
        },
        {
            id: 2,
            eng: "Люблю",
            ru: "/лАв/"
        },
        {
            id: 3,
            eng: "Наслаждаюсь",
            ru: "/энджОй/"
        },
        {
            id: 4,
            eng: "Сдаюсь, прекращаю",
            ru: "/гив ап/"
        },
        {
            id: 5,
            eng: "Остановиться, перестать",
            ru: "/стАп/"
        },
        {
            id: 6,
            eng: "Продолжаю",
            ru: "/гОу он/"
        },
        {
            id: 7,
            eng: "Ненавижу",
            ru: "/хЭйт/"
        },
        {
            id: 8,
            eng: "Ей нравится",
            ru: "She likes"
        },
        {
            id: 9,
            eng: "Мне нравится",
            ru: "I like"
        },
        {
            id: 10,
            eng: "Я люблю",
            ru: "I love"
        },
        {
            id: 11,
            eng: "Он сдается",
            ru: "He gives up"
        },
        {
            id: 12,
            eng: "Шоу продолжается",
            ru: "Show goes on"
        },
        {
            id: 13,
            eng: "Жизнь продолжается",
            ru: "Life goes on"
        },
        {
            id: 14,
            eng: "Никогда не сдавайся",
            ru: "Never give up"
        },
    ],
    adjectivesbodya1: [
        {
            id: 58,
            eng: "firm /фЁрм/",
            ru: "Упругая, упругий"
        },
        {
            id: 59,
            eng: "Fit /фит/",
            ru: "спортивный, атлетичный, подтянутый"
        },
        {
            id: 60,
            eng: "Slim /слИм/",
            ru: "Стройный"
        },
        {
            id: 61,
            eng: "wide /уАйд/",
            ru: "Широкий"
        },
        {
            id: 62,
            eng: "fat /фЭт/",
            ru: "Жирный"
        },
        {
            id: 63,
            eng: "short /шорт/",
            ru: "Короткий"
        },
        {
            id: 64,
            eng: "hairy /хЭйри/",
            ru: "Волосатый"
        },
        {
            id: 65,
            eng: "muscular / мАскьюла /",
            ru: "Мускулистый"
        },
        {
            id: 66,
            eng: "large /ладж/",
            ru: "Крупный"
        },
        {
            id: 67,
            eng: "long /лон/",
            ru: "Длинный"
        },
        {
            id: 68,
            eng: "pierced /пирСТ/",
            ru: "Проколотоый"
        },
        {
            id: 69,
            eng: "crooked / крУкИд /",
            ru: "Кривые"
        },
        {
            id: 70,
            eng: "round /рАунд/",
            ru: "Круглый"
        },
        {
            id: 71,
            eng: "square /скуЭэ/",
            ru: "Квадратный"
        },
        {
            id: 72,
            eng: "skinny /скИни/",
            ru: "Тощий"
        },
        {
            id: 73,
            eng: "thick /THык/",
            ru: "Полный"
        },
        {
            id: 74,
            eng: "thin /THын/",
            ru: "Худой, Тонкий"
        },
        {
            id: 75,
            eng: "Big /биг/",
            ru: "Большой"
        },
        {
            id: 76,
            eng: "Small /смОл/",
            ru: "Маленький"
        },
        {
            id: 77,
            eng: "Upper /Аппэ/",
            ru: "Верхний"
        },
        {
            id: 78,
            eng: "Lower /лОуэ/",
            ru: "Нижний"
        },
        {
            id: 79,
            eng: "Overweight / ОувэУэйт /",
            ru: "Избыток веса"
        },
    ],
    upperBody: [
        {
            id: 1,
            eng: "A head /э хэд/",
            ru: "Голова"
        },
        {
            id: 2,
            eng: "An ear /эн иэ/",
            ru: "Ухо"
        },
        {
            id: 3,
            eng: "Ears /Иаз/",
            ru: "Уши"
        },
        {
            id: 4,
            eng: "An eye /эн Ай/",
            ru: "Глаз"
        },
        {
            id: 5,
            eng: "Eyes /айз/",
            ru: "Глаза"
        },
        {
            id: 6,
            eng: "A nose /э ноуз/",
            ru: "Нос"
        },
        {
            id: 7,
            eng: "A neck /э нэк/",
            ru: "Шея"
        },
        {
            id: 8,
            eng: "A mouth /ау/",
            ru: "Рот"
        },
        {
            id: 9,
            eng: "Lips /липс/",
            ru: "Губы"
        },
        {
            id: 10,
            eng: "Teeth /ти/",
            ru: "Зубы"
        },
        {
            id: 11,
            eng: "A tooth /ту/",
            ru: "Зуб"
        },
        {
            id: 12,
            eng: "eye-brows /ай брАуз/",
            ru: "Брови"
        },
        {
            id: 13,
            eng: "long hair",
            ru: "Длинные Волосы"
        },
        {
            id: 14,
            eng: "short hair",
            ru: "Короткие Волосы"
        },
        {
            id: 15,
            eng: "straight hair /стрЭйт хЭа/",
            ru: "Прямые Волосы"
        },
        {
            id: 16,
            eng: "wavy hair /уэйви хэа/",
            ru: "Волнистые Волосы"
        },
        {
            id: 17,
            eng: "curly hair /кЁли хэа/",
            ru: "Кудрявые Волосы"
        },
        {
            id: 18,
            eng: "Bald /бОлд/",
            ru: "Лысый"
        },
        {
            id: 19,
            eng: "A beard /э бИЕд/",
            ru: "Борода"
        },
        {
            id: 20,
            eng: "A moustache /э мАсташ/",
            ru: "Усы"
        },
        {
            id: 21,
            eng: "A forehead /фОхэд/",
            ru: "Лоб"
        },
        {
            id: 22,
            eng: "A tongue /тан/",
            ru: "Язык"
        },
        {
            id: 23,
            eng: "cheeks /чикс/",
            ru: "Щёки"
        },
        {
            id: 24,
            eng: "A chin /чин/",
            ru: "Подбородок"
        },
        {
            id: 25,
            eng: "A fringe /фриндж/",
            ru: "Чёлка"
        },
        {
            id: 26,
            eng: "freckles /фрЭклз/",
            ru: "Веснушки"
        },
        {
            id: 27,
            eng: "wrinkles /ринклз/",
            ru: "Морщинки, Складки"
        },
        {
            id: 28,
            eng: "A tattoo /татУ/",
            ru: "Татуировка"
        },
    ],
    lowerBody: [
        {
            id: 29,
            eng: "Shoulders /шОулдэрз/",
            ru: "Плечи"
        },
        {
            id: 30,
            eng: "Arms /амз/",
            ru: "Руки"
        },
        {
            id: 31,
            eng: "An arm /эн арм/",
            ru: "Рука"
        },
        {
            id: 32,
            eng: "a breast /э брэст/",
            ru: "Грудь"
        },
        {
            id: 33,
            eng: "a chest /чест/",
            ru: "Грудная Клетка"
        },
        {
            id: 34,
            eng: "A body /боди/",
            ru: "Тело"
        },
        {
            id: 35,
            eng: "hands /хэндз/",
            ru: "Кисти Рук"
        },
        {
            id: 36,
            eng: "belly button",
            ru: "/Бэли Батн/ Пупок (Дословно: Кнопка На Пузе)"
        },
        {
            id: 37,
            eng: "belly",
            ru: "Пузико"
        },
        {
            id: 38,
            eng: "tummy /тамми/",
            ru: "Животик"
        },
        {
            id: 39,
            eng: "bottom /ботм/",
            ru: "Попа"
        },
        {
            id: 40,
            eng: "beer belly /бИр бЭли/",
            ru: "Пивное Пузо"
        },
        {
            id: 41,
            eng: "fingers /фИнГерз/",
            ru: "Пальцы На Руках"
        },
        {
            id: 42,
            eng: "wrist /рист/",
            ru: "Запястье"
        },
        {
            id: 43,
            eng: "lower back",
            ru: "Поясница"
        },
        {
            id: 44,
            eng: "body /боди/",
            ru: "Туловище, Тело"
        },
        {
            id: 45,
            eng: "Body parts /боди партс/",
            ru: "Части Тела"
        },
        {
            id: 46,
            eng: "knee /ни/",
            ru: "Колено"
        },
        {
            id: 47,
            eng: "knees /низ/",
            ru: "Колени"
        },
        {
            id: 48,
            eng: "Legs /лэгз/",
            ru: "Ноги"
        },
        {
            id: 49,
            eng: "a foot /фут/",
            ru: "Ступня"
        },
        {
            id: 50,
            eng: "toes /тоУз/ ",
            ru: "Пальцы На Ногах"
        },
        {
            id: 51,
            eng: "Hair /хЭа/",
            ru: "Волосы"
        },
        {
            id: 52,
            eng: "Back / бЭк/",
            ru: "Спина"
        },
        {
            id: 53,
            eng: "a scar /э скА/",
            ru: "Шрам"
        },
        {
            id: 54,
            eng: "a birthmark /бЁthмак/",
            ru: "Родимое Пятно"
        },
        {
            id: 55,
            eng: "a mole /э мОул/",
            ru: "Родинка"
        },
        {
            id: 56,
            eng: "A heel /хил/",
            ru: "Пятка"
        },
        {
            id: 57,
            eng: "Abs /Эбс/",
            ru: "Пресс (кубики на животе)"
        },
    ],
    allBodyParts: [
        {
            id: 1,
            eng: "A head /э хэд/",
            ru: "Голова"
        },
        {
            id: 2,
            eng: "An ear /эн иэ/",
            ru: "Ухо"
        },
        {
            id: 3,
            eng: "Ears /Иаз/",
            ru: "Уши"
        },
        {
            id: 4,
            eng: "An eye /эн Ай/",
            ru: "Глаз"
        },
        {
            id: 5,
            eng: "Eyes /айз/",
            ru: "Глаза"
        },
        {
            id: 6,
            eng: "A nose /э ноуз/",
            ru: "Нос"
        },
        {
            id: 7,
            eng: "A neck /э нэк/",
            ru: "Шея"
        },
        {
            id: 8,
            eng: "A mouth /ау/",
            ru: "Рот"
        },
        {
            id: 9,
            eng: "Lips /липс/",
            ru: "Губы"
        },
        {
            id: 10,
            eng: "Teeth /ти/",
            ru: "Зубы"
        },
        {
            id: 11,
            eng: "A tooth /ту/",
            ru: "Зуб"
        },
        {
            id: 12,
            eng: "eye-brows /ай брАуз/",
            ru: "Брови"
        },
        {
            id: 13,
            eng: "long hair",
            ru: "Длинные Волосы"
        },
        {
            id: 14,
            eng: "short hair",
            ru: "Короткие Волосы"
        },
        {
            id: 15,
            eng: "straight hair /стрЭйт хЭа/",
            ru: "Прямые Волосы"
        },
        {
            id: 16,
            eng: "wavy hair /уэйви хэа/",
            ru: "Волнистые Волосы"
        },
        {
            id: 17,
            eng: "curly hair /кЁли хэа/",
            ru: "Кудрявые Волосы"
        },
        {
            id: 18,
            eng: "Bald /бОлд/",
            ru: "Лысый"
        },
        {
            id: 19,
            eng: "A beard /э бИЕд/",
            ru: "Борода"
        },
        {
            id: 20,
            eng: "A moustache /э мАсташ/",
            ru: "Усы"
        },
        {
            id: 21,
            eng: "A forehead /фОхэд/",
            ru: "Лоб"
        },
        {
            id: 22,
            eng: "A tongue /тан/",
            ru: "Язык"
        },
        {
            id: 23,
            eng: "cheeks /чикс/",
            ru: "Щёки"
        },
        {
            id: 24,
            eng: "A chin /чин/",
            ru: "Подбородок"
        },
        {
            id: 25,
            eng: "A fringe /фриндж/",
            ru: "Чёлка"
        },
        {
            id: 26,
            eng: "freckles /фрЭклз/",
            ru: "Веснушки"
        },
        {
            id: 27,
            eng: "wrinkles /ринклз/",
            ru: "Морщинки, Складки"
        },
        {
            id: 28,
            eng: "A tattoo /татУ/",
            ru: "Татуировка"
        },
        {
            id: 29,
            eng: "Shoulders /шОулдэрз/",
            ru: "Плечи"
        },
        {
            id: 30,
            eng: "Arms /амз/",
            ru: "Руки"
        },
        {
            id: 31,
            eng: "An arm /эн арм/",
            ru: "Рука"
        },
        {
            id: 32,
            eng: "a breast /э брэст/",
            ru: "Грудь"
        },
        {
            id: 33,
            eng: "a chest /чест/",
            ru: "Грудная Клетка"
        },
        {
            id: 34,
            eng: "A body /боди/",
            ru: "Тело"
        },
        {
            id: 35,
            eng: "hands /хэндз/",
            ru: "Кисти Рук"
        },
        {
            id: 36,
            eng: "belly button",
            ru: "/Бэли Батн/ Пупок (Дословно: Кнопка На Пузе)"
        },
        {
            id: 37,
            eng: "belly",
            ru: "Пузико"
        },
        {
            id: 38,
            eng: "tummy /тамми/",
            ru: "Животик"
        },
        {
            id: 39,
            eng: "bottom /ботм/",
            ru: "Попа"
        },
        {
            id: 40,
            eng: "beer belly /бИр бЭли/",
            ru: "Пивное Пузо"
        },
        {
            id: 41,
            eng: "fingers /фИнГерз/",
            ru: "Пальцы На Руках"
        },
        {
            id: 42,
            eng: "wrist /рист/",
            ru: "Запястье"
        },
        {
            id: 43,
            eng: "lower back",
            ru: "Поясница"
        },
        {
            id: 44,
            eng: "body /боди/",
            ru: "Туловище, Тело"
        },
        {
            id: 45,
            eng: "Body parts /боди партс/",
            ru: "Части Тела"
        },
        {
            id: 46,
            eng: "knee /ни/",
            ru: "Колено"
        },
        {
            id: 47,
            eng: "knees /низ/",
            ru: "Колени"
        },
        {
            id: 48,
            eng: "Legs /лэгз/",
            ru: "Ноги"
        },
        {
            id: 49,
            eng: "a foot /фут/",
            ru: "Ступня"
        },
        {
            id: 50,
            eng: "toes /тоУз/ ",
            ru: "Пальцы На Ногах"
        },
        {
            id: 51,
            eng: "Hair /хЭа/",
            ru: "Волосы"
        },
        {
            id: 52,
            eng: "Back / бЭк/",
            ru: "Спина"
        },
        {
            id: 53,
            eng: "a scar /э скА/",
            ru: "Шрам"
        },
        {
            id: 54,
            eng: "a birthmark /бЁthмак/",
            ru: "Родимое Пятно"
        },
        {
            id: 55,
            eng: "a mole /э мОул/",
            ru: "Родинка"
        },
        {
            id: 56,
            eng: "A heel /хил/",
            ru: "Пятка"
        },
        {
            id: 57,
            eng: "Abs /Эбс/",
            ru: "Пресс (кубики на животе)"
        },
        {
            id: 58,
            eng: "firm/фёрм/",
            ru: "Упругая, упругий"
        },
        {
            id: 59,
            eng: "Fit",
            ru: "Спортивный, атлетичный, подтянутый"
        },
        {
            id: 60,
            eng: "Slim",
            ru: "Стройный"
        },
        {
            id: 61,
            eng: "wide /уайд/",
            ru: "Широкий"
        },
        {
            id: 62,
            eng: "fat /фэт/",
            ru: "Жирный"
        },
        {
            id: 63,
            eng: "short /шорт/",
            ru: "Короткий"
        },
        {
            id: 64,
            eng: "hairy /хЭйри/",
            ru: "Волосатый"
        },
        {
            id: 65,
            eng: "muscular /мАскьюла/",
            ru: "Мускулистый"
        },
        {
            id: 66,
            eng: "large /ладж/",
            ru: "Крупный"
        },
        {
            id: 67,
            eng: "long /лон/",
            ru: "Длинный"
        },
        {
            id: 68,
            eng: "pierced /пирст/",
            ru: "Проколотоый"
        },
        {
            id: 69,
            eng: "crooked /крукИд/",
            ru: "Кривые"
        },
        {
            id: 70,
            eng: "round /рАунд/",
            ru: "Круглый"
        },
        {
            id: 71,
            eng: "square /скуЭэ/",
            ru: "Квадратный"
        },
        {
            id: 72,
            eng: "skinny /скИни/",
            ru: "Тощий"
        },
        {
            id: 73,
            eng: "thick",
            ru: "Толстый"
        },
        {
            id: 74,
            eng: "thin",
            ru: "Худой, Тонкий"
        },
        {
            id: 75,
            eng: "Big/биг/",
            ru: "Большой"
        },
        {
            id: 76,
            eng: "Small/смОл/",
            ru: "Маленький"
        },
    ],
    affirmations1: [
        {
            id: 1,
            eng: "Affirmation /эффирмэйшн/",
            ru: "Аффирмация"
        },
        {
            id: 2,
            eng: "Statement /стЭйтмэнт/",
            ru: "Утверждение"
        },
        {
            id: 3,
            eng: "Believe /белив/",
            ru: "Верить"
        },
        {
            id: 4,
            eng: "I am proud of you /прауд/",
            ru: "Я горд за тебя. Я горжусь тобой."
        },
        {
            id: 5,
            eng: "I feel safe /сЭйф/",
            ru: "Я чувствую себя безопасно"
        },
        {
            id: 6,
            eng: "Make up ideas /Айдиас/",
            ru: "Придумывать идеи"
        },
        {
            id: 7,
            eng: "I do my best",
            ru: "Я стараюсь по максимуму"
        },
        {
            id: 8,
            eng: "Achievements /эчИвмэнтс/",
            ru: "Достижения"
        },
        {
            id: 9,
            eng: "I am loved /лавд/",
            ru: "Меня любят"
        },
        {
            id: 10,
            eng: "I am not afraid of it /нат эфрЭйд/",
            ru: "Мне это не страшно"
        },
        {
            id: 11,
            eng: "My feelings matter /мЭттэ/",
            ru: "Мои чувства имеют значение"
        },
        {
            id: 12,
            eng: "I take care of myself",
            ru: "Я проявляю заботу о себе"
        },
        {
            id: 13,
            eng: "They believe in themselves",
            ru: "Они верят в себя"
        },
        {
            id: 14,
            eng: "She does her best",
            ru: "Она старается по максимуму"
        },
        {
            id: 15,
            eng: "Are you proud of yourself?",
            ru: "Ты горд за себя? Гордишься собой?"
        },
        {
            id: 16,
            eng: "Awesome! /осм/",
            ru: "Офигенно!"
        },
        {
            id: 17,
            eng: "I feel happy",
            ru: "Я чувствую себя счастливым"
        },
        {
            id: 18,
            eng: "Overcome /Оувэкам/",
            ru: "Преодолевать"
        },
        {
            id: 19,
            eng: "Challenge /челендж/",
            ru: "Испытание, вызов"
        },
        {
            id: 20,
            eng: "I trust myself /траст майсэлф/",
            ru: "Я доверяю себе"
        },
        {
            id: 21,
            eng: "I follow my heart /фОллоу май харт/",
            ru: "Я следую сердцу /харт/"
        },
        {
            id: 22,
            eng: "I am the boss of my time",
            ru: "Я хозяин своего времени"
        },
        {
            id: 23,
            eng: "A goal /гОул/",
            ru: "Цель"
        },
        {
            id: 24,
            eng: "Allow /элАу/",
            ru: "Давать разрешение, позволять"
        },
        {
            id: 25,
            eng: "Guide /гайд/",
            ru: "Гид, путеводитель"
        },
        {
            id: 26,
            eng: "Inner /Иннэ/",
            ru: "Внутренний"
        },
        {
            id: 27,
            eng: "I do what I say",
            ru: "Я делаю то, что я говорю"
        },
    ],
    affirmations2: [
        {
            id: 1,
            eng: "Affirmations",
            ru: "Аффирмации"
        },
        {
            id: 2,
            eng: "Statements",
            ru: "Утверждения"
        },
        {
            id: 3,
            eng: "Who do you believe?",
            ru: "Кому ты веришь?"
        },
        {
            id: 4,
            eng: "Are you proud of this?",
            ru: "Ты гордишься этим?"
        },
        {
            id: 5,
            eng: "I don't feel safe",
            ru: "Я не чувствую себя безопасно"
        },
        {
            id: 6,
            eng: "Make up ideas",
            ru: "Придумывать идеи"
        },
        {
            id: 7,
            eng: "We do our best",
            ru: "Мы стараемя по максимуму"
        },
        {
            id: 8,
            eng: "Achievements",
            ru: "Достижения"
        },
        {
            id: 9,
            eng: "I am loved",
            ru: "Меня любят"
        },
        {
            id: 10,
            eng: "I am not afraid of anything",
            ru: "Мне ничего не страшно"
        },
        {
            id: 11,
            eng: "My feelings matter",
            ru: "Мои чувства имеют значение"
        },
        {
            id: 12,
            eng: "I take care of myself",
            ru: "Я проявляю заботу о себе"
        },
        {
            id: 13,
            eng: "They believe in themselves",
            ru: "Они верят в себя"
        },
        {
            id: 14,
            eng: "She does her best",
            ru: "Она старается по максимуму"
        },
        {
            id: 15,
            eng: "They do their best",
            ru: "Они стараются по максимуму"
        },
        {
            id: 16,
            eng: "Awesome",
            ru: "Офигенно"
        },
        {
            id: 17,
            eng: "I feel happy",
            ru: "Я чувствую себя счастливым"
        },
        {
            id: 18,
            eng: "Overcome challenges",
            ru: "Преодолевать испытания"
        },
        {
            id: 19,
            eng: "It's a hard challenge ",
            ru: "Это трудный вызов"
        },
        {
            id: 20,
            eng: "I trust only Vincent",
            ru: "Я доверяю только училке!"
        },
        {
            id: 21,
            eng: "I follow my heart",
            ru: "Я следую сердцу /харт/"
        },
        {
            id: 22,
            eng: "I am the boss of my time",
            ru: "Я хозяин своего времени"
        },
        {
            id: 23,
            eng: "A goal",
            ru: "Цель"
        },
        {
            id: 24,
            eng: "Allow",
            ru: "Давать разрешение, позволять"
        },
        {
            id: 25,
            eng: "Inner guide",
            ru: "Внутреннее чутьё"
        },
    ],
    naughtyVerbs: [
        {
            id: 225,
            eng: "ломать",
            ru: "break , broke , broken"
        },
        {
            id: 226,
            eng: "начинать",
            ru: "begin , began , begun"
        },
        {
            id: 227,
            eng: "дуть",
            ru: "blow , blew , blown"
        },
        {
            id: 228,
            eng: "строить",
            ru: "build , built , built"
        },
        {
            id: 229,
            eng: "сжигать, гореть",
            ru: "burn , burnt , burnt"
        },
        {
            id: 230,
            eng: "покупать",
            ru: "buy , bought , bought"
        },
        {
            id: 231,
            eng: "приносить",
            ru: "bring , brought , brought"
        },
        {
            id: 232,
            eng: "кусать",
            ru: "bite , bit , bit"
        },
        {
            id: 233,
            eng: "делать, выполнять",
            ru: "do, did, done"
        },
        {
            id: 234,
            eng: "пить, выпивать",
            ru: "drink , drank , drunk"
        },
        {
            id: 235,
            eng: "нарушать обещания",
            ru: "Break promises"
        },
        {
            id: 236,
            eng: "могу, мог",
            ru: "can, could"
        },
        {
            id: 237,
            eng: "Разбивать какие-то вещи",
            ru: "Break some things"
        },
    ],
    thirtieth: [
        {
            id: 99,
            eng: "first",
            ru: "первый"
        },
        {
            id: 100,
            eng: "second",
            ru: "второй"
        },
        {
            id: 101,
            eng: "third",
            ru: "третий"
        },
        {
            id: 102,
            eng: "fourth",
            ru: "четвертый"
        },
        {
            id: 103,
            eng: "fifth",
            ru: "пятый"
        },
        {
            id: 104,
            eng: "sixth",
            ru: "шестой"
        },
        {
            id: 105,
            eng: "eighth",
            ru: "восьмой"
        },
        {
            id: 106,
            eng: "ninth",
            ru: "девятый"
        },
        {
            id: 107,
            eng: "tenth",
            ru: "десятый"
        },
        {
            id: 108,
            eng: "twelvth",
            ru: "двенадцатый"
        },
        {
            id: 109,
            eng: "twentieth",
            ru: "двадцатый"
        },
        {
            id: 110,
            eng: "fortieth",
            ru: "сороковой"
        },
        {
            id: 111,
            eng: "fourteenth",
            ru: "четырнадцатый"
        },
        {
            id: 112,
            eng: "zeroth",
            ru: "нулевой"
        },
        {
            id: 113,
            eng: "thirtieth",
            ru: "тринадцатый"
        },
        {
            id: 114,
            eng: "hundredth",
            ru: "сотый"
        },
        {
            id: 115,
            eng: "thousandth",
            ru: "тысячный"
        },
    ],
    testing: [
        {
            id: 1,
            ru: " id 1 ru ",
            eng: " id 1 eng "
            // sound: "можно ли произношение добавить?"
        },
        {
            id: 2,
            ru: " id 2 ru ",
            eng: " id 2 eng "
        },
        {
            id: 3,
            ru: " id 3 ru ",
            eng: " id 3 eng "
        },
        {
            id: 4,
            ru: " id 4 ru ",
            eng: " id 4 eng "
        },
        {
            id: 5,
            ru: " id 5 ru ",
            eng: " id 5 eng "
        },
        {
            id: 6,
            ru: " id 6 ru ",
            eng: " id 6 eng "
        },
        {
            id: 7,
            ru: " id 7 ru ",
            eng: " id 7 eng "
        },
    ],
    formulas0: [
        {
            id: 78,
            eng: "	2 plus 14 is	",
            ru: "	sixteen	"
        },
        {
            id: 79,
            eng: "	8 plus 12 is	",
            ru: "	twenty	"
        },
        {
            id: 80,
            eng: "	10 plus two is	",
            ru: "	twelve	"
        },
        {
            id: 81,
            eng: "	9 plus nine is	",
            ru: "	eighteen	"
        },
        {
            id: 82,
            eng: "	10 plus 7 is	",
            ru: "	seventeen	"
        },
        {
            id: 83,
            eng: "	23 minus 8 is	",
            ru: "	fifteen	"
        },
        {
            id: 84,
            eng: "	ten plus 9 is	",
            ru: "	nineteen	"
        },
        {
            id: 85,
            eng: "	5 plus eight is	",
            ru: "	thirteen	"
        },
        {
            id: 86,
            eng: "	eight + three is	",
            ru: "	eleven	"
        },
        {
            id: 87,
            eng: "	four + four is	",
            ru: "	eight 	"
        },
        {
            id: 88,
            eng: "	five + four is	",
            ru: "	nine 	"
        },
        {
            id: 89,
            eng: "	nine - two is	",
            ru: "	seven 	"
        },
        {
            id: 90,
            eng: "	9 minus 6 is	",
            ru: "	three	"
        },
        {
            id: 91,
            eng: "	20 - ten is	",
            ru: "	thirty	"
        },
        {
            id: 92,
            eng: "	30 + 3 is	",
            ru: "	thirty three	"
        },
        {
            id: 93,
            eng: "	20 + 8 is	",
            ru: "	twenty eight	"
        },
        {
            id: 94,
            eng: "	89 minus 30 is	",
            ru: "	fifty nine	"
        },
        {
            id: 95,
            eng: "	99 minus 30 is	",
            ru: "	sixty nine	"
        },
        {
            id: 96,
            eng: "	90 + 8 is	",
            ru: "	ninety eight	"
        },
        {
            id: 97,
            eng: "	twelve + 88 is	",
            ru: "	a hundred	"
        },
        {
            id: 98,
            eng: "	plus + произносится:	",
            ru: "	плас	"
        },
        {
            id: 99,
            eng: "	minus - произносится:	",
            ru: "	майнэс	"
        },
        {
            id: 100,
            eng: "	равно = по-английски:	",
            ru: "	is	"
        },
        {
            id: 101,
            eng: "	20 + twelve is	",
            ru: "	thirty two	"
        },
        {
            id: 102,
            eng: "	15 + 50 is	",
            ru: "	sixty five	"
        },
    ],
    questions0: [
        {
            id: 1,
            eng: "	When? /уэн/	",
            ru: "	Когда?	"
        },
        {
            id: 2,
            eng: "	Where? /уэ э/	",
            ru: "	Где?	"
        },
        {
            id: 3,
            eng: "	What? /уот/	",
            ru: "	Что?	"
        },
        {
            id: 4,
            eng: "	Why? /уай/	",
            ru: "	Для чего? Зачем? Почему?	"
        },
        {
            id: 5,
            eng: "	How? /хау/	",
            ru: "	Как?	"
        },
        {
            id: 6,
            eng: "	Who? /ху/	",
            ru: "	Кто?	"
        },
        {
            id: 7,
            eng: "	Whose? /хуз/	",
            ru: "	Чей?	"
        },
        {
            id: 8,
            eng: "	What time?	",
            ru: "	Во сколько?	"
        },
        {
            id: 9,
            eng: "	What color?	",
            ru: "	Какого цвета?	"
        },
        {
            id: 10,
            eng: "	What size?	",
            ru: "	Какого размера?	"
        },
        {
            id: 11,
            eng: "	How many pelmeni?	",
            ru: "	Сколько пельменей?	"
        },
        {
            id: 12,
            eng: "	How much money?	",
            ru: "	Сколько денег?	"
        },
        {
            id: 13,
            eng: "	How old?	",
            ru: "	Какого возраста?	"
        },
        {
            id: 14,
            eng: "	How far?	",
            ru: "	Насколько далеко?	"
        },
        {
            id: 15,
            eng: "	How often?	",
            ru: "	Как часто?	"
        },
        {
            id: 16,
            eng: "	How long?	",
            ru: "	Как долго?	"
        },
        {
            id: 17,
            eng: "	How tall?	",
            ru: "	Какого роста?	"
        },
        {
            id: 18,
            eng: "	What year?	",
            ru: "	Какого года?	"
        },
        {
            id: 19,
            eng: "	What flavor?	",
            ru: "	Какого вкуса?	"
        },
        {
            id: 20,
            eng: "	What song?	",
            ru: "	Что за песня?	"
        },
        {
            id: 21,
            eng: "	What shape??	",
            ru: "	Какой формы?	"
        },
        {
            id: 22,
            eng: "	With whom?	",
            ru: "	С кем?	"
        },
        {
            id: 23,
            eng: "	How much time?	",
            ru: "	Сколько времени?	"
        },
        {
            id: 24,
            eng: "	Come again?	",
            ru: "	Чего, простите?	"
        },
        {
            id: 25,
            eng: "	How come?	",
            ru: "	Как так вышло?	"
        },
        {
            id: 26,
            eng: "	Why the hell?	",
            ru: "	Какого чёрта?!?	"
        },
        {
            id: 27,
            eng: "	Where is it?	",
            ru: "	Где это?	"
        },
        {
            id: 28,
            eng: "	Who is here?	",
            ru: "	Кто здесь?	"
        },
        {
            id: 29,
            eng: "	Who are they?	",
            ru: "	Кто они?	"
        },
        {
            id: 30,
            eng: "	Where am I?	",
            ru: "	Где я?	"
        },
    ],
    numbers0: [
        {
            id: 29,
            eng: "	one	",
            ru: "	1	"
        },
        {
            id: 30,
            eng: "	two	",
            ru: "	2	"
        },
        {
            id: 31,
            eng: "	three	",
            ru: "	3	"
        },
        {
            id: 32,
            eng: "	four	",
            ru: "	4	"
        },
        {
            id: 33,
            eng: "	five	",
            ru: "	5	"
        },
        {
            id: 34,
            eng: "	six	",
            ru: "	6	"
        },
        {
            id: 35,
            eng: "	seven	",
            ru: "	7	"
        },
        {
            id: 36,
            eng: "	eight	",
            ru: "	8	"
        },
        {
            id: 37,
            eng: "	nine	",
            ru: "	9	"
        },
        {
            id: 38,
            eng: "	ten	",
            ru: "	10	"
        },
        {
            id: 39,
            eng: "	eleven	",
            ru: "	11	"
        },
        {
            id: 40,
            eng: "	twelve	",
            ru: "	12	"
        },
        {
            id: 41,
            eng: "	thirteen	",
            ru: "	13	"
        },
        {
            id: 42,
            eng: "	fourteen	",
            ru: "	14	"
        },
        {
            id: 43,
            eng: "	fifteen	",
            ru: "	15	"
        },
        {
            id: 44,
            eng: "	sixteen	",
            ru: "	16	"
        },
        {
            id: 45,
            eng: "	seventeen	",
            ru: "	17	"
        },
        {
            id: 46,
            eng: "	eighteen	",
            ru: "	18	"
        },
        {
            id: 47,
            eng: "	nineteen	",
            ru: "	19	"
        },
        {
            id: 48,
            eng: "	twenty	",
            ru: "	20	"
        },
        {
            id: 49,
            eng: "	thirty	",
            ru: "	30	"
        },
        {
            id: 50,
            eng: "	fourty	",
            ru: "	40	"
        },
        {
            id: 51,
            eng: "	fifty	",
            ru: "	50	"
        },
        {
            id: 52,
            eng: "	sixty	",
            ru: "	60	"
        },
        {
            id: 53,
            eng: "	seventy	",
            ru: "	70	"
        },
        {
            id: 54,
            eng: "	eighty	",
            ru: "	80	"
        },
        {
            id: 55,
            eng: "	ninety	",
            ru: "	90	"
        },
        {
            id: 56,
            eng: "	hundred	",
            ru: "	100	"
        },
        {
            id: 57,
            eng: "	thousand	",
            ru: "	1000	"
        },
        {
            id: 58,
            eng: "	billion	",
            ru: "	1000000	"
        },

    ],

    
    q1: [

        {
            id: 1,
            eng: "	when	",
            ru: "	когда	"
        },
        {
            id: 2,
            eng: "	why	",
            ru: "	почему, зачем, для чего	"
        },
        {
            id: 3,
            eng: "	what time	",
            ru: "	во сколько	"
        },
        {
            id: 4,
            eng: "	where",
            ru: "	где	"
        },
        {
            id: 5,
            eng: "	whose	",
            ru: "	чей	"
        },
        {
            id: 6,
            eng: "	how	",
            ru: "	как	"
        },
        {
            id: 7,
            eng: "	what	",
            ru: "	какой, что	"
        },
        {
            id: 8,
            eng: "	what color	",
            ru: "	какого цвета	"
        },
        {
            id: 9,
            eng: "	what size	",
            ru: "	какого размера	"
        },
        {
            id: 10,
            eng: "	what car	",
            ru: "	какая машина	"
        },
        {
            id: 11,
            eng: "	Who	",
            ru: "	кто, кого	"
        },
        {
            id: 12,
            eng: "	How often	",
            ru: "	как часто	"
        },
        {
            id: 13,
            eng: "	How long	",
            ru: "	как долго	"
        },
        {
            id: 14,
            eng: "	How fast	",
            ru: "	как быстро	"
        },
        {
            id: 15,
            eng: "	How many pelmenis	",
            ru: "	сколько пельменей	"
        },
        {
            id: 16,
            eng: "	How much money	",
            ru: "	сколько денег	"
        },
        {
            id: 17,
            eng: "	with or without	",
            ru: "	с или без	"
        },

    ],
   
   
    cook3: [
        {
            id: 1,
            eng: "	pour /пО/	",
            ru: "	наливать	"
        },
        {
            id: 2,
            eng: "	a sip	",
            ru: "	глоток	"
        },
        {
            id: 3,
            eng: "	a lid	",
            ru: "	крышка	"
        },
        {
            id: 4,
            eng: "	spread butter	",
            ru: "	намазать масло	"
        },
        {
            id: 5,
            eng: "	squeeze	",
            ru: "	сжимать	"
        },
        {
            id: 6,
            eng: "	To health!	",
            ru: "	За здоровье!	"
        },
        {
            id: 7,
            eng: "	weigh /уЭй/	",
            ru: "	Взвешивать	"
        },
        {
            id: 8,
            eng: "	measure /мЭжэ/	",
            ru: "	мерить, измерять	"
        },
        {
            id: 9,
            eng: "	mix	",
            ru: "	перемешать	"
        },
        {
            id: 10,
            eng: "	put	",
            ru: "	поставить, положить, разместить	"
        },
        {
            id: 11,
            eng: "	scales	",
            ru: "	весы	"
        },
        {
            id: 12,
            eng: "	layer	",
            ru: "	слой	"
        },
        {
            id: 13,
            eng: "	wash hands	",
            ru: "	Мыть руки	"
        },
        {
            id: 14,
            eng: "	peel	",
            ru: "	чистить от кожуры	"
        },
        {
            id: 15,
            eng: "	seasoning	",
            ru: "	приправа	"
        },
        {
            id: 16,
            eng: "	dip	",
            ru: "	Макать	"
        },
        {
            id: 17,
            eng: "	crush	",
            ru: "	Давить	"
        },
        {
            id: 18,
            eng: "	prepare	",
            ru: "	Подготавливать, приготавливаться	"
        },
        {
            id: 19,
            eng: "	sprinkle 	",
            ru: "	посыпать	"
        },
        {
            id: 20,
            eng: "	decorate 	",
            ru: "	украшать	"
        },
        {
            id: 21,
            eng: "	flip	",
            ru: "	переворачивать	"
        },
        {
            id: 22,
            eng: "	microwave /мАйкровэйв/	",
            ru: "	греть в микроволновке	"
        },
        {
            id: 23,
            eng: "	put in a fridge	",
            ru: "	класть в холодильник	"
        },
        {
            id: 24,
            eng: "	put in a freezer	",
            ru: "	класть в морозильник	"
        },
        {
            id: 25,
            eng: "	blend	",
            ru: "	измельчить, перемолоть	"
        },
        {
            id: 26,
            eng: "	heat	",
            ru: "	Жар, огонь	"
        },
        {
            id: 27,
            eng: "	roast	",
            ru: "	Запекать	"
        },
        {
            id: 28,
            eng: "	sharpen 	",
            ru: "	Точить	"
        },
        {
            id: 29,
            eng: "	serve	",
            ru: "	Сервировать, обслуживать, подавать	"
        },
        {
            id: 30,
            eng: "	celebrate	",
            ru: "	Праздновать, отмечать	"
        },
        {
            id: 31,
            eng: "	add	",
            ru: "	добавлять	"
        },
        {
            id: 32,
            eng: "	sift	",
            ru: "	просеивать	"
        },
        {
            id: 33,
            eng: "	roll	",
            ru: "	раскатывать, катить	"
        },
        {
            id: 34,
            eng: "	toss	",
            ru: "	подкидывать	"
        },
        {
            id: 35,
            eng: "	grate	",
            ru: "	натереть на терке	"
        },
        {
            id: 36,
            eng: "	top	",
            ru: "	положить сверху	"
        },
        {
            id: 37,
            eng: "	bake	",
            ru: "	выпекать	"
        },
        {
            id: 38,
            eng: "	cool down	",
            ru: "	остывать	"
        },
        {
            id: 39,
            eng: "	carve	",
            ru: "	вырезАть	"
        },
        {
            id: 40,
            eng: "	mash /мэш/	",
            ru: "	толочь	"
        },
        {
            id: 41,
            eng: "	tenderize /тЭндэрайз/	",
            ru: "	отбивать, делать мягким	"
        },
        {
            id: 42,
            eng: "	BBQ /бАрбекю/	",
            ru: "	Делать Барбекю (шашлыки)	"
        },
        {
            id: 43,
            eng: "	simmer	",
            ru: "	готовить на минимальной мощности	"
        },
        {
            id: 44,
            eng: "	melt	",
            ru: "	растопить, таять	"
        },
        {
            id: 45,
            eng: "	fry	",
            ru: "	жарить	"
        },
        {
            id: 46,
            eng: "	sauté /cАтэй/	",
            ru: "	обжаривать	"
        },
        {
            id: 47,
            eng: "	boil	",
            ru: "	варить, кипятить	"
        },
        {
            id: 48,
            eng: "	A pot	",
            ru: "	Кастрлюля	"
        },
        {
            id: 49,
            eng: "	stir	",
            ru: "	Помешивать	"
        },
        {
            id: 50,
            eng: "	taste	",
            ru: "	Пробовать на вкус	"
        },
        {
            id: 51,
            eng: "	light	",
            ru: "	включать огонь	"
        },
        {
            id: 52,
            eng: "	cover with a lid	",
            ru: "	накрывать крышкой	"
        },
        {
            id: 53,
            eng: "	remove	",
            ru: "	убирать	"
        },
        {
            id: 54,
            eng: "	turn on/off	",
            ru: "	включать или выключать	"
        },
        {
            id: 55,
            eng: "	steam	",
            ru: "	пар / готовить на пару	"
        },
        {
            id: 56,
            eng: "	whisk with a whisker	",
            ru: "	взбивать венчиком	"
        },
        {
            id: 57,
            eng: "	A frying pan	",
            ru: "	сковорода	"
        },
        {
            id: 58,
            eng: "	drain	",
            ru: "	слить воду	"
        },
        {
            id: 59,
            eng: "	rinse	",
            ru: "	прополоскать, ополоснуть	"
        },
        {
            id: 60,
            eng: "	uncork	",
            ru: "	открыть пробку	"
        },
        {
            id: 61,
            eng: "	an oven	",
            ru: "	духовка	"
        },
        {
            id: 62,
            eng: "	a stove	",
            ru: "	печь	"
        },
        {
            id: 63,
            eng: "	a fork	",
            ru: "	вилка	"
        },
        {
            id: 64,
            eng: "	a spoon	",
            ru: "	ложка	"
        },
        {
            id: 65,
            eng: "	a cup and a mug	",
            ru: "	чашка и кружка	"
        },
        {
            id: 66,
            eng: "	a knife / нАйф/	",
            ru: "	нож и два ножа	"
        },
        {
            id: 67,
            eng: "	a cutting board	",
            ru: "	разделоочная доска	"
        },
        {
            id: 68,
            eng: "	foil	",
            ru: "	фольга	"
        },
        {
            id: 69,
            eng: "	sausage /сОсидж/	",
            ru: "	Колбаса и сосиски	"
        },
        {
            id: 70,
            eng: "	Delicious /делИшэс / dinner	",
            ru: "	Наивкуснейший ужин	"
        },
        {
            id: 71,
            eng: "	chop	",
            ru: "	рубить	"
        },
        {
            id: 72,
            eng: "	salt / солт/	",
            ru: "	соль	"
        },
        {
            id: 73,
            eng: "	cover	",
            ru: "	накрывать	"
        },
        {
            id: 74,
            eng: "	lid	",
            ru: "	крышка	"
        },
        {
            id: 75,
            eng: "	whisk	",
            ru: "	взбивать	"
        },
        {
            id: 76,
            eng: "	cut in pieces	",
            ru: "	порезвать на кусочки	"
        },
        {
            id: 77,
            eng: "	spices /спАйсиз/	",
            ru: "	специи	"
        },
        {
            id: 78,
            eng: "	pepper /пЭппэ/	",
            ru: "	перец	"
        },
        {
            id: 79,
            eng: "	baking paper /пЭйпа/	",
            ru: "	бумага для выпечки	"
        },
        {
            id: 80,
            eng: "	spatula /спЭчула/	",
            ru: "	лопатка	"
        },
        {
            id: 81,
            eng: "	a tablespoon /тЭйблспун/	",
            ru: "	столовая ложка	"
        },
        {
            id: 82,
            eng: "	a teaspoon /тИспун/	",
            ru: "	чайная ложка	"
        },
        {
            id: 83,
            eng: "	a wooden spoon	",
            ru: "	деревянная ложка	"
        },
        {
            id: 84,
            eng: "	sugar /щУга/	",
            ru: "	сахар	"
        },
        {
            id: 85,
            eng: "	honey /хАни/	",
            ru: "	мёд	"
        },
        {
            id: 86,
            eng: "	pancakes /пЭнкейкс/	",
            ru: "	блины	"
        },
        {
            id: 87,
            eng: "	a cook	",
            ru: "	повар	"
        },
        {
            id: 88,
            eng: "	to cook	",
            ru: "	готовить	"
        },
        {
            id: 89,
            eng: "	a chef /шЭф/	",
            ru: "	главный повар	"
        },
    ],
    mission90: [
        {
            id: 1,
            ru: "и потом сюда 2",
            eng: "1 Нажми сюда	"
        },
        {
            id: 2,
            ru: "Привет!",
            eng: "Hi!"
        },
        {
            id: 3,
            ru: "= six",
            eng: "2 + 2 + 2 is ="
        },
        {
            id: 4,
            ru: "...eight",
            eng: "восемь на английском это..."
        },
        {
            id: 5,
            ru: "You can do it!",
            eng: "Ты справишься!"
        },
        {
            id: 6,
            ru: "Отличная работа агент!",
            eng: "Great job, agent!"
        },
    ],
    mission0: [
        {
            id: 1,
            ru: "1",
            eng: "one /уан/"
        },
        {
            id: 2,
            ru: "номер два",
            eng: "number two / нАмбэ ту/"
        },
        {
            id: 3,
            ru: "не Фри и не Сри",
            eng: "three межзубный звук/TH/"
        },
        {
            id: 4,
            ru: "4",
            eng: "four /фо/"
        },
        {
            id: 5,
            ru: "5 не файФ",
            eng: "five /файВ/"
        },
        {
            id: 6,
            ru: "не сИкс и не sex",
            eng: "six /сЫкс/"
        },
        {
            id: 7,
            ru: "7",
            eng: "seven /cЭвн/"
        },
        {
            id: 8,
            ru: "8",
            eng: "eight /Эйт/"
        },
        {
            id: 9,
            ru: "9",
            eng: "nine / нАйн/"
        },
        {
            id: 10,
            ru: "10",
            eng: "ten / тЭн/"
        },
        {
            id: 11,
            ru: "11",
            eng: "eleven / илЭвн/"
        },
        {
            id: 12,
            ru: "12",
            eng: "twelve / твЭлВ/"
        },

        {
            id: 13,
            ru: "не сЁртин и не Фёртин. Язык между зубов!",
            eng: "thirteen межзубный звук/TH/"
        },

        {
            id: 14,
            ru: "тянем ударение 14 teeeeeen ",
            eng: "foureen / фотИИИИн/"
        },

        {
            id: 15,
            ru: "долгий звук И 15 окончание teen",
            eng: "fifteen / фифтИИИн/"
        },
        {
            id: 16,
            ru: "16 ударение на И",
            eng: "sixteen / сыкстИн/"
        },
        {
            id: 17,
            ru: "20 уверенно!",
            eng: "twenty / твЭнти/"
        },
        {
            id: 17,
            ru: "/пЭа/ ПАРА = 2",
            eng: "a pair"
        },
        {
            id: 18,
            ru: "номера, числа",
            eng: "numbers /нАмбэz/"
        },
        {
            id: 19,
            ru: "цифры",
            eng: "digits /дИджитс/"
        },
        {
            id: 20,
            ru: "второй",
            eng: "the second 2nd"
        },
        {
            id: 21,
            ru: "самый первый",
            eng: "the first / 1st фёст/"
        },
        {
            id: 22,
            ru: "/ фром зироу ту найн/",
            eng: "0 - 9 от ноля до девяти"
        },



    ],
    mission2: [
        {
            id: 1,
            ru: "	...Эйт	",
            eng: "	8...	"
        },
        {
            id: 2,
            ru: "	..eight	",
            eng: "	восемь..	"
        },
        {
            id: 3,
            ru: "	...твэлв	",
            eng: "	12...	"
        },
        {
            id: 4,
            ru: "	...твэнти	",
            eng: "	20...	"
        },
        {
            id: 5,
            ru: "	..is 12	",
            eng: "	six plus six..	"
        },
        {
            id: 6,
            ru: "	is twenty 20	",
            eng: "	Ten plus ten	"
        },
        {
            id: 7,
            ru: "	..is sixteen	",
            eng: "	Eight plus eight..	"
        },
        {
            id: 8,
            ru: "	..is nine	",
            eng: "	one plus eight..	"
        },
        {
            id: 9,
            ru: "	....12	",
            eng: "	твЭлв....	"
        },
        {
            id: 10,
            ru: "	Десять	",
            eng: "	Ten	"
        },
        {
            id: 11,
            ru: "	Одиннадцать	",
            eng: "	Eleven	"
        },
        {
            id: 12,
            ru: "	(Двенадцать)	",
            eng: "	(Twelve)	"
        },
        {
            id: 13,
            ru: "	Тринадцать	",
            eng: "	Thirteen	"
        },
        {
            id: 14,
            ru: "	Четырнадцать	",
            eng: "	Fourteen	"
        },
        {
            id: 15,
            ru: "	Пятнадцать	",
            eng: "	Fifteen	"
        },
        {
            id: 16,
            ru: "	Шестнадцать	",
            eng: "	Sixteen	"
        },
        {
            id: 17,
            ru: "	Семнадцать	",
            eng: "	Seventeen	"
        },
        {
            id: 18,
            ru: "	Восемнадцать	",
            eng: "	Eighteen	"
        },
        {
            id: 19,
            ru: "	Девятнадцать	",
            eng: "	Nineteen	"
        },
        {
            id: 20,
            ru: "	Двадцать	",
            eng: "	Twenty	"
        },
        {
            id: 21,
            ru: "	Двадцать один	",
            eng: "	Twenty-one	"
        },
        {
            id: 22,
            ru: "	Двадцать два	",
            eng: "	Twenty-two	"
        },
        {
            id: 23,
            ru: "	Тридцать	",
            eng: "	Thirty	"
        },
        {
            id: 24,
            ru: "	Тридцать три	",
            eng: "	Thirty-three	"
        },
        {
            id: 25,
            ru: "	Сорок	",
            eng: "	Forty	"
        },
        {
            id: 26,
            ru: "	Пятьдесят пять	",
            eng: "	Fifty-five /фИфти файВ/	"
        },
        {
            id: 27,
            ru: " /э хАндрэд хАнгри хУлигэнz/ 100 голодных хулиганов",
            eng: " a hundred hungry hooligans "
        },


    ],
    mission3: [
        {
            id: 1,
            ru: "красивый",
            eng: "handsome /хЭнсам/"
        },
        {
            id: 2,
            ru: "все (ударение на Э)",
            eng: "everybody /Эврибади/"
        },
        {
            id: 3,
            ru: "Все люди",
            eng: "all people /ол пипл/"
        },
        {
            id: 4,
            ru: "ставим is, если нет глагола",
            eng: "после it,he,she"
        },
        {
            id: 5,
            ru: "ставим ARE, если нет глагола",
            eng: "после you,we,they"
        },
        {
            id: 6,
            ru: " I am a secret agent",
            eng: " Я - секретный агент"
        },
        {
            id: 7,
            ru: " Винсент мой друг",
            eng: " Vismyfriend"
        },
        {
            id: 8,
            ru: " Я особенная",
            eng: " I'm special"
        },
        {
            id: 9,
            ru: " I am special /спэшл/",
            eng: " Я особенный"
        },
        {
            id: 10,
            ru: " You are special! /ю а спэшл/",
            eng: " Особенные вы!"
        },
        {
            id: 11,
            ru: " Я не ленивая z4dniцa",
            eng: " I'm not a lazzy bOttom!"
        },


    ],

    seasons: [
        {
            id: 1,
            ru: "	лето	",
            eng: "	summer /сАмэ/	"
        },
        {
            id: 2,
            ru: "	зима	",
            eng: "	winter	/уИнтэ/"
        },
        {
            id: 3,
            ru: "	осень	",
            eng: "	fall /фол/ or autumn /Отэм/	"
        },
        {
            id: 4,
            ru: "	весна	",
            eng: "	spring /сприн/	"
        },
        {
            id: 5,
            ru: "	январь	",
            eng: "	january "
        },
        {
            id: 6,
            ru: "	февраль	",
            eng: "	february	"
        },
        {
            id: 7,
            ru: "	март	",
            eng: "	march	"
        },
        {
            id: 8,
            ru: "	апрель	",
            eng: "	april /Эйприл/"
        },
        {
            id: 9,
            ru: "	май	",
            eng: "	may /мэй/"
        },
        {
            id: 10,
            ru: "	июнь	",
            eng: "	june	/джун/"
        },
        {
            id: 11,
            ru: "	июль	",
            eng: "	july	/джулАй/"
        },
        {
            id: 12,
            ru: "	август	",
            eng: "	august	/Огэст/"
        },
        {
            id: 13,
            ru: "	сентябрь	",
            eng: "	september	"
        },
        {
            id: 14,
            ru: "	октябрь	",
            eng: "	october	"
        },
        {
            id: 15,
            ru: "	ноябрь	",
            eng: "	november	"
        },
        {
            id: 16,
            ru: "	декабрь	",
            eng: "	december	"
        },

    ],
    animals: [
        {
            id: 101,
            ru: "	Лев	",
            eng: "	Lion /лАйэн/"
        },
        {
            id: 102,
            ru: "	Слон	",
            eng: "	Elephant	"
        },
        {
            id: 103,
            ru: "	Тигр	",
            eng: "	Tiger /тАйгэ/	"
        },
        {
            id: 104,
            ru: "	жираф	",
            eng: "	Giraffe	"
        },
        {
            id: 105,
            ru: "	Обезьяна	",
            eng: "	Monkey	"
        },
        {
            id: 106,
            ru: "	Панда	",
            eng: "	Panda	/пЭнда/"
        },
        {
            id: 107,
            ru: "	Полярный медведь	",
            eng: "	a bear with beer /бЭа/ /бИэ/"
        },
        {
            id: 108,
            ru: "	пингвин	",
            eng: "	Penguin	"
        },
        {
            id: 109,
            ru: "	Кенгуру	",
            eng: "	Kangaroo	"
        },
        {
            id: 110,
            ru: "	Крокодил	",
            eng: "	Crocodile	/крокодАйл"
        },
        {
            id: 111,
            ru: "	Волк	",
            eng: "	Wolf /вулф/"
        },
        {
            id: 112,
            ru: "	Овечка	",
            eng: "	Sheep	"
        },
        {
            id: 113,
            ru: "	Зебра	",
            eng: "	Zebra	/зИбрэ/"
        },
        {
            id: 114,
            ru: "	Лиса	",
            eng: "	Fox	"
        },
        {
            id: 115,
            ru: "	Курица	",
            eng: "	hen	/хэн/"
        },
        {
            id: 116,
            ru: "	Петух	",
            eng: "	Rooster	/рУстэ/"
        }
    ],
    commonVerbs: [
        {
            id: 1,
            eng: "break something",
            ru: "сломать что-то"
        },
        {
            id: 2,
            eng: "beat somebody",
            ru: "побить кого-то"
        },
        {
            id: 3,
            eng: "dance on the table",
            ru: "танцевать на столе"
        },
        {
            id: 4,
            eng: "go to the toilet",
            ru: "пойти в туалет"
        },
        {
            id: 5,
            eng: "go to a bar",
            ru: "пойти в бар"
        },
        {
            id: 6,
            eng: "go to the GYM",
            ru: "пойти в спортзал"
        },
        {
            id: 7,
            eng: "buy something",
            ru: "купить что-то"
        },
        {
            id: 8,
            eng: "buy food",
            ru: "купить еду"
        },
        {
            id: 9,
            eng: "bring the children to school",
            ru: "отвести детей в школу"
        },
        {
            id: 10,
            eng: "bite nails",
            ru: "грызть ногти"
        },
        {
            id: 11,
            eng: "choose songs to sing",
            ru: "выбирать песни для пения"
        },
        {
            id: 12,
            eng: "deal with hooligans",
            ru: "иметь дела с хулиганами"
        },
        {
            id: 13,
            eng: "dig potatoes",
            ru: "копать картошку"
        },
        {
            id: 14,
            eng: "do English homework",
            ru: "делать домашнее задание по английскому"
        },
        {
            id: 15,
            eng: "drive a car",
            ru: "водить машину"
        },
        {
            id: 16,
            eng: "draw pictures",
            ru: "рисовать картинки"
        },
        {
            id: 17,
            eng: "eat something",
            ru: "есть что-то"
        },
        {
            id: 18,
            eng: "kiss somebody",
            ru: "поцеловать кого-то"
        },
        {
            id: 19,
            eng: "listen to music",
            ru: "слушать музыку"
        },
        {
            id: 20,
            eng: "drink alcohol",
            ru: "пить алкоголь"
        },
        {
            id: 21,
            eng: "hide money",
            ru: "скрывать деньги"
        },
        {
            id: 22,
            eng: "learn something new",
            ru: "учить что-то новое"
        },
        {
            id: 23,
            eng: "lose something",
            ru: "потерять что-то"
        },
        {
            id: 24,
            eng: "tell a lie",
            ru: "сказать ложь"
        },
        {
            id: 25,
            eng: "sleep",
            ru: "спать"
        },
        {
            id: 26,
            eng: "cook",
            ru: "готовить"
        },
        {
            id: 27,
            eng: "cry",
            ru: "плакать"
        },
        {
            id: 28,
            eng: "think about something",
            ru: "думать о чем-то"
        },
        {
            id: 29,
            eng: "play computer games",
            ru: "играть в компьютерные игры"
        },
        {
            id: 30,
            eng: "speak with somebody",
            ru: "разговаривать с кем-то"
        },
        {
            id: 31,
            eng: "wash a car",
            ru: "мыть машину"
        },
        {
            id: 32,
            eng: "watch TV",
            ru: "смотреть телевизор"
        },
        {
            id: 33,
            eng: "check e-mails",
            ru: "проверять электронную почту"
        },
        {
            id: 34,
            eng: "call someone",
            ru: "позвонить кому-то"
        },
        {
            id: 35,
            eng: "call the police",
            ru: "вызвать полицию"
        },
        {
            id: 36,
            eng: "run to work",
            ru: "бежать на работу"
        },
        {
            id: 37,
            eng: "work hard",
            ru: "усердно работать"
        },
        {
            id: 38,
            eng: "meet with somebody",
            ru: "встречаться с кем-то"
        },
        {
            id: 39,
            eng: "ride a horse",
            ru: "ездить верхом на лошади"
        },
        {
            id: 40,
            eng: "read a book",
            ru: "читать книгу"
        },
        {
            id: 41,
            eng: "sing favorite songs",
            ru: "петь любимые песни"
        },
        {
            id: 42,
            eng: "speak English",
            ru: "разговаривать на английском"
        },
        {
            id: 43,
            eng: "fly to a business trip",
            ru: "лететь в командировку"
        },
        {
            id: 44,
            eng: "send romantic postcards to a teacher",
            ru: "отправлять романтические открытки учителю"
        },
        {
            id: 45,
            eng: "spend a lot of money",
            ru: "тратить много денег"
        },
        {
            id: 46,
            eng: "sleep",
            ru: "спать"
        },
        {
            id: 47,
            eng: "walk with a dog",
            ru: "гулять с собакой"
        },
        {
            id: 48,
            eng: "relax",
            ru: "расслабиться"
        },
        {
            id: 49,
            eng: "swim in a swimming pool",
            ru: "плавать в бассейне"
        },
        {
            id: 50,
            eng: "swim in the sea",
            ru: "плавать в море"
        },
        {
            id: 51,
            eng: "have a shower",
            ru: "принимать душ"
        },
        {
            id: 52,
            eng: "do yoga",
            ru: "заниматься йогой"
        },
        {
            id: 53,
            eng: "sit in the cinema",
            ru: "сидеть в кинотеатре"
        },
        {
            id: 54,
            eng: "write dirty comments under somebody's post",
            ru: "писать грязные комментарии под чьим-то постом"
        },
        {
            id: 55,
            eng: "drink behind the garages",
            ru: "пить за гаражами"
        },
        {
            id: 56,
            eng: "smoke a cigar",
            ru: "курить сигару"
        },
        {
            id: 57,
            eng: "ride a motorbike",
            ru: "ездить на мотоцикле"
        },
        {
            id: 58,
            eng: "ride a bicycle",
            ru: "кататься на велосипеде"
        },
        {
            id: 59,
            eng: "touch my bellybutton",
            ru: "трогать свой пупок"
        },
        {
            id: 60,
            eng: "wash my body",
            ru: "мыть свое тело"
        },
        {
            id: 61,
            eng: "wash floors",
            ru: "мыть полы"
        },
        {
            id: 62,
            eng: "do the housework",
            ru: "заниматься домашними делами"
        },
    ],
    numbers: [
        {
            id: 301,
            ru: "	один	",
            eng: "	one	"
        },
        {
            id: 302,
            ru: "	два	",
            eng: "	two	"
        },
        {
            id: 303,
            ru: "	три	",
            eng: "	three	"
        },
        {
            id: 304,
            ru: "	четыре	",
            eng: "	four	"
        },
        {
            id: 305,
            ru: "	пять	",
            eng: "	five	"
        },
        {
            id: 306,
            ru: "	шесть	",
            eng: "	six	"
        },
        {
            id: 307,
            ru: "	семь	",
            eng: "	seven	"
        },
    ],
    Irregular_verbs_1_form: [
        {
            id: 1001,
            ru: "	ломать	",
            eng: "	break	"
        },
        {
            id: 1002,
            ru: "	бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 1003,
            ru: "	становиться	",
            eng: "	become	"
        },
        {
            id: 1004,
            ru: "	начинать	",
            eng: "	begin	"
        },
        {
            id: 1005,
            ru: "	дуть	",
            eng: "	blow	"
        },
        {
            id: 1006,
            ru: "	строить	",
            eng: "	build	"
        },
        {
            id: 1007,
            ru: "	сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 1008,
            ru: "	покупать	",
            eng: "	buy	"
        },
        {
            id: 1009,
            ru: "	приносить	",
            eng: "	bring	"
        },
        {
            id: 1010,
            ru: "	быть	",
            eng: "	be	"
        },
        {
            id: 1011,
            ru: "	кусать	",
            eng: "	bite	"
        },
        {
            id: 1012,
            ru: "	приходить	",
            eng: "	come	"
        },
        {
            id: 1013,
            ru: "	выбирать	",
            eng: "	choose	"
        },
        {
            id: 1014,
            ru: "	ловить	",
            eng: "	catch	"
        },
        {
            id: 1015,
            ru: "	ползать	",
            eng: "	creep	"
        },
        {
            id: 1016,
            ru: "	стоить	",
            eng: "	cost	"
        },
        {
            id: 1017,
            ru: "	резать	",
            eng: "	cut	"
        },
        {
            id: 1018,
            ru: "	иметь дела	",
            eng: "	deal	"
        },
        {
            id: 1019,
            ru: "	копать	",
            eng: "	dig	"
        },
        {
            id: 1020,
            ru: "	делать	",
            eng: "	do	"
        },
        {
            id: 1021,
            ru: "	водить	",
            eng: "	drive	"
        },
        {
            id: 1022,
            ru: "	рисовать	",
            eng: "	draw	"
        },
        {
            id: 1023,
            ru: "	пить	",
            eng: "	drink	"
        },
        {
            id: 1024,
            ru: "	кушать	",
            eng: "	eat	"
        },
        {
            id: 1025,
            ru: "	падать	",
            eng: "	fall	"
        },
        {
            id: 1026,
            ru: "	кормить	",
            eng: "	feed	"
        },
        {
            id: 1027,
            ru: "	чувствовать	",
            eng: "	feel	"
        },
        {
            id: 1028,
            ru: "	сражаться	",
            eng: "	fight	"
        },
        {
            id: 1029,
            ru: "	находить	",
            eng: "	find	"
        },
        {
            id: 1030,
            ru: "	летать	",
            eng: "	fly	"
        },
        {
            id: 1031,
            ru: "	запрещать	",
            eng: "	forbid	"
        },
        {
            id: 1032,
            ru: "	забывать	",
            eng: "	forget	"
        },
        {
            id: 1033,
            ru: "	прощать	",
            eng: "	forgive	"
        },
        {
            id: 1034,
            ru: "	замерзать	",
            eng: "	freeze	"
        },
        {
            id: 1035,
            ru: "	расти	",
            eng: "	grow	"
        },
        {
            id: 1036,
            ru: "	получать	",
            eng: "	get	"
        },
        {
            id: 1037,
            ru: "	давать	",
            eng: "	give	"
        },
        {
            id: 1038,
            ru: "	ходить	",
            eng: "	go	"
        },
        {
            id: 1039,
            ru: "	иметь	",
            eng: "	have	"
        },
        {
            id: 1040,
            ru: "	слышать	",
            eng: "	hear	"
        },
        {
            id: 1041,
            ru: "	прятать	",
            eng: "	hide	"
        },
        {
            id: 1042,
            ru: "	ударять	",
            eng: "	hit	"
        },
        {
            id: 1043,
            ru: "	причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 1044,
            ru: "	держать	",
            eng: "	hold	"
        },
        {
            id: 1045,
            ru: "	хранить	",
            eng: "	keep	"
        },
        {
            id: 1046,
            ru: "	знать	",
            eng: "	know	"
        },
        {
            id: 1047,
            ru: "	изучать	",
            eng: "	learn	"
        },
        {
            id: 1048,
            ru: "	покидать	",
            eng: "	leave	"
        },
        {
            id: 1049,
            ru: "	давать в долг	",
            eng: "	lend	"
        },
        {
            id: 1050,
            ru: "	позволять	",
            eng: "	let	"
        },
        {
            id: 1051,
            ru: "	терять	",
            eng: "	lose	"
        },
        {
            id: 1052,
            ru: "	укладывать	",
            eng: "	lay	"
        },
        {
            id: 1053,
            ru: "	лежать	",
            eng: "	lie	"
        },
        {
            id: 1054,
            ru: "	делать, создавать	",
            eng: "	make	"
        },
        {
            id: 1055,
            ru: "	иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 1056,
            ru: "	встречаться	",
            eng: "	meet	"
        },
        {
            id: 1057,
            ru: "	платить	",
            eng: "	pay	"
        },
        {
            id: 1058,
            ru: "	класть	",
            eng: "	put	"
        },
        {
            id: 1059,
            ru: "	читать	",
            eng: "	read	"
        },
        {
            id: 1060,
            ru: "	ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 1061,
            ru: "	звенеть	",
            eng: "	ring	"
        },
        {
            id: 1062,
            ru: "	бегать	",
            eng: "	run	"
        },
        {
            id: 1063,
            ru: "	подниматься	",
            eng: "	rise	"
        },
        {
            id: 1064,
            ru: "	 сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 1065,
            ru: "	(у)видеть	",
            eng: "	see	"
        },
        {
            id: 1066,
            ru: "	продавать	",
            eng: "	sell	"
        },
        {
            id: 1067,
            ru: "	отправлять	",
            eng: "	send	"
        },
        {
            id: 1068,
            ru: "	трясти	",
            eng: "	shake	"
        },
        {
            id: 1069,
            ru: "	стрелять	",
            eng: "	shoot	"
        },
        {
            id: 1070,
            ru: "	захлопывать	",
            eng: "	shut	"
        },
        {
            id: 1071,
            ru: "	петь	",
            eng: "	sing	"
        },
        {
            id: 1072,
            ru: "	затонуть	",
            eng: "	sink	"
        },
        {
            id: 1073,
            ru: "	сидеть	",
            eng: "	sit	"
        },
        {
            id: 1074,
            ru: "	спать	",
            eng: "	sleep	"
        },
        {
            id: 1075,
            ru: "	скользить	",
            eng: "	slide	"
        },
        {
            id: 1076,
            ru: "	разговаривать	",
            eng: "	speak	"
        },
        {
            id: 1077,
            ru: "	тратить	",
            eng: "	spend	"
        },
        {
            id: 1078,
            ru: "	плеваться	",
            eng: "	spit	"
        },
        {
            id: 1079,
            ru: "	встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 1080,
            ru: "	воровать	",
            eng: "	steal	"
        },
        {
            id: 1081,
            ru: "	приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 1082,
            ru: "	вонять	",
            eng: "	stink	"
        },
        {
            id: 1083,
            ru: "	ударять	",
            eng: "	strike	"
        },
        {
            id: 1084,
            ru: "	клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 1085,
            ru: "	подметать	",
            eng: "	sweep	"
        },
        {
            id: 1086,
            ru: "	плавать	",
            eng: "	swim	"
        },
        {
            id: 1087,
            ru: "	качаться	",
            eng: "	swing	"
        },
        {
            id: 1088,
            ru: "	брать	",
            eng: "	take	"
        },
        {
            id: 1089,
            ru: "	 обучать	",
            eng: "	teach	"
        },
        {
            id: 1090,
            ru: "	рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 1091,
            ru: "	рассказывать	",
            eng: "	tell	"
        },
        {
            id: 1092,
            ru: "	думать	",
            eng: "	think	"
        },
        {
            id: 1093,
            ru: "	бросать	",
            eng: "	throw	"
        },
        {
            id: 1094,
            ru: "	понимать	",
            eng: "	understand	"
        },
        {
            id: 1095,
            ru: "	 будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 1096,
            ru: "	носить одежду	",
            eng: "	wear	"
        },
        {
            id: 1097,
            ru: "	писать	",
            eng: "	write	"
        },
        {
            id: 1098,
            ru: "	хныкать	",
            eng: "	weep	"
        },
        {
            id: 1099,
            ru: "	выигрывать	",
            eng: "	win	"
        },
        {
            id: 1100,
            ru: "	неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 1101,
            ru: "	неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 1102,
            ru: "	ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 1103,
            ru: "	неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 1104,
            ru: "	переспать	",
            eng: "	oversleep	"
        },
        {
            id: 1105,
            ru: "	переесть 	",
            eng: "	overeat	"
        },
        {
            id: 1106,
            ru: "	переплатить	",
            eng: "	overpay	"
        },
        {
            id: 1107,
            ru: "	могу - мог	",
            eng: "	can	"
        },
        {
            id: 1108,
            ru: "	следует	",
            eng: "	shall	"
        },
        {
            id: 1109,
            ru: "	можно / возможно	",
            eng: "	may	"
        },
        {
            id: 1110,
            ru: "	 в будущем / бы	",
            eng: "	will	"
        },
    ],
    Irr_v_3_forms: [
        {
            id: 3001,
            ru: "	broke , broken	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known	",
            eng: "	know	"
        },
        {
            id: 3047,
            ru: "	learnt , learnt	",
            eng: "	learn	"
        },
        {
            id: 3048,
            ru: "	left , left	",
            eng: "	leave	"
        },
        {
            id: 3049,
            ru: "	lent , lent	",
            eng: "	lend	"
        },
        {
            id: 3050,
            ru: "	let , let	",
            eng: "	let	"
        },
        {
            id: 3051,
            ru: "	lost , lost	",
            eng: "	lose	"
        },
        {
            id: 3052,
            ru: "	laid , laid	",
            eng: "	lay	"
        },
        {
            id: 3053,
            ru: "	lay , lain	",
            eng: "	lie	"
        },
        {
            id: 3054,
            ru: "	made , made	",
            eng: "	make	"
        },
        {
            id: 3055,
            ru: "	meant , meant	",
            eng: "	mean	"
        },
        {
            id: 3056,
            ru: "	met , met	",
            eng: "	meet	"
        },
        {
            id: 3057,
            ru: "	paid , paid	",
            eng: "	pay	"
        },
        {
            id: 3058,
            ru: "	put , put	",
            eng: "	put	"
        },
        {
            id: 3059,
            ru: "	read , read	",
            eng: "	read	"
        },
        {
            id: 3060,
            ru: "	rode , ridden	",
            eng: "	ride	"
        },
        {
            id: 3061,
            ru: "	rang , rung	",
            eng: "	ring	"
        },
        {
            id: 3062,
            ru: "	ran , run	",
            eng: "	run	"
        },
        {
            id: 3063,
            ru: "	rose , risen	",
            eng: "	rise	"
        },
        {
            id: 3064,
            ru: "	said , said	",
            eng: "	say	"
        },
        {
            id: 3065,
            ru: "	saw , seen	",
            eng: "	see	"
        },
        {
            id: 3066,
            ru: "	sold , sold	",
            eng: "	sell	"
        },
        {
            id: 3067,
            ru: "	sent , sent	",
            eng: "	send	"
        },
        {
            id: 3068,
            ru: "	shook , shaken	",
            eng: "	shake	"
        },
        {
            id: 3069,
            ru: "	shot , shot	",
            eng: "	shoot	"
        },
        {
            id: 3070,
            ru: "	shut , shut	",
            eng: "	shut	"
        },
        {
            id: 3071,
            ru: "	sang , sung	",
            eng: "	sing	"
        },
        {
            id: 3072,
            ru: "	sank , sunk	",
            eng: "	sink	"
        },
        {
            id: 3073,
            ru: "	sat , sat	",
            eng: "	sit	"
        },
        {
            id: 3074,
            ru: "	slept , slept	",
            eng: "	sleep	"
        },
        {
            id: 3075,
            ru: "	slid , slid	",
            eng: "	slide	"
        },
        {
            id: 3076,
            ru: "	spoke , spoken	",
            eng: "	speak	"
        },
        {
            id: 3077,
            ru: "	spent , spent	",
            eng: "	spend	"
        },
        {
            id: 3078,
            ru: "	spat , spat	",
            eng: "	spit	"
        },
        {
            id: 3079,
            ru: "	stood , stood	",
            eng: "	stand	"
        },
        {
            id: 3080,
            ru: "	stole , stolen	",
            eng: "	steal	"
        },
        {
            id: 3081,
            ru: "	stuck , stuck	",
            eng: "	stick	"
        },
        {
            id: 3082,
            ru: "	stank , stunk	",
            eng: "	stink	"
        },
        {
            id: 3083,
            ru: "	struck , struck	",
            eng: "	strike	"
        },
        {
            id: 3084,
            ru: "	swore , sworn	",
            eng: "	swear	"
        },
        {
            id: 3085,
            ru: "	swept , swept	",
            eng: "	sweep	"
        },
        {
            id: 3086,
            ru: "	swam , swum	",
            eng: "	swim	"
        },
        {
            id: 3087,
            ru: "	swung , swung	",
            eng: "	swing	"
        },
        {
            id: 3088,
            ru: "	took , taken	",
            eng: "	take	"
        },
        {
            id: 3089,
            ru: "	taught , taught	",
            eng: "	teach	"
        },
        {
            id: 3090,
            ru: "	tore , torn	",
            eng: "	tear	"
        },
        {
            id: 3091,
            ru: "	told , told	",
            eng: "	tell	"
        },
        {
            id: 3092,
            ru: "	thought , thought	",
            eng: "	think	"
        },
        {
            id: 3093,
            ru: "	threw , thrown	",
            eng: "	throw	"
        },
        {
            id: 3094,
            ru: "	understood , understood	",
            eng: "	understand	"
        },
        {
            id: 3095,
            ru: "	woke up , woken up	",
            eng: "	wake up	"
        },
        {
            id: 3096,
            ru: "	wore , worn	",
            eng: "	wear	"
        },
        {
            id: 3097,
            ru: "	wrote , written	",
            eng: "	write	"
        },
        {
            id: 3098,
            ru: "	wept , wept	",
            eng: "	weep	"
        },
        {
            id: 3099,
            ru: "	won , won	",
            eng: "	win	"
        },
        {
            id: 3100,
            ru: "	misunderstood , misunderstood	",
            eng: "	misunderstand	"
        },
        {
            id: 3101,
            ru: "	misspelt , misspelt	",
            eng: "	misspell	"
        },
        {
            id: 3102,
            ru: "	mistook , mistaken	",
            eng: "	mistake	"
        },
        {
            id: 3103,
            ru: "	misheard , misheard	",
            eng: "	mishear	"
        },
        {
            id: 3104,
            ru: "	overslept , overslept	",
            eng: "	oversleep	"
        },
        {
            id: 3105,
            ru: "	overate , overeaten	",
            eng: "	overeat	"
        },
        {
            id: 3106,
            ru: "	overpaid , overpaid	",
            eng: "	overpay	"
        },
        {
            id: 3107,
            ru: "	could	",
            eng: "	can	"
        },
        {
            id: 3108,
            ru: "	should	",
            eng: "	shall	"
        },
        {
            id: 3109,
            ru: "	might	",
            eng: "	may	"
        },
        {
            id: 3110,
            ru: "	would + V	",
            eng: "	will	"
        },
    ],
    Irregular_verbs_En_Ru: [
        {
            id: 2001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 2002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 2003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 2004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 2005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 2006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 2007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 2008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 2009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 2010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 2011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 2012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 2013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 2014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 2015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 2016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 2017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 2018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 2019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 2020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 2021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 2022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 2023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 2024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 2025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 2026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 2027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 2028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 2029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 2030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 2031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 2032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 2033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 2034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 2035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 2036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 2037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 2038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 2039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 2040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 2041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 2042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 2043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 2044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 2045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 2046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 2047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 2048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 2049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
        {
            id: 2050,
            ru: "	let , let , позволять	",
            eng: "	let	"
        },
        {
            id: 2051,
            ru: "	lost , lost , терять	",
            eng: "	lose	"
        },
        {
            id: 2052,
            ru: "	laid , laid , укладывать	",
            eng: "	lay	"
        },
        {
            id: 2053,
            ru: "	lay , lain , лежать	",
            eng: "	lie	"
        },
        {
            id: 2054,
            ru: "	made , made , делать, создавать	",
            eng: "	make	"
        },
        {
            id: 2055,
            ru: "	meant , meant , иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 2056,
            ru: "	met , met , встречаться	",
            eng: "	meet	"
        },
        {
            id: 2057,
            ru: "	paid , paid , платить	",
            eng: "	pay	"
        },
        {
            id: 2058,
            ru: "	put , put , класть	",
            eng: "	put	"
        },
        {
            id: 2059,
            ru: "	read , read , читать	",
            eng: "	read	"
        },
        {
            id: 2060,
            ru: "	rode , ridden , ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 2061,
            ru: "	rang , rung , звенеть	",
            eng: "	ring	"
        },
        {
            id: 2062,
            ru: "	ran , run , бегать	",
            eng: "	run	"
        },
        {
            id: 2063,
            ru: "	rose , risen , подниматься	",
            eng: "	rise	"
        },
        {
            id: 2064,
            ru: "	said , said ,  сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 2065,
            ru: "	saw , seen , (у)видеть	",
            eng: "	see	"
        },
        {
            id: 2066,
            ru: "	sold , sold , продавать	",
            eng: "	sell	"
        },
        {
            id: 2067,
            ru: "	sent , sent , отправлять	",
            eng: "	send	"
        },
        {
            id: 2068,
            ru: "	shook , shaken , трясти	",
            eng: "	shake	"
        },
        {
            id: 2069,
            ru: "	shot , shot , стрелять	",
            eng: "	shoot	"
        },
        {
            id: 2070,
            ru: "	shut , shut , захлопывать	",
            eng: "	shut	"
        },
        {
            id: 2071,
            ru: "	sang , sung , петь	",
            eng: "	sing	"
        },
        {
            id: 2072,
            ru: "	sank , sunk , затонуть	",
            eng: "	sink	"
        },
        {
            id: 2073,
            ru: "	sat , sat , сидеть	",
            eng: "	sit	"
        },
        {
            id: 2074,
            ru: "	slept , slept , спать	",
            eng: "	sleep	"
        },
        {
            id: 2075,
            ru: "	slid , slid , скользить	",
            eng: "	slide	"
        },
        {
            id: 2076,
            ru: "	spoke , spoken , разговаривать	",
            eng: "	speak	"
        },
        {
            id: 2077,
            ru: "	spent , spent , тратить	",
            eng: "	spend	"
        },
        {
            id: 2078,
            ru: "	spat , spat , плеваться	",
            eng: "	spit	"
        },
        {
            id: 2079,
            ru: "	stood , stood , встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 2080,
            ru: "	stole , stolen , воровать	",
            eng: "	steal	"
        },
        {
            id: 2081,
            ru: "	stuck , stuck , приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 2082,
            ru: "	stank , stunk , вонять	",
            eng: "	stink	"
        },
        {
            id: 2083,
            ru: "	struck , struck , ударять	",
            eng: "	strike	"
        },
        {
            id: 2084,
            ru: "	swore , sworn , клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 2085,
            ru: "	swept , swept , подметать	",
            eng: "	sweep	"
        },
        {
            id: 2086,
            ru: "	swam , swum , плавать	",
            eng: "	swim	"
        },
        {
            id: 2087,
            ru: "	swung , swung , качаться	",
            eng: "	swing	"
        },
        {
            id: 2088,
            ru: "	took , taken , брать	",
            eng: "	take	"
        },
        {
            id: 2089,
            ru: "	taught , taught ,  обучать	",
            eng: "	teach	"
        },
        {
            id: 2090,
            ru: "	tore , torn , рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 2091,
            ru: "	told , told , рассказывать	",
            eng: "	tell	"
        },
        {
            id: 2092,
            ru: "	thought , thought , думать	",
            eng: "	think	"
        },
        {
            id: 2093,
            ru: "	threw , thrown , бросать	",
            eng: "	throw	"
        },
        {
            id: 2094,
            ru: "	understood , understood , понимать	",
            eng: "	understand	"
        },
        {
            id: 2095,
            ru: "	woke up , woken up ,  будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 2096,
            ru: "	wore , worn , носить одежду	",
            eng: "	wear	"
        },
        {
            id: 2097,
            ru: "	wrote , written , писать	",
            eng: "	write	"
        },
        {
            id: 2098,
            ru: "	wept , wept , хныкать	",
            eng: "	weep	"
        },
        {
            id: 2099,
            ru: "	won , won , выигрывать	",
            eng: "	win	"
        },
        {
            id: 2100,
            ru: "	misunderstood , misunderstood , неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 2101,
            ru: "	misspelt , misspelt , неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 2102,
            ru: "	mistook , mistaken , ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 2103,
            ru: "	misheard , misheard , неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 2104,
            ru: "	overslept , overslept , переспать	",
            eng: "	oversleep	"
        },
        {
            id: 2105,
            ru: "	overate , overeaten , переесть 	",
            eng: "	overeat	"
        },
        {
            id: 2106,
            ru: "	overpaid , overpaid , переплатить	",
            eng: "	overpay	"
        },
        {
            id: 2107,
            ru: "	could , могу - мог	",
            eng: "	can	"
        },
        {
            id: 2108,
            ru: "	should , следует	",
            eng: "	shall	"
        },
        {
            id: 2109,
            ru: "	might , можно / возможно	",
            eng: "	may	"
        },
        {
            id: 2110,
            ru: "	would + V ,  в будущем / бы	",
            eng: "	will	"
        },
    ],
    Irregular_verbs_F_K: [

        {
            id: 2025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 2026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 2027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 2028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 2029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 2030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 2031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 2032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 2033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 2034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 2035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 2036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 2037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 2038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 2039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 2040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 2041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 2042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 2043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 2044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 2045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 2046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        }
    ],
    Irregular_verbs_B_K: [

        {
            id: 3001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
    ],
    Naughty_verbs_challenge: [
        {
            id: 3001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 3047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 3048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 3049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
    ],
    Irregular_verbs_ALL: [
        {
            id: 9001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 9002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 9003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 9004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 9005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 9006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 9007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 9008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 9009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 9010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 9011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 9012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 9013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 9014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 9015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 9016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 9017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 9018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 9019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 9020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 9021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 9022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 9023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 9024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 9025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 9026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 9027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 9028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 9029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 9030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 9031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 9032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 9033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 9034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 9035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 9036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 9037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 9038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 9039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 9040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 9041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 9042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 9043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 9044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 9045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 9046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 9047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 9048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 9049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
        {
            id: 9050,
            ru: "	let , let , позволять	",
            eng: "	let	"
        },
        {
            id: 9051,
            ru: "	lost , lost , терять	",
            eng: "	lose	"
        },
        {
            id: 9052,
            ru: "	laid , laid , укладывать	",
            eng: "	lay	"
        },
        {
            id: 9053,
            ru: "	lay , lain , лежать	",
            eng: "	lie	"
        },
        {
            id: 9054,
            ru: "	made , made , делать, создавать	",
            eng: "	make	"
        },
        {
            id: 9055,
            ru: "	meant , meant , иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 9056,
            ru: "	met , met , встречаться	",
            eng: "	meet	"
        },
        {
            id: 9057,
            ru: "	paid , paid , платить	",
            eng: "	pay	"
        },
        {
            id: 9058,
            ru: "	put , put , класть	",
            eng: "	put	"
        },
        {
            id: 9059,
            ru: "	read , read , читать	",
            eng: "	read	"
        },
        {
            id: 9060,
            ru: "	rode , ridden , ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 9061,
            ru: "	rang , rung , звенеть	",
            eng: "	ring	"
        },
        {
            id: 9062,
            ru: "	ran , run , бегать	",
            eng: "	run	"
        },
        {
            id: 9063,
            ru: "	rose , risen , подниматься	",
            eng: "	rise	"
        },
        {
            id: 9064,
            ru: "	said , said ,  сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 9065,
            ru: "	saw , seen , (у)видеть	",
            eng: "	see	"
        },
        {
            id: 9066,
            ru: "	sold , sold , продавать	",
            eng: "	sell	"
        },
        {
            id: 9067,
            ru: "	sent , sent , отправлять	",
            eng: "	send	"
        },
        {
            id: 9068,
            ru: "	shook , shaken , трясти	",
            eng: "	shake	"
        },
        {
            id: 9069,
            ru: "	shot , shot , стрелять	",
            eng: "	shoot	"
        },
        {
            id: 9070,
            ru: "	shut , shut , захлопывать	",
            eng: "	shut	"
        },
        {
            id: 9071,
            ru: "	sang , sung , петь	",
            eng: "	sing	"
        },
        {
            id: 9072,
            ru: "	sank , sunk , затонуть	",
            eng: "	sink	"
        },
        {
            id: 9073,
            ru: "	sat , sat , сидеть	",
            eng: "	sit	"
        },
        {
            id: 9074,
            ru: "	slept , slept , спать	",
            eng: "	sleep	"
        },
        {
            id: 9075,
            ru: "	slid , slid , скользить	",
            eng: "	slide	"
        },
        {
            id: 9076,
            ru: "	spoke , spoken , разговаривать	",
            eng: "	speak	"
        },
        {
            id: 9077,
            ru: "	spent , spent , тратить	",
            eng: "	spend	"
        },
        {
            id: 9078,
            ru: "	spat , spat , плеваться	",
            eng: "	spit	"
        },
        {
            id: 9079,
            ru: "	stood , stood , встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 9080,
            ru: "	stole , stolen , воровать	",
            eng: "	steal	"
        },
        {
            id: 9081,
            ru: "	stuck , stuck , приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 9082,
            ru: "	stank , stunk , вонять	",
            eng: "	stink	"
        },
        {
            id: 9083,
            ru: "	struck , struck , ударять	",
            eng: "	strike	"
        },
        {
            id: 9084,
            ru: "	swore , sworn , клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 9085,
            ru: "	swept , swept , подметать	",
            eng: "	sweep	"
        },
        {
            id: 9086,
            ru: "	swam , swum , плавать	",
            eng: "	swim	"
        },
        {
            id: 9087,
            ru: "	swung , swung , качаться	",
            eng: "	swing	"
        },
        {
            id: 9088,
            ru: "	took , taken , брать	",
            eng: "	take	"
        },
        {
            id: 9089,
            ru: "	taught , taught ,  обучать	",
            eng: "	teach	"
        },
        {
            id: 9090,
            ru: "	tore , torn , рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 9091,
            ru: "	told , told , рассказывать	",
            eng: "	tell	"
        },
        {
            id: 9092,
            ru: "	thought , thought , думать	",
            eng: "	think	"
        },
        {
            id: 9093,
            ru: "	threw , thrown , бросать	",
            eng: "	throw	"
        },
        {
            id: 9094,
            ru: "	understood , understood , понимать	",
            eng: "	understand	"
        },
        {
            id: 9095,
            ru: "	woke up , woken up ,  будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 9096,
            ru: "	wore , worn , носить одежду	",
            eng: "	wear	"
        },
        {
            id: 9097,
            ru: "	wrote , written , писать	",
            eng: "	write	"
        },
        {
            id: 9098,
            ru: "	wept , wept , хныкать	",
            eng: "	weep	"
        },
        {
            id: 9099,
            ru: "	won , won , выигрывать	",
            eng: "	win	"
        },
        {
            id: 9100,
            ru: "	misunderstood , misunderstood , неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 9101,
            ru: "	misspelt , misspelt , неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 9102,
            ru: "	mistook , mistaken , ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 9103,
            ru: "	misheard , misheard , неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 9104,
            ru: "	overslept , overslept , переспать	",
            eng: "	oversleep	"
        },
        {
            id: 9105,
            ru: "	overate , overeaten , переесть 	",
            eng: "	overeat	"
        },
        {
            id: 9106,
            ru: "	overpaid , overpaid , переплатить	",
            eng: "	overpay	"
        },
        {
            id: 9107,
            ru: "	could , могу - мог	",
            eng: "	can	"
        },
        {
            id: 9108,
            ru: "	should , следует	",
            eng: "	shall	"
        },
        {
            id: 9109,
            ru: "	might , можно / возможно	",
            eng: "	may	"
        },
        {
            id: 9110,
            ru: "	would + V ,  сделал бы	",
            eng: "	will	"
        },
    ],
    a_cook_cooks: [
        {
            id: 1,
            ru: "Готовить",
            eng: "to cook	"
        },
        {
            id: 2,
            ru: "Повар",
            eng: "a cook"
        },
        {
            id: 3,
            ru: "Шеф-повар",
            eng: "a chef /шеф/"
        },
        {
            id: 4,
            ru: "готовка",
            eng: "cooking"
        },
        {
            id: 5,
            ru: "пища",
            eng: "food"
        },
        {
            id: 6,
            ru: "порция, блюдо, еда",
            eng: "a meal /мил/"
        },
        {
            id: 7,
            ru: "резать, нарезать, порезать, разрезать",
            eng: "to cut"
        },
        {
            id: 8,
            ru: "нарезать тонкими ломтиками",
            eng: "to slice /слайс/"
        },
        {
            id: 9,
            ru: "покрошить, нарезать кубиками,",
            eng: "to dice /дайс/"
        },
        {
            id: 10,
            ru: "рубить лук, покрошить лучок",
            eng: "to chop the onion /Аниэн/"
        },
        {
            id: 11,
            ru: "	pour me a cup of tea	",
            eng: "	налейте мне чашечку чая	"
        },
        {
            id: 12,
            ru: "	May I have a sip?	",
            eng: "	Можно мне мал.глоток?	"
        },
        {
            id: 13,
            ru: "	toast	",
            eng: "	поджарить хлеб, сделать тост	"
        },
        {
            id: 14,
            ru: "	spread butter	",
            eng: "	намазать масло	"
        },
        {
            id: 15,
            ru: "	squeeze	",
            eng: "	сжимать	"
        },
        {
            id: 16,
            ru: "	Let's drink TO Vincent	",
            eng: "	Выпьем за Винсента	"
        },
        {
            id: 17,
            ru: "	weigh	",
            eng: "	Взвешивать	"
        },
        {
            id: 18,
            ru: "	measure	",
            eng: "	мерить, измерять	"
        },
        {
            id: 19,
            ru: "	mix	",
            eng: "	перемешать	"
        },
        {
            id: 20,
            ru: "	put	",
            eng: "	поставить, положить, разместить	"
        },
        {
            id: 21,
            ru: "	I weigh 73 kilos	",
            eng: "	Я вешу 73 кг	"
        },
        {
            id: 22,
            ru: "	layer	",
            eng: "	Класть слоями	"
        },
        {
            id: 23,
            ru: "	wash hands	",
            eng: "	Мыть руки	"
        },
        {
            id: 24,
            ru: "	peel	",
            eng: "	чистить от кожуры	"
        },
        {
            id: 25,
            ru: "	My weight is 73 kilos	",
            eng: "	Мой вес 73 кг	"
        },
        {
            id: 26,
            ru: "	dip	",
            eng: "	Макать	"
        },
        {
            id: 27,
            ru: "	crush	",
            eng: "	Давить	"
        },
        {
            id: 28,
            ru: "	prepare	",
            eng: "	Подготавливать, приготавливаться	"
        },
        {
            id: 29,
            ru: "	sprinkle spices /спАйсиз/	",
            eng: "	посыпать приправами	"
        },
        {
            id: 30,
            ru: "	decorate 	",
            eng: "	украшать	"
        },
        {
            id: 31,
            ru: "	flip	",
            eng: "	переворачивать	"
        },
        {
            id: 32,
            ru: "	microwave /мАйкровэйв/	",
            eng: "	греть в микроволновке	"
        },
        {
            id: 33,
            ru: "	refrigerate	",
            eng: "	to put in a fridge	"
        },
        {
            id: 34,
            ru: "	freeze	",
            eng: "	to put in a freezer	"
        },
        {
            id: 35,
            ru: "	blend	",
            eng: "	измельчить, перемолоть	"
        },
        {
            id: 36,
            ru: "	heat	",
            eng: "	Жар, огонь	"
        },
        {
            id: 37,
            ru: "	roast	",
            eng: "	Запекать	"
        },
        {
            id: 38,
            ru: "	sharpen 	",
            eng: "	Точить	"
        },
        {
            id: 39,
            ru: "	serve	",
            eng: "	Сервировать, обслуживать, подавать	"
        },
        {
            id: 40,
            ru: "	celebrate	",
            eng: "	Праздновать, отмечать	"
        },
        {
            id: 41,
            ru: "	add	",
            eng: "	добавлять	"
        },
        {
            id: 42,
            ru: "	sift	",
            eng: "	просеивать	"
        },
        {
            id: 43,
            ru: "	roll	",
            eng: "	раскатывать, катить	"
        },
        {
            id: 44,
            ru: "	toss	",
            eng: "	подкидывать	"
        },
        {
            id: 45,
            ru: "	grate	",
            eng: "	натереть на терке	"
        },
        {
            id: 46,
            ru: "	top	",
            eng: "	положить сверху	"
        },
        {
            id: 47,
            ru: "	bake	",
            eng: "	выпекать	"
        },
        {
            id: 48,
            ru: "	cool down	",
            eng: "	остывать	"
        },
        {
            id: 49,
            ru: "	carve	",
            eng: "	вырезАть	"
        },
        {
            id: 50,
            ru: "	mash /мэш/ smash 	",
            eng: "	толочь	"
        },
        {
            id: 51,
            ru: "	tenderize	",
            eng: "	отбивать, делать мягким	"
        },
        {
            id: 52,
            ru: "	BBQ	",
            eng: "	Делать Барбекю	"
        },
        {
            id: 53,
            ru: "	simmer	",
            eng: "	готовить на минимальной мощности	"
        },
        {
            id: 54,
            ru: "	melt	",
            eng: "	растопить, таять	"
        },
        {
            id: 55,
            ru: "	fry	",
            eng: "	жарить	"
        },
        {
            id: 56,
            ru: "	sauté 	",
            eng: "	обжаривать	"
        },
        {
            id: 57,
            ru: "	boil	",
            eng: "	варить, кипятить	"
        },
        {
            id: 58,
            ru: "	A pot	",
            eng: "	Кастрлюля	"
        },
        {
            id: 59,
            ru: "	stir	",
            eng: "	Помешивать	"
        },
        {
            id: 60,
            ru: "	taste	",
            eng: "	Пробовать на вкус	"
        },
        {
            id: 61,
            ru: "	light	",
            eng: "	включать огонь	"
        },
        {
            id: 62,
            ru: "	cover with a lid	",
            eng: "	накрывать крышкой	"
        },
        {
            id: 63,
            ru: "	remove	",
            eng: "	убирать	"
        },
        {
            id: 64,
            ru: "	turn on/off	",
            eng: "	включать или выключать	"
        },
        {
            id: 65,
            ru: "	steam	",
            eng: "	пар / готовить на пару	"
        },
        {
            id: 66,
            ru: "	whisk with a whisker	",
            eng: "	взбивать венчиком	"
        },
        {
            id: 67,
            ru: "	A frying pan	",
            eng: "	сковорода	"
        },
        {
            id: 68,
            ru: "	drain	",
            eng: "	слить воду	"
        },
        {
            id: 69,
            ru: "	rinse	",
            eng: "	прополоскать, ополоснуть	"
        },
        {
            id: 70,
            ru: "	uncork	",
            eng: "	открыть пробку	"
        },
        {
            id: 71,
            ru: "	an oven	",
            eng: "	духовка	"
        },
        {
            id: 72,
            ru: "	a stove	",
            eng: "	печь	"
        },
        {
            id: 73,
            ru: "	a fork	",
            eng: "	вилка	"
        },
        {
            id: 74,
            ru: "	a spoon	",
            eng: "	ложка	"
        },
        {
            id: 75,
            ru: "	a cup and a mug	",
            eng: "	чашка и кружка	"
        },
        {
            id: 76,
            ru: "	one knife or 2 knives	",
            eng: "	нож или два ножа	"
        },
        {
            id: 77,
            ru: "	a cutting board	",
            eng: "	разделоочная доска	"
        },
        {
            id: 78,
            ru: "	foil	",
            eng: "	фольга	"
        },
        {
            id: 79,
            ru: "	sausage and sausages /сОсиджэз/	",
            eng: "	Колбаса и сосиски	"
        },
        {
            id: 80,
            ru: "	Delicious /делИшэс / dinner	",
            eng: "	Наивкуснейший ужин	"
        },
        {
            id: 81,
            ru: "	A pepper is not paper	",
            eng: "	/э пЭппэ из нот ПэЙпэ/ не бумага	"
        },
        {
            id: 82,
            ru: "	salt / солт/	",
            eng: "	соль	"
        },

    ],
    cooking: [
        {
            id: 1,
            ru: "Готовить",
            eng: "to cook	"
        },
        {
            id: 2,
            ru: "Повар",
            eng: "a cook"
        },
        {
            id: 3,
            ru: "Шеф-повар",
            eng: "a chef /шеф/"
        },
        {
            id: 4,
            ru: "готовка",
            eng: "cooking"
        },
        {
            id: 5,
            ru: "пища",
            eng: "food"
        },
        {
            id: 6,
            ru: "порция, блюдо, еда",
            eng: "a meal /мил/"
        },
        {
            id: 7,
            ru: "резать, нарезать, порезать, разрезать",
            eng: "to cut"
        },
        {
            id: 8,
            ru: "нарезать тонкими ломтиками",
            eng: "to slice /слайс/"
        },
        {
            id: 9,
            ru: "покрошить, нарезать кубиками,",
            eng: "to dice /дайс/"
        },
        {
            id: 10,
            ru: "рубить лук, покрошить лучок",
            eng: "to chop the onion /Аниэн/"
        },
        {
            id: 11,
            ru: "	pour me a cup of tea	",
            eng: "	налейте мне чашечку чая	"
        },
        {
            id: 12,
            ru: "	May I have a sip?	",
            eng: "	Можно мне мал.глоток?	"
        },
        {
            id: 13,
            ru: "	toast	",
            eng: "	поджарить хлеб, сделать тост	"
        },
        {
            id: 14,
            ru: "	spread butter	",
            eng: "	намазать масло	"
        },
        {
            id: 15,
            ru: "	squeeze	",
            eng: "	сжимать	"
        },
        {
            id: 16,
            ru: "	Let's drink TO Vincent	",
            eng: "	Выпьем за Винсента	"
        },
        {
            id: 17,
            ru: "	weigh	",
            eng: "	Взвешивать	"
        },
        {
            id: 18,
            ru: "	measure	",
            eng: "	мерить, измерять	"
        },
        {
            id: 19,
            ru: "	mix	",
            eng: "	перемешать	"
        },
        {
            id: 20,
            ru: "	put	",
            eng: "	поставить, положить, разместить	"
        },
        {
            id: 21,
            ru: "	I weigh 73 kilos	",
            eng: "	Я вешу 73 кг	"
        },
        {
            id: 22,
            ru: "	layer	",
            eng: "	Класть слоями	"
        },
        {
            id: 23,
            ru: "	wash hands	",
            eng: "	Мыть руки	"
        },
        {
            id: 24,
            ru: "	peel	",
            eng: "	чистить от кожуры	"
        },
        {
            id: 25,
            ru: "	My weight is 73 kilos	",
            eng: "	Мой вес 73 кг	"
        },
        {
            id: 26,
            ru: "	dip	",
            eng: "	Макать	"
        },
        {
            id: 27,
            ru: "	crush	",
            eng: "	Давить	"
        },
        {
            id: 28,
            ru: "	prepare	",
            eng: "	Подготавливать, приготавливаться	"
        },
        {
            id: 29,
            ru: "	sprinkle spices /спАйсиз/	",
            eng: "	посыпать приправами	"
        },
        {
            id: 30,
            ru: "	decorate 	",
            eng: "	украшать	"
        },
        {
            id: 31,
            ru: "	flip	",
            eng: "	переворачивать	"
        },
        {
            id: 32,
            ru: "	microwave /мАйкровэйв/	",
            eng: "	греть в микроволновке	"
        },
        {
            id: 33,
            ru: "	refrigerate	",
            eng: "	to put in a fridge	"
        },
        {
            id: 34,
            ru: "	freeze	",
            eng: "	to put in a freezer	"
        },
        {
            id: 35,
            ru: "	blend	",
            eng: "	измельчить, перемолоть	"
        },
        {
            id: 36,
            ru: "	heat	",
            eng: "	Жар, огонь	"
        },
        {
            id: 37,
            ru: "	roast	",
            eng: "	Запекать	"
        },
        {
            id: 38,
            ru: "	sharpen 	",
            eng: "	Точить	"
        },
        {
            id: 39,
            ru: "	serve	",
            eng: "	Сервировать, обслуживать, подавать	"
        },
        {
            id: 40,
            ru: "	celebrate	",
            eng: "	Праздновать, отмечать	"
        },
        {
            id: 41,
            ru: "	add	",
            eng: "	добавлять	"
        },
        {
            id: 42,
            ru: "	sift	",
            eng: "	просеивать	"
        },
        {
            id: 43,
            ru: "	roll	",
            eng: "	раскатывать, катить	"
        },
        {
            id: 44,
            ru: "	toss	",
            eng: "	подкидывать	"
        },
        {
            id: 45,
            ru: "	grate	",
            eng: "	натереть на терке	"
        },
        {
            id: 46,
            ru: "	top	",
            eng: "	положить сверху	"
        },
        {
            id: 47,
            ru: "	bake	",
            eng: "	выпекать	"
        },
        {
            id: 48,
            ru: "	cool down	",
            eng: "	остывать	"
        },
        {
            id: 49,
            ru: "	carve	",
            eng: "	вырезАть	"
        },
        {
            id: 50,
            ru: "	mash /мэш/ smash 	",
            eng: "	толочь	"
        },
        {
            id: 51,
            ru: "	tenderize	",
            eng: "	отбивать, делать мягким	"
        },
        {
            id: 52,
            ru: "	BBQ	",
            eng: "	Делать Барбекю	"
        },
        {
            id: 53,
            ru: "	simmer	",
            eng: "	готовить на минимальной мощности	"
        },
        {
            id: 54,
            ru: "	melt	",
            eng: "	растопить, таять	"
        },
        {
            id: 55,
            ru: "	fry	",
            eng: "	жарить	"
        },
        {
            id: 56,
            ru: "	sauté 	",
            eng: "	обжаривать	"
        },
        {
            id: 57,
            ru: "	boil	",
            eng: "	варить, кипятить	"
        },
        {
            id: 58,
            ru: "	A pot	",
            eng: "	Кастрлюля	"
        },
        {
            id: 59,
            ru: "	stir	",
            eng: "	Помешивать	"
        },
        {
            id: 60,
            ru: "	taste	",
            eng: "	Пробовать на вкус	"
        },
        {
            id: 61,
            ru: "	light	",
            eng: "	включать огонь	"
        },
        {
            id: 62,
            ru: "	cover with a lid	",
            eng: "	накрывать крышкой	"
        },
        {
            id: 63,
            ru: "	remove	",
            eng: "	убирать	"
        },
        {
            id: 64,
            ru: "	turn on/off	",
            eng: "	включать или выключать	"
        },
        {
            id: 65,
            ru: "	steam	",
            eng: "	пар / готовить на пару	"
        },
        {
            id: 66,
            ru: "	whisk with a whisker	",
            eng: "	взбивать венчиком	"
        },
        {
            id: 67,
            ru: "	A frying pan	",
            eng: "	сковорода	"
        },
        {
            id: 68,
            ru: "	drain	",
            eng: "	слить воду	"
        },
        {
            id: 69,
            ru: "	rinse	",
            eng: "	прополоскать, ополоснуть	"
        },
        {
            id: 70,
            ru: "	uncork	",
            eng: "	открыть пробку	"
        },
        {
            id: 71,
            ru: "	an oven	",
            eng: "	духовка	"
        },
        {
            id: 72,
            ru: "	a stove	",
            eng: "	печь	"
        },
        {
            id: 73,
            ru: "	a fork	",
            eng: "	вилка	"
        },
        {
            id: 74,
            ru: "	a spoon	",
            eng: "	ложка	"
        },
        {
            id: 75,
            ru: "	a cup and a mug	",
            eng: "	чашка и кружка	"
        },
        {
            id: 76,
            ru: "	one knife / 2 knives	",
            eng: "	нож и два ножа	"
        },
        {
            id: 77,
            ru: "	a cutting board	",
            eng: "	разделоочная доска	"
        },
        {
            id: 78,
            ru: "	foil	",
            eng: "	фольга	"
        },
        {
            id: 79,
            ru: "	sausage and sausages /сОсиджэз/	",
            eng: "	Колбаса и сосиски	"
        },
        {
            id: 80,
            ru: "	Delicious /делИшэс / dinner	",
            eng: "	Наивкуснейший ужин	"
        },
        {
            id: 81,
            ru: "	A pepper is not paper	",
            eng: "	/э пЭппэ из нот ПэЙпэ/ не бумага	"
        },
        {
            id: 82,
            ru: "	salt / солт/	",
            eng: "	соль	"
        },

    ],
    travel: [
        {
            id: 1,
            ru: "	Какую страну ты хочешь посетить и почему?	",
            eng: "	What country do you want to Visit and why?	"
        },
        {
            id: 2,
            ru: "	Какую страну ты НЕ хочешь посещать и почему?	",
            eng: "	What country do you not want to Visit? Why?	"
        },
        {
            id: 3,
            ru: "	Антананариво - столица какой страны?	",
            eng: "	Antananarivo is a capital of what country?	"
        },
        {
            id: 4,
            ru: "	Африка - это страна?	",
            eng: "	Is Africa a country? 	"
        },
        {
            id: 5,
            ru: "	Сколько стран в Африке ты знаешь?	",
            eng: "	How many countries in Africa do you know?	"
        },
        {
            id: 6,
            ru: "	Какая страна известна своими Кенгуру?	",
            eng: "	What country is famous for its kangaroo?	"
        },
        {
            id: 7,
            ru: "	Какая страна известна своими винами?	",
            eng: "	What country is famous for its wine?	"
        },
        {
            id: 8,
            ru: "	Какая страна известна своей популяцией (густонаселенностью)?	",
            eng: "	What country is famous for its population?	"
        },
        {
            id: 9,
            ru: "	Какая страна находится близко к твоей стране?	",
            eng: "	What country is very close to your country?	"
        },
        {
            id: 10,
            ru: "	Какие страны посетила твоя семья?	",
            eng: "	What countries did your family visit?	"
        },
        {
            id: 11,
            ru: "	Какой лучший способ путешествовать?	",
            eng: "	What is the best way to travel?	"
        },
        {
            id: 12,
            ru: "	Сможешь назвать 2 страны начинающихся с буквы Z?	",
            eng: "	Can you name 2 countries beginning with Z ?	"
        },
        {
            id: 13,
            ru: "	Сможешь назвать 3 страны начинающихся с буквы R?	",
            eng: "	Can you name 3 countries beginning with R ?	"
        },
        {
            id: 14,
            ru: "	Знаешь что-нибудь про Северную Корею?	",
            eng: "	Do you know anything about North Korea?	"
        },
        {
            id: 15,
            ru: "	Какая самая большая о площади страна?	",
            eng: "	What is the biggest country in the world?	"
        },
        {
            id: 16,
            ru: "	Сколько текущих президентов ты сможешь назвать?	",
            eng: "	How many current presidents can you name?	"
        },
        {
            id: 17,
            ru: "	Вы бы согласились выйти замуж за иностранца?	",
            eng: "	Would you agree to marry a foreigner?	"
        },
        {
            id: 18,
            ru: "	Вы бы согласились съесть легушачьи лапки?	",
            eng: "	Would you agree to eat frog legs in France?	"
        },
        {
            id: 19,
            ru: "	Вы бы согласились попробовать наркотики в Амстердаме?	",
            eng: "	Would you agree to try drugs in Amsterdam?	"
        },
        {
            id: 20,
            ru: "	Вы бы согласились поехать вокруг света на машине?	",
            eng: "	Would you agree to travel around the world by car?	"
        },
        {
            id: 21,
            ru: "	Вы знаете какие-нибудь интересные факты о странах?	",
            eng: "	Do u know any interesting facts about any country? 	"
        },

    ],
    mission2a1letters: [
        {					
            id	:	1	,		
            ru	:	"	A	"	,
            eng	:	"	/ эй /	"	
            }	,				
            {					
            id	:	2	,		
            ru	:	"	B	"	,
            eng	:	"	/ би /	"	
            }	,				
            {					
            id	:	3	,		
            ru	:	"	C	"	,
            eng	:	"	/ си /	"	
            }	,				
            {					
            id	:	4	,		
            ru	:	"	D	"	,
            eng	:	"	/ ди /	"	
            }	,				
            {					
            id	:	5	,		
            ru	:	"	E	"	,
            eng	:	"	/ и /	"	
            }	,				
            {					
            id	:	6	,		
            ru	:	"	F	"	,
            eng	:	"	/ эф /	"	
            }	,				
            {					
            id	:	7	,		
            ru	:	"	G	"	,
            eng	:	"	/ джи /	"	
            }	,				
            {					
            id	:	8	,		
            ru	:	"	H	"	,
            eng	:	"	/ эйч /	"	
            }	,				
            {					
            id	:	9	,		
            ru	:	"	I	"	,
            eng	:	"	/ ай /	"	
            }	,				
            {					
            id	:	10	,		
            ru	:	"	J	"	,
            eng	:	"	/ джэй /	"	
            }	,				
            {					
            id	:	11	,		
            ru	:	"	K	"	,
            eng	:	"	/ кей /	"	
            }	,				
            {					
            id	:	12	,		
            ru	:	"	L	"	,
            eng	:	"	/ эл /	"	
            }	,				
            {					
            id	:	13	,		
            ru	:	"	M	"	,
            eng	:	"	/ эм /	"	
            }	,				
            {					
            id	:	14	,		
            ru	:	"	N	"	,
            eng	:	"	/ эн /	"	
            }	,				
            {					
            id	:	15	,		
            ru	:	"	O	"	,
            eng	:	"	/ оу /	"	
            }	,				
            {					
            id	:	16	,		
            ru	:	"	P	"	,
            eng	:	"	/ пи /	"	
            }	,				
            {					
            id	:	17	,		
            ru	:	"	Q	"	,
            eng	:	"	/ кью /	"	
            }	,				
            {					
            id	:	18	,		
            ru	:	"	R	"	,
            eng	:	"	/ а /	"	
            }	,				
            {					
            id	:	19	,		
            ru	:	"	S	"	,
            eng	:	"	/ эс /	"	
            }	,				
            {					
            id	:	20	,		
            ru	:	"	T	"	,
            eng	:	"	/ ти /	"	
            }	,				
            {					
            id	:	21	,		
            ru	:	"	U	"	,
            eng	:	"	/ ю /	"	
            }	,				
            {					
            id	:	22	,		
            ru	:	"	V	"	,
            eng	:	"	/ ви /	"	
            }	,				
            {					
            id	:	23	,		
            ru	:	"	W	"	,
            eng	:	"	/ дабл ю /	"	
            }	,				
            {					
            id	:	24	,		
            ru	:	"	X	"	,
            eng	:	"	/ экс /	"	
            }	,				
            {					
            id	:	25	,		
            ru	:	"	Y	"	,
            eng	:	"	/ уай /	"	
            }	,				
            {					
            id	:	26	,		
            ru	:	"	Z	"	,
            eng	:	"	/ зи (зэд) /	"	
            }	,				
			

    ],
    mission2a2time: [
        {
            id: 1,
            eng: "	at 14:30	",
            ru: "	at half past two PM	"
        },
        {
            id: 2,
            eng: "	at 13:15	",
            ru: "	at a quarter past one PM	"
        },
        {
            id: 3,
            eng: "	at 13:00	",
            ru: "	at one PM	"
        },
        {
            id: 4,
            eng: "	at 00:00	",
            ru: "	at twelve AM at midnight	"
        },
        {
            id: 5,
            eng: "	at 12:00	",
            ru: "	at twelve PM at noon	"
        },
        {
            id: 6,
            eng: "	at 13:58	",
            ru: "	at two to two PM	"
        },
        {
            id: 7,
            eng: "	at 21:00	",
            ru: "	at nine PM	"
        },
        {
            id: 8,
            eng: "	at 23:30	",
            ru: "	at half past eleven PM	"
        },
        {
            id: 9,
            eng: "	at 23:45	",
            ru: "	at a quarter to midnight	"
        },
        {
            id: 10,
            eng: "	at 23:15	",
            ru: "	at a quarter past eleven PM	"
        },
        {
            id: 11,
            eng: "	at 13:13	",
            ru: "	at thirteen past one PM	"
        },
        {
            id: 12,
            eng: "	at 13:30	",
            ru: "	at half past one PM	"
        },
        {
            id: 13,
            eng: "	at 01:30	",
            ru: "	at half past one AM	"
        },
        {
            id: 14,
            eng: "	at 02:30	",
            ru: "	at half past two AM	"
        },
        {
            id: 15,
            eng: "	at 01:15	",
            ru: "	at a quarter past one AM	"
        },
        {
            id: 16,
            eng: "	at 01:00	",
            ru: "	at one AM	"
        },
        {
            id: 17,
            eng: "	at 19:00	",
            ru: "	at seven PM	"
        },

    ],
    mission1a2time: [
        {
            id: 1,
            ru: "	В полночь я сплю!	",
            eng: "	I sleep at midnight!	"
        },
        {
            id: 2,
            ru: "	Это обалденное утро!	",
            eng: "	It is an awesome morning!	"
        },
        {
            id: 3,
            ru: "	Добрый день.	",
            eng: "	Good afternoon.	"
        },
        {
            id: 4,
            ru: "	Хорошего вам вечера	",
            eng: "	Have a nice evening	"
        },
        {
            id: 5,
            ru: "	ноль часов, ноль минут	",
            eng: "	00:00AM "
        },
        {
            id: 6,
            ru: "	двенадцать часов дня	",
            eng: "	twelve pm	"
        },
        {
            id: 7,
            ru: "	двенадцать часов ночи	",
            eng: "	12 am	"
        },
        {
            id: 8,
            ru: "	в полночь	",
            eng: "	at midnight	"
        },
        {
            id: 9,
            ru: "	днем	",
            eng: "	in the afternoon	"
        },
        {
            id: 10,
            ru: "	утром	",
            eng: "	in the morning	"
        },
        {
            id: 11,
            ru: "	вечером	",
            eng: "	in the evening	"
        },
        {
            id: 12,
            ru: "	ночью	",
            eng: "	at night	"
        },
        {
            id: 13,
            ru: "	в полдень	",
            eng: "	at noon	"
        },
        {
            id: 14,
            ru: "	пол второго	",
            eng: "	half past one	"
        },
        {
            id: 15,
            ru: "	пол девятого	",
            eng: "	half past eight	"
        },
        {
            id: 16,
            ru: "	пол деcятого	",
            eng: "	half past nine	"
        },
        {
            id: 17,
            ru: "	eleven thirty	",
            eng: "	half past eleven	"
        },
        {
            id: 18,
            ru: "	без 20 девять	",
            eng: "	twenty to nine	"
        },
        {
            id: 19,
            ru: "	без пятнадцати четыре	",
            eng: "	a quarter to four	"
        },
        {
            id: 20,
            ru: "	без двух минут час	",
            eng: "	two minutes to two	"
        },
        {
            id: 21,
            ru: "	пятнадцать минут пятого	",
            eng: "	a quarter past four	"
        },
        {
            id: 22,
            ru: "	пятнадцать пятнадцать	",
            eng: "	it is three fifteen	"
        },
        {
            id: 23,
            ru: "	Двадцать ноль ноль	",
            eng: "	it is 8 PM	"
        },
        {
            id: 24,
            ru: "	Десять ноль одна	",
            eng: "	ten o one (Или one past ten)	"
        },
        {
            id: 25,
            ru: "	Восемь часов, тринадцать минут	",
            eng: "	thirteen past eight	"
        },
        {
            id: 26,
            ru: "	Приходите в 2 часа	",
            eng: "	Come at 2 o'clock	"
        },
        {
            id: 27,
            ru: "	Перезвоните после обеда",
            eng: "	call back after lunch	"
        },
        {
            id: 28,
            ru: "	До обеда пожалуйста сделайте это	",
            eng: "	do it before lunch, please	"
        },
        {
            id: 29,
            ru: "	Через 10 минут	",
            eng: "	in 10 minutes	"
        },
        {
            id: 30,
            ru: "	в 10 часов и 10 минут	",
            eng: "	at Ten Ten (Или at ten past ten)	"
        },
        {
            id: 31,
            ru: "	в 10 часов	",
            eng: "	at ten o'clock	"
        },
        {
            id: 32,
            ru: "	через 2 часа	",
            eng: "	in two hours	"
        },
        {
            id: 33,
            ru: "	60 минут это один час	",
            eng: "	60 minutes…. it is an hour	"
        },

    ],
    mission1a1: [
        {
            id: 102,
            eng: "	вы или ты	",
            ru: "	/Ю/ you	"
        },
        {
            id: 103,
            eng: "	ваше, твоё	",
            ru: "	/Ё/ your	"
        },
        {
            id: 104,
            eng: "	он	",
            ru: "	/хИ/ he	"
        },
        {
            id: 105,
            eng: "	его номер	",
            ru: "	/хиз нАмбэ/ his number	"
        },
        {
            id: 106,
            eng: "	она	",
            ru: "	/щИ/ she варит борщИ	"
        },
        {
            id: 107,
            eng: "	её	",
            ru: "	/хЁ/ her	"
        },
        {
            id: 108,
            eng: "	я	",
            ru: "	/Ай/ I	"
        },
        {
            id: 109,
            eng: "	мой, моё, моя, мои	",
            ru: "	/мАй/ my	"
        },
        {
            id: 110,
            eng: "	мы	",
            ru: "	/уи/ we	"
        },
        {
            id: 111,
            eng: "	наш, наше, наши, наша	",
            ru: "	/АУЭ/ our	"
        },
        {
            id: 112,
            eng: "	они	",
            ru: "	/дЭЙ/ they	"
        },
        {
            id: 113,
            eng: "	их дети	",
            ru: "	/дЭИР чилдрен/ their children	"
        },
        {
            id: 114,
            eng: "	их ребёнок	",
            ru: "	/дЭИР чайлд/ their child	"
        },
        {
            id: 115,
            eng: "	их собака	",
            ru: "	/дЭИР дог/ their dog	"
        },
        {
            id: 116,
            eng: "	это	",
            ru: "	/ит/ it	"
        },
        {
            id: 117,
            eng: "	вот это обалденно!	",
            ru: "	/Дыс из осм/ this is awesome!	"
        },
    ],
}
export default allCardsGameFindAPair

// объединение массивов и объектов
// const arrayFirst = [
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     }
// ]
// const arraySecond = [
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     }
// ]

// const arrayFirstAndSecond = [
//     ...arrayFirst, ...arraySecond,
//     {
//         id: '3',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '3',
//         ru: '',
//         eng: ''
//     },
// ]